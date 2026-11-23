import { Injectable, computed, effect, inject, signal } from '@angular/core';
import {
  ArticulationPhase,
  ExampleWord,
  GermanPhoneme,
  SvgOrganPaths
} from '../models/phoneme.model';
import { PhonemeDataService } from './phoneme-data.service';

@Injectable({
  providedIn: 'root'
})
export class AudioSyncService {
  private readonly phonemeData = inject(PhonemeDataService);

  /** Tiến trình timeline chuẩn hóa từ 0.0 đến 1.0 (mặc định 0.50 = giữa vùng đỉnh phát âm 30%–70%) */
  readonly progress = signal<number>(0.5);

  /** Đang phát âm thanh & chuyển động hay không */
  readonly isPlaying = signal<boolean>(false);

  /** Chế độ phát chậm 0.5x */
  readonly isSlowMotion = signal<boolean>(false);

  /** Chế độ lặp lại liên tục */
  readonly isLooping = signal<boolean>(false);

  /** Chế độ "Tập trung vào âm" — chỉ phát trong vùng [30% -> 70%] của âm vị */
  readonly focusOnPhoneme = signal<boolean>(false);

  /** Tổng thời lượng chu kỳ phát âm hiện tại (giây) */
  readonly duration = signal<number>(0.85);

  /** Thời gian hiện tại (giây) */
  readonly currentTime = computed(() => +(this.progress() * this.duration()).toFixed(2));

  /** Chỉ số khung hình hiện tại (0 -> 60 frames) */
  readonly currentFrame = computed(() => Math.round(this.progress() * 60));
  readonly totalFrames = 60;

  /**
   * Khoảng [startProgress, endProgress] chuẩn theo thiết kế:
   * - 0% -> 30% (0.0 -> 0.30): Rest -> Target
   * - 30% -> 70% (0.30 -> 0.70): Giữ đỉnh Target (luồng hơi & rung dây thanh hoạt động mạnh)
   * - 70% -> 100% (0.70 -> 1.0): Target -> Release
   */
  readonly phonemeWindow = computed<[number, number]>(() => [0.3, 0.7]);

  /** Xác định giai đoạn phát âm hiện tại: Nghỉ (rest) | Đỉnh phát âm (target) | Nhả âm (release) */
  readonly currentPhase = computed<ArticulationPhase>(() => {
    const p = this.progress();
    const [start, end] = this.phonemeWindow();
    if (p < start) {
      return 'rest';
    }
    if (p <= end) {
      return 'target';
    }
    return 'release';
  });

  /**
   * Cường độ đạt đỉnh phát âm (0.0 -> 1.0) dùng cho hiệu ứng rung dây thanh, luồng hơi và độ lệch giấy
   */
  readonly targetIntensity = computed<number>(() => {
    const phoneme = this.phonemeData.selectedPhoneme();
    const p = this.progress();
    const isTwoStage = phoneme.manner === 'plosive' || phoneme.manner === 'affricate';
    const start = 0.3;
    const end = isTwoStage ? 0.75 : 0.7;

    if (p < start) {
      return start > 0 ? this.easeInOutCubic(p / start) : 1;
    }
    if (p <= end) {
      return 1.0;
    }
    const releaseRatio = (p - end) / Math.max(0.01, 1 - end);
    return Math.max(0, 1 - this.easeInOutCubic(releaseRatio));
  });

