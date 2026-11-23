import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioSyncService } from '../../core/services/audio-sync.service';
import { PhonemeDataService } from '../../core/services/phoneme-data.service';

@Component({
  selector: 'app-timeline-controls',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="p-3.5 rounded-2xl dark:bg-slate-900/95 bg-white border dark:border-slate-800 border-slate-200 shadow-lg space-y-3 select-none"
    >
      <!-- Top Row: Phase Indicator + Timeline Scrubber Track -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between text-[11px]">
          <div class="flex items-center gap-1.5">
            <span class="dark:text-slate-400 text-slate-500">
              {{ phonemeService.ui().timeline.phaseLabel }}
            </span>
            <button
              type="button"
              (click)="audioService.jumpToPhase('rest')"
              class="px-2 py-0.5 rounded-md font-medium transition-colors"
              [ngClass]="
                audioService.currentPhase() === 'rest'
                  ? 'bg-slate-700 text-white'
                  : 'dark:text-slate-400 text-slate-500 hover:text-slate-200'
              "
            >
              {{ phonemeService.ui().timeline.phaseRest }}
            </button>
            <span class="text-slate-600">→</span>
            <button
              type="button"
              (click)="audioService.jumpToPhase('target')"
              class="px-2 py-0.5 rounded-md font-semibold transition-colors"
              [ngClass]="
                audioService.currentPhase() === 'target'
                  ? 'bg-rose-500/25 text-rose-300 border border-rose-500/40'
                  : 'dark:text-slate-400 text-slate-500 hover:text-rose-300'
              "
            >
              {{ phonemeService.ui().timeline.phaseTarget }} {{ phonemeService.selectedPhoneme().symbol }}
            </button>
            <span class="text-slate-600">→</span>
            <button
              type="button"
              (click)="audioService.jumpToPhase('release')"
              class="px-2 py-0.5 rounded-md font-medium transition-colors"
              [ngClass]="
                audioService.currentPhase() === 'release'
                  ? 'bg-indigo-500/25 text-indigo-300 border border-indigo-500/40'
                  : 'dark:text-slate-400 text-slate-500 hover:text-slate-200'
              "
            >
              {{ phonemeService.ui().timeline.phaseRelease }}
            </button>
          </div>

          <div class="font-mono text-[11px] dark:text-slate-400 text-slate-500 flex items-center gap-2">
            <span>
              {{ phonemeService.ui().timeline.frameLabel }}
              <strong class="dark:text-slate-200 text-slate-700">{{ audioService.currentFrame() }}</strong
              >/{{ audioService.totalFrames }}
            </span>
            <span>•</span>
            <span>{{ audioService.currentTime() }}s / {{ audioService.duration() }}s</span>
          </div>
        </div>

        <!-- Custom Scrubber Bar with Highlighted Phoneme Target Zone -->
        <div class="relative h-7 flex items-center">
          <!-- Background Track -->
          <div
            class="w-full h-2.5 rounded-full dark:bg-slate-800 bg-slate-200 overflow-hidden relative"
          >
            <!-- Target Phoneme Window Highlight [30% - 70%] -->
            <div
              class="absolute top-0 bottom-0 bg-rose-500/30 border-x border-rose-400/60"
              [style.left.%]="audioService.phonemeWindow()[0] * 100"
              [style.width.%]="
                (audioService.phonemeWindow()[1] - audioService.phonemeWindow()[0]) * 100
              "
            ></div>

            <!-- Active Progress Fill -->
            <div
              class="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 transition-none"
              [style.width.%]="audioService.progress() * 100"
            ></div>
          </div>

          <!-- Range Input Overlay for smooth scrubbing -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.005"
            [value]="audioService.progress()"
            (input)="onScrub($event)"
            aria-label="Timeline scrubber"
            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />

          <!-- Visual Thumb Indicator -->
          <div
            class="pointer-events-none absolute w-4 h-4 rounded-full bg-white border-2 border-rose-500 shadow-md -translate-x-1/2 transition-none"
            [style.left.%]="audioService.progress() * 100"
          ></div>
        </div>
      </div>

      <!-- Bottom Row: Playback & Mode Buttons -->
      <div class="flex flex-wrap items-center justify-between gap-2 pt-0.5">
        <!-- Left Group: Play/Pause + Frame Step -->
        <div class="flex items-center gap-1.5">
          <button
            type="button"
            (click)="audioService.togglePlay()"
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-md shadow-rose-600/20 transition-all active:scale-95"
          >
            @if (audioService.isPlaying()) {
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
              <span>{{ phonemeService.ui().timeline.pauseBtn }}</span>
            } @else {
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>
                {{ phonemeService.ui().timeline.playBtn }} ({{ phonemeService.selectedExampleWord().word }})
              </span>
            }
          </button>

          <button
            type="button"
            (click)="audioService.stepFrame(-1)"
            [title]="phonemeService.ui().timeline.stepBackTitle"
            class="p-1.5 rounded-lg border dark:border-slate-800 border-slate-200 dark:bg-slate-950 bg-slate-100 dark:text-slate-300 text-slate-700 hover:border-slate-600 text-xs font-mono"
          >
            -1f
          </button>
          <button
            type="button"
            (click)="audioService.stepFrame(1)"
            [title]="phonemeService.ui().timeline.stepForwardTitle"
            class="p-1.5 rounded-lg border dark:border-slate-800 border-slate-200 dark:bg-slate-950 bg-slate-100 dark:text-slate-300 text-slate-700 hover:border-slate-600 text-xs font-mono"
          >
            +1f
          </button>
        </div>

        <!-- Right Group: Focus on Phoneme, Slow 0.5x, Loop -->
        <div class="flex items-center gap-1.5 flex-wrap">
          <!-- Tập trung vào âm -->
          <button
            type="button"
            (click)="audioService.toggleFocusOnPhoneme()"
            class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all"
            [ngClass]="
              audioService.focusOnPhoneme()
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                : 'dark:bg-slate-950 bg-slate-100 dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 hover:border-slate-700'
            "
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>{{ phonemeService.ui().timeline.focusOnSound }}</span>
          </button>

          <!-- Chậm 0.5x -->
          <button
            type="button"
            (click)="audioService.toggleSlowMotion()"
            class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all"
            [ngClass]="
              audioService.isSlowMotion()
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                : 'dark:bg-slate-950 bg-slate-100 dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 hover:border-slate-700'
            "
          >
            <span>{{ phonemeService.ui().timeline.slowMotion }}</span>
          </button>

          <!-- Lặp lại -->
          <button
            type="button"
            (click)="audioService.toggleLoop()"
            class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all"
            [ngClass]="
              audioService.isLooping()
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                : 'dark:bg-slate-950 bg-slate-100 dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 hover:border-slate-700'
            "
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>{{ phonemeService.ui().timeline.loop }}</span>
          </button>
        </div>
      </div>
    </div>
  `
})
export class TimelineControlsComponent {
  readonly audioService = inject(AudioSyncService);
  readonly phonemeService = inject(PhonemeDataService);

  onScrub(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.audioService.pause();
    this.audioService.seekToProgress(parseFloat(input.value));
  }
}
