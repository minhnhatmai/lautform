import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonemeDataService } from '../../core/services/phoneme-data.service';
import { AudioSyncService } from '../../core/services/audio-sync.service';
import { ExampleWord } from '../../core/models/phoneme.model';

@Component({
  selector: 'app-phoneme-guide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside
      class="h-full flex flex-col dark:bg-slate-900/75 bg-white border-l dark:border-slate-800/80 border-slate-200 overflow-y-auto p-4 space-y-5 select-none"
    >
      <!-- 1. Phoneme Identity Header Card -->
      <div
        class="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950/40 border border-slate-800 shadow-lg space-y-3"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-3">
            <div
              class="w-14 h-14 rounded-2xl bg-rose-500/15 border border-rose-500/40 flex items-center justify-center font-mono text-2xl font-bold text-rose-400 shadow-inner shrink-0"
            >
              {{ phonemeService.selectedPhoneme().symbol }}
            </div>
            <div>
              <span
                class="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-1"
              >
                {{ phonemeService.ui().guide.spellingBadge }}
                {{ phonemeService.selectedPhoneme().graphemes }}
              </span>
              <h2 class="text-sm font-bold text-white leading-snug">
                {{ phonemeService.selectedPhoneme().subCategory }}
              </h2>
              <p class="text-[11px] text-slate-400 italic mt-0.5">
                {{ phonemeService.selectedPhoneme().ipaTechnicalName }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              (click)="onSharePhoneme()"
              class="p-2.5 rounded-xl border transition-all"
              [ngClass]="
                shareCopied()
                  ? 'bg-emerald-600/20 border-emerald-500/60 text-emerald-300'
                  : 'bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-slate-200'
              "
              [title]="
                shareCopied()
                  ? phonemeService.ui().community.shareCopied
                  : phonemeService.ui().community.shareBtn
              "
            >
              @if (shareCopied()) {
                <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              } @else {
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              }
            </button>

            <button
              type="button"
              (click)="audioService.playIsolatedPhoneme()"
              class="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/25 transition-all"
              [title]="phonemeService.ui().guide.listenTitle"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Comparison Insight Box -->
        <div
          class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 text-xs space-y-1.5"
        >
          <div class="flex items-center justify-between">
            <span class="text-amber-400 font-semibold flex items-center gap-1.5">
              <span>
                {{ phonemeService.ui().guide.compareHeader }}
                {{ phonemeService.activeComparisonSymbol() }}
              </span>
            </span>
            <button
              type="button"
              (click)="phonemeService.toggleComparison()"
              class="text-[11px] px-2 py-0.5 rounded font-medium transition-colors"
              [ngClass]="
                phonemeService.showComparison()
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              "
            >
              {{
                phonemeService.showComparison()
                  ? phonemeService.ui().guide.compareActiveBtn
                  : phonemeService.ui().guide.compareInactiveBtn
              }}
            </button>
          </div>
          <p class="text-[11px] text-slate-300 leading-relaxed">
            {{ phonemeService.selectedPhoneme().comparisonNote }}
          </p>
        </div>
      </div>

      <!-- 2. Example Words -->
      <section class="space-y-2.5">
        <div class="flex items-center justify-between">
          <h3 class="text-xs font-bold uppercase tracking-wider dark:text-slate-200 text-slate-800 flex items-center gap-1.5">
            <span class="w-1.5 h-3.5 rounded-full bg-rose-500"></span>
            {{ phonemeService.ui().guide.exampleWordsTitle }}
          </h3>
        </div>

        <div class="grid grid-cols-1 gap-2">
          @for (word of phonemeService.selectedPhoneme().exampleWords; track word.word) {
            <button
              type="button"
              (click)="onPlayWord(word)"
              class="flex items-center justify-between p-3 rounded-xl border text-left transition-all group"
              [ngClass]="
                isWordSelected(word)
                  ? 'dark:bg-rose-500/15 bg-rose-50 border-rose-500/60 shadow-sm'
                  : 'dark:bg-slate-950/60 bg-slate-50 dark:border-slate-800/80 border-slate-200 hover:border-slate-600'
              "
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  [ngClass]="
                    isWordSelected(word)
                      ? 'bg-rose-600 text-white'
                      : 'dark:bg-slate-800 bg-slate-200 dark:text-slate-300 text-slate-700 group-hover:bg-rose-500 group-hover:text-white'
                  "
                >
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-sm dark:text-white text-slate-900">
                      {{ word.word }}
                    </span>
                    <span class="font-mono text-xs text-rose-400 font-semibold">
                      {{ word.ipa }}
                    </span>
                  </div>
                  <div class="text-xs dark:text-slate-400 text-slate-600">
                    {{ phonemeService.ui().guide.meaningPrefix }} {{ word.meaning }}
                  </div>
                </div>
              </div>

              <div class="text-right">
                <span
                  class="font-mono text-[10px] px-2 py-0.5 rounded dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 dark:text-slate-400 text-slate-500"
                >
                  {{ word.timeRange[0] }}s – {{ word.timeRange[1] }}s
                </span>
              </div>
            </button>
          }
        </div>
      </section>

      <!-- 3. Step-by-Step Articulation Guide -->
      <section class="space-y-2.5">
        <h3 class="text-xs font-bold uppercase tracking-wider dark:text-slate-200 text-slate-800 flex items-center gap-1.5">
          <span class="w-1.5 h-3.5 rounded-full bg-emerald-500"></span>
          {{ phonemeService.ui().guide.stepsTitle }}
        </h3>

        <div class="space-y-2">
          @for (
            step of phonemeService.selectedPhoneme().articulationSteps;
            track $index;
            let idx = $index
          ) {
            <div
              class="p-3 rounded-xl dark:bg-slate-950/70 bg-slate-50 border dark:border-slate-800/80 border-slate-200 flex items-start gap-2.5"
            >
              <span
                class="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5"
              >
                {{ idx + 1 }}
              </span>
              <p class="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                {{ step }}
              </p>
            </div>
          }
        </div>
      </section>

      <!-- 4. Common Mistakes & Correction Tips -->
      <section class="space-y-2.5 pb-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
          <span class="w-1.5 h-3.5 rounded-full bg-amber-400"></span>
          {{ phonemeService.ui().guide.mistakesTitle }}
        </h3>

        <div class="space-y-3">
          @for (
            mistake of phonemeService.selectedPhoneme().vietnameseMistakes;
            track mistake.confusedWith
          ) {
            <div
              class="p-3.5 rounded-2xl dark:bg-amber-950/15 bg-amber-50/70 border border-amber-500/30 space-y-2"
            >
              <div class="flex items-start gap-2">
                <span class="text-amber-400 font-bold text-sm leading-none mt-0.5">⚠</span>
                <div>
                  <div class="text-xs font-bold dark:text-amber-300 text-amber-900">
                    {{ phonemeService.ui().guide.confusedWithPrefix }}
                    {{ mistake.confusedWith }}
                  </div>
                  <p class="text-xs dark:text-slate-300 text-slate-700 mt-1 leading-relaxed">
                    {{ mistake.mistakeDescription }}
                  </p>
                </div>
              </div>

              <!-- Correction Tip Box -->
              <div
                class="p-2.5 rounded-xl dark:bg-emerald-950/30 bg-emerald-50 border border-emerald-500/30 flex items-start gap-2"
              >
                <span class="text-emerald-400 text-xs font-bold shrink-0 mt-0.5">
                  {{ phonemeService.ui().guide.tipPrefix }}
                </span>
                <p class="text-xs dark:text-emerald-200 text-emerald-900 leading-relaxed">
                  {{ mistake.correctionTip }}
                </p>
              </div>
            </div>
          }
        </div>
      </section>
    </aside>
  `
})
export class PhonemeGuideComponent {
  readonly phonemeService = inject(PhonemeDataService);
  readonly audioService = inject(AudioSyncService);
  readonly shareCopied = signal<boolean>(false);

  isWordSelected(word: ExampleWord): boolean {
    return this.phonemeService.selectedExampleWord().word === word.word;
  }

  onPlayWord(word: ExampleWord): void {
    this.audioService.focusOnPhoneme.set(false);
    this.audioService.play(word);
  }

  async onSharePhoneme(): Promise<void> {
    const ok = await this.phonemeService.copyShareableUrl();
    if (ok) {
      this.shareCopied.set(true);
      setTimeout(() => this.shareCopied.set(false), 2000);
    }
  }
}