  /**
   * Nội suy mượt mà tọa độ SVG theo tiến trình timeline (0..1):
   * - Âm tắc (plosive) & tắc-xát (affricate) dùng quy trình 2 pha:
   *   0%->30%: rest -> target (đóng tắc)
   *   30%->50%: giữ đóng tắc (oralAirflowOpacity = 0)
   *   50%->75%: bật sang release (bật hơi [pʰ, tʰ, kʰ] hoặc xát /f, s, ʃ/)
   *   75%->100%: release -> rest
   * - Các âm khác:
   *   0%->30%: rest -> target | 30%->70%: giữ target (hoặc trượt nguyên âm đôi) | 70%->100%: về rest
   */
  readonly interpolatedOrganPaths = computed<SvgOrganPaths>(() => {
    const phoneme = this.phonemeData.selectedPhoneme();
    const { rest, target, release } = phoneme.svgKeyframes;
    const p = this.progress();

    if (phoneme.manner === 'plosive' || phoneme.manner === 'affricate') {
      if (p <= 0.3) {
        return this.lerpOrganStates(rest, target, this.easeInOutCubic(p / 0.3));
      } else if (p <= 0.5) {
        return target;
      } else if (p <= 0.75) {
        const burstT = this.easeInOutCubic((p - 0.5) / 0.25);
        return this.lerpOrganStates(target, release, burstT);
      } else {
        const restT = this.easeInOutCubic((p - 0.75) / 0.25);
        return this.lerpOrganStates(release, rest, restT);
      }
    }

    const [start, end] = this.phonemeWindow(); // 0.30 -> 0.70

    if (p <= start) {
      const t = start > 0 ? this.easeInOutCubic(p / start) : 1;
      return this.lerpOrganStates(rest, target, t);
    } else if (p <= end) {
      const inTargetRatio = (p - start) / Math.max(0.01, end - start);
      if (phoneme.category === 'diphthong') {
        return this.lerpOrganStates(target, release, this.easeInOutCubic(inTargetRatio));
      }
      return this.lerpOrganStates(target, release, inTargetRatio * 0.04);
    } else {
      const releaseRatio = (p - end) / Math.max(0.01, 1 - end);
      const t = this.easeInOutCubic(releaseRatio);
      return this.lerpOrganStates(
        phoneme.category === 'diphthong' ? release : target,
        release,
        t
      );
    }
  });

  private rafId: number | null = null;
  private lastTimestamp = 0;
  private lastPhonemeId = '';
  private audioElement: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;

  constructor() {
    // Khi người dùng đổi sang âm vị khác, dừng phát và đưa thanh trượt về 50% (giữa vùng Target 30%-70%)
    effect(
      () => {
        const phoneme = this.phonemeData.selectedPhoneme();
        if (phoneme && phoneme.id !== this.lastPhonemeId) {
          this.lastPhonemeId = phoneme.id;
          this.stopPlayback(false);
          this.progress.set(0.5);
        }
      },
      { allowSignalWrites: true }
    );
  }

  /** Bật / Tắt Play-Pause trên thanh điều khiển */
  togglePlay(): void {
    if (this.isPlaying()) {
      this.pause();
    } else {
      this.play();
    }
  }

  /** Phát âm vị hiện tại hoặc từ ví dụ */
  play(word?: ExampleWord): void {
    const phoneme = this.phonemeData.selectedPhoneme();
    const activeWord = word ?? this.phonemeData.selectedExampleWord();

    if (word) {
      this.phonemeData.selectExampleWord(word);
    }

    const [winStart] = this.phonemeWindow();
    const startProg = this.focusOnPhoneme()
      ? winStart
      : this.progress() >= 0.96 || this.progress() === 0.5
        ? 0
        : this.progress();

    this.progress.set(startProg);
    this.isPlaying.set(true);
    this.lastTimestamp = performance.now();

    this.triggerSynchronizedAudio(phoneme, activeWord);

    this.cancelRaf();
    const tick = (now: number) => {
      if (!this.isPlaying()) {
        return;
      }
      const dt = (now - this.lastTimestamp) / 1000;
      this.lastTimestamp = now;

      const speedMultiplier = this.isSlowMotion() ? 0.5 : 1.0;
      const totalDur = this.duration();
      const [startBound, endBound] = this.focusOnPhoneme()
        ? this.phonemeWindow()
        : [0, 1];

      let nextProgress = this.progress() + (dt * speedMultiplier) / totalDur;

      if (nextProgress >= endBound) {
        if (this.isLooping()) {
          nextProgress = startBound;
          this.triggerSynchronizedAudio(
            this.phonemeData.selectedPhoneme(),
            this.phonemeData.selectedExampleWord()
          );
        } else {
          // Khi kết thúc phát 1 lần, dừng lại ở 50% (Target) hoặc endBound để người học quan sát
          this.progress.set(this.focusOnPhoneme() ? 0.5 : 1.0);
          this.isPlaying.set(false);
          this.cancelRaf();
          return;
        }
      }

      this.progress.set(nextProgress);
      this.rafId = requestAnimationFrame(tick);
    };

    this.rafId = requestAnimationFrame(tick);
  }

  /** Phát riêng âm vị chuẩn IPA (khi bấm nút Loa cạnh ký hiệu IPA) */
  playIsolatedPhoneme(phoneme?: GermanPhoneme): void {
    if (phoneme) {
      this.phonemeData.selectPhoneme(phoneme);
    }
    this.focusOnPhoneme.set(true);
    const [winStart] = this.phonemeWindow();
    this.progress.set(winStart);
    this.play();
  }

  pause(): void {
    this.stopPlayback(false);
  }

  /** Tua đến tiến trình bất kỳ (0.0 -> 1.0) từ thanh trượt */
  seekToProgress(value: number): void {
    const clamped = Math.max(0, Math.min(1, value));
    this.progress.set(clamped);
  }

  /** Tua từng khung hình (-1 hoặc +1 frame) */
  stepFrame(deltaFrames: number): void {
    this.pause();
    const step = deltaFrames / this.totalFrames;
    this.seekToProgress(this.progress() + step);
  }

  /** Nhảy nhanh đến giai đoạn Rest (0%) / Target (50%) / Release (90%) */
  jumpToPhase(phase: ArticulationPhase): void {
    this.pause();
    if (phase === 'rest') {
      this.seekToProgress(0.05);
    } else if (phase === 'target') {
      this.seekToProgress(0.5);
    } else {
      this.seekToProgress(0.92);
    }
  }

  toggleSlowMotion(): void {
    this.isSlowMotion.update((v) => !v);
  }

  toggleLoop(): void {
    this.isLooping.update((v) => !v);
  }

  toggleFocusOnPhoneme(): void {
    const next = !this.focusOnPhoneme();
    this.focusOnPhoneme.set(next);
    if (next) {
      const [start, end] = this.phonemeWindow();
      if (this.progress() < start || this.progress() > end) {
        this.progress.set(0.5);
      }
    }
  }

  private stopPlayback(resetProgress: boolean): void {
    this.isPlaying.set(false);
    this.cancelRaf();
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }
    if (resetProgress) {
      this.progress.set(0);
    }
  }

  private cancelRaf(): void {
    if (this.rafId !== null && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private triggerSynchronizedAudio(phoneme: GermanPhoneme, word?: ExampleWord): void {
    if (typeof window === 'undefined') {
      return;
    }

    const audioSrc = this.focusOnPhoneme()
      ? phoneme.phonemeAudioPath
      : word?.audioPath || phoneme.phonemeAudioPath;

    const rate = this.isSlowMotion() ? 0.5 : 1.0;

    try {
      if (this.audioElement) {
        this.audioElement.pause();
      }
      const audio = new Audio(audioSrc);
      audio.playbackRate = rate;
      this.audioElement = audio;

      audio.play().catch(() => {
        this.playFallbackAudio(phoneme, word);
      });
    } catch {
      this.playFallbackAudio(phoneme, word);
    }
  }

  private playFallbackAudio(phoneme: GermanPhoneme, word?: ExampleWord): void {
    const dur = this.isSlowMotion() ? 1.1 : 0.55;
    if (this.focusOnPhoneme() || !word) {
      this.synthesizePhonemeSound(phoneme, dur);
      return;
    }

    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(word.word);
        utter.lang = 'de-DE';
        utter.rate = this.isSlowMotion() ? 0.55 : 0.9;
        utter.pitch = 1.0;
        window.speechSynthesis.speak(utter);
      } catch {
        this.synthesizePhonemeSound(phoneme, dur);
      }
    } else {
      this.synthesizePhonemeSound(phoneme, dur);
    }
  }

  private synthesizePhonemeSound(phoneme: GermanPhoneme, durationSec: number): void {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }
      const ctx = this.audioCtx;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const profile = phoneme.acousticProfile;
      const isPlosive = phoneme.manner === 'plosive';
      const isAffricate = phoneme.manner === 'affricate';
      const isNasal = phoneme.manner === 'nasal';

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      if (isPlosive) {
        // Pha đóng tắc im lặng ngắn -> xung bật hơi sắc nét
        const burstAt = now + 0.08;
        masterGain.gain.setValueAtTime(0.001, burstAt);
        masterGain.gain.linearRampToValueAtTime(0.38, burstAt + 0.015);
        masterGain.gain.exponentialRampToValueAtTime(0.001, burstAt + (phoneme.hasAspiration ? 0.22 : 0.14));
      } else if (isAffricate) {
        // Pha đóng tắc ngắn -> đuôi xát kéo dài
        const releaseAt = now + 0.07;
        masterGain.gain.setValueAtTime(0.001, releaseAt);
        masterGain.gain.linearRampToValueAtTime(0.34, releaseAt + 0.02);
        masterGain.gain.setValueAtTime(0.32, now + Math.max(0.12, durationSec - 0.08));
        masterGain.gain.exponentialRampToValueAtTime(0.001, now + durationSec);
      } else {
        masterGain.gain.linearRampToValueAtTime(isNasal ? 0.24 : 0.28, now + 0.05);
        masterGain.gain.setValueAtTime(isNasal ? 0.24 : 0.28, now + Math.max(0.08, durationSec - 0.08));
        masterGain.gain.exponentialRampToValueAtTime(0.001, now + durationSec);
      }
      masterGain.connect(ctx.destination);

      if (phoneme.isVoiced && profile.f0 > 0) {
        const osc = ctx.createOscillator();
        osc.type = isNasal ? 'triangle' : 'sawtooth';
        osc.frequency.setValueAtTime(profile.f0, now);

        if (profile.trillRate) {
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.value = profile.trillRate;
          lfoGain.gain.value = 12;
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start(now);
          lfo.stop(now + durationSec);
        }

        profile.formants.forEach((freq, idx) => {
          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(freq, now);
          if (phoneme.id === 'oy_diphthong' && idx === 1) {
            filter.frequency.linearRampToValueAtTime(1700, now + durationSec * 0.85);
          } else if (phoneme.id === 'ai_diphthong' && idx === 1) {
            filter.frequency.linearRampToValueAtTime(1950, now + durationSec * 0.85);
          } else if (phoneme.id === 'au_diphthong' && idx === 1) {
            filter.frequency.linearRampToValueAtTime(920, now + durationSec * 0.85);
          }
          filter.Q.value = isNasal && idx === 0 ? 10 : idx === 0 ? 6 : 9;

          const formantGain = ctx.createGain();
          formantGain.gain.value =
            isNasal
              ? idx === 0
                ? 0.85
                : idx === 1
                  ? 0.18
                  : 0.08
              : idx === 0
                ? 0.6
                : idx === 1
                  ? 0.45
                  : 0.25;

          osc.connect(filter);
          filter.connect(formantGain);
          formantGain.connect(masterGain);
        });

        osc.start(now);
        osc.stop(now + durationSec);
      }

      if (profile.noiseGain > 0) {
        const noiseStart = isPlosive ? now + 0.08 : isAffricate ? now + 0.07 : now;
        const noiseDur = Math.max(0.08, durationSec - (noiseStart - now));
        const bufferSize = Math.floor(ctx.sampleRate * noiseDur);
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const bandpass = ctx.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.setValueAtTime(profile.noiseFilterFreq, noiseStart);
        bandpass.Q.value = phoneme.id === 'ch_ich' ? 3.5 : isPlosive ? 1.5 : 2.2;

        const noiseGainNode = ctx.createGain();
        noiseGainNode.gain.setValueAtTime(profile.noiseGain, noiseStart);

        whiteNoise.connect(bandpass);
        bandpass.connect(noiseGainNode);
        noiseGainNode.connect(masterGain);

        whiteNoise.start(noiseStart);
        whiteNoise.stop(noiseStart + noiseDur);
      }
    } catch {
      // Bỏ qua nếu trình duyệt chặn tự động phát trước tương tác
    }
  }

  private easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  private lerpSvgPath(pathA: string, pathB: string, t: number): string {
    if (t <= 0) return pathA;
    if (t >= 1) return pathB;

    const numRegex = /-?\d+(?:\.\d+)?/g;
    const numsB = pathB.match(numRegex)?.map(Number) ?? [];
    let index = 0;

    return pathA.replace(numRegex, (match) => {
      const a = parseFloat(match);
      const b = index < numsB.length ? numsB[index] : a;
      index++;
      const val = a + (b - a) * t;
      return Number.isInteger(val) ? val.toString() : val.toFixed(1);
    });
  }

  private lerpNumber(a: number, b: number, t: number): number {
    return +(a + (b - a) * t).toFixed(2);
  }

  private lerpOrganStates(a: SvgOrganPaths, b: SvgOrganPaths, t: number): SvgOrganPaths {
    return {
      upperLip: this.lerpSvgPath(a.upperLip, b.upperLip, t),
      lowerLip: this.lerpSvgPath(a.lowerLip, b.lowerLip, t),
      lips: this.lerpSvgPath(a.lips, b.lips, t),
      tongueMain: this.lerpSvgPath(a.tongueMain, b.tongueMain, t),
      tongueTip: this.lerpSvgPath(a.tongueTip, b.tongueTip, t),
      tongueBlade: this.lerpSvgPath(a.tongueBlade, b.tongueBlade, t),
      tongueBody: this.lerpSvgPath(a.tongueBody, b.tongueBody, t),
      tongueRoot: this.lerpSvgPath(a.tongueRoot, b.tongueRoot, t),
      softPalate: this.lerpSvgPath(a.softPalate, b.softPalate, t),
      airflowPath: this.lerpSvgPath(a.airflowPath, b.airflowPath, t),
      nasalAirflowPath: this.lerpSvgPath(a.nasalAirflowPath, b.nasalAirflowPath, t),
      nasalAirflowOpacity: this.lerpNumber(a.nasalAirflowOpacity, b.nasalAirflowOpacity, t),
      oralAirflowOpacity: this.lerpNumber(a.oralAirflowOpacity, b.oralAirflowOpacity, t),
      isLateralAirflow: t >= 0.3 ? Boolean(a.isLateralAirflow || b.isLateralAirflow) : Boolean(a.isLateralAirflow),
      isLabiodental: t >= 0.35 ? Boolean(b.isLabiodental ?? a.isLabiodental) : Boolean(a.isLabiodental),
      turbulenceCenter: [
        this.lerpNumber(a.turbulenceCenter[0], b.turbulenceCenter[0], t),
        this.lerpNumber(a.turbulenceCenter[1], b.turbulenceCenter[1], t),
        this.lerpNumber(a.turbulenceCenter[2], b.turbulenceCenter[2], t)
      ],
      paperDeflectionAngle: this.lerpNumber(a.paperDeflectionAngle, b.paperDeflectionAngle, t),
      frontLipAperture: {
        rx: this.lerpNumber(a.frontLipAperture.rx, b.frontLipAperture.rx, t),
        ry: this.lerpNumber(a.frontLipAperture.ry, b.frontLipAperture.ry, t),
        lipThickness: this.lerpNumber(
          a.frontLipAperture.lipThickness,
          b.frontLipAperture.lipThickness,
          t
        ),
        pucker: this.lerpNumber(a.frontLipAperture.pucker, b.frontLipAperture.pucker, t),
        teethVisible: this.lerpNumber(
          a.frontLipAperture.teethVisible,
          b.frontLipAperture.teethVisible,
          t
        ),
        tongueTipY: this.lerpNumber(
          a.frontLipAperture.tongueTipY,
          b.frontLipAperture.tongueTipY,
          t
        )
      },
      topDownContactPath: this.lerpSvgPath(a.topDownContactPath, b.topDownContactPath, t),
      topDownTongueOutline: this.lerpSvgPath(a.topDownTongueOutline, b.topDownTongueOutline, t),
      glottalAperture: this.lerpNumber(a.glottalAperture, b.glottalAperture, t)
    };
  }
}
