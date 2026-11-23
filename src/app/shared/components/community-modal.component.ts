import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonemeDataService } from '../../core/services/phoneme-data.service';

@Component({
  selector: 'app-community-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (phonemeService.isCommunityModalOpen()) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm select-none"
        (click)="onBackdropClick($event)"
      >
        <div
          class="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl dark:bg-slate-900 bg-white border dark:border-slate-700/80 border-slate-200 shadow-2xl p-5 sm:p-6 space-y-5"
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="phonemeService.ui().community.modalTitle"
        >
          <!-- Header -->
          <div class="flex items-start justify-between gap-4 border-b dark:border-slate-800 border-slate-200 pb-4">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 via-pink-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shrink-0"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-base font-bold dark:text-white text-slate-900">
                  {{ phonemeService.ui().community.modalTitle }}
                </h2>
                <p class="text-xs dark:text-slate-400 text-slate-600 mt-0.5">
                  {{ phonemeService.ui().community.modalSubtitle }}
                </p>
              </div>
            </div>

            <button
              type="button"
              (click)="close()"
              class="p-1.5 rounded-lg dark:text-slate-400 text-slate-500 hover:bg-slate-800 hover:text-white transition-colors"
              [title]="phonemeService.ui().community.closeBtn"
            >
              ✕
            </button>
          </div>

          <!-- 1. Open Source & Free MIT License Card -->
          <div
            class="p-4 rounded-xl dark:bg-emerald-950/20 bg-emerald-50 border border-emerald-500/30 space-y-1.5"
          >
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30">
                MIT LICENSE
              </span>
              <h3 class="text-xs font-bold dark:text-emerald-300 text-emerald-900">
                {{ phonemeService.ui().community.openSourceTitle }}
              </h3>
            </div>
            <p class="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
              {{ phonemeService.ui().community.openSourceDesc }}
            </p>
          </div>

          <!-- 2. Audio Attribution (Wikimedia Commons CC BY-SA & Web Audio API) -->
          <div
            class="p-4 rounded-xl dark:bg-sky-950/20 bg-sky-50 border border-sky-500/30 space-y-1.5"
          >
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-400 font-mono text-[10px] font-bold border border-sky-500/30">
                CC BY-SA / GFDL
              </span>
              <h3 class="text-xs font-bold dark:text-sky-300 text-sky-900">
                {{ phonemeService.ui().community.attributionTitle }}
              </h3>
            </div>
            <p class="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
              {{ phonemeService.ui().community.attributionDesc }}
            </p>
          </div>

          <!-- 3. How to Contribute Cards -->
          <div class="space-y-2.5">
            <h3 class="text-xs font-bold uppercase tracking-wider dark:text-slate-300 text-slate-700">
              {{ phonemeService.ui().community.contributeTitle }}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              @for (step of phonemeService.ui().community.contributeSteps; track step.title; let idx = $index) {
                <div
                  class="p-3 rounded-xl dark:bg-slate-950/70 bg-slate-50 border dark:border-slate-800 border-slate-200 space-y-1"
                >
                  <div class="text-xs font-bold text-rose-400">
                    {{ idx + 1 }}. {{ step.title }}
                  </div>
                  <p class="text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed">
                    {{ step.desc }}
                  </p>
                </div>
              }
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t dark:border-slate-800 border-slate-200">
            <div class="flex flex-wrap items-center gap-2">
              <button
                type="button"
                (click)="onCopyLink()"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all"
                [ngClass]="
                  copied()
                    ? 'bg-emerald-600 text-white'
                    : 'bg-rose-600 hover:bg-rose-500 text-white'
                "
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span>
                  {{
                    copied()
                      ? phonemeService.ui().community.shareCopied
                      : phonemeService.ui().community.copyCurrentLinkBtn
                  }}
                </span>
              </button>

              <a
                href="https://commons.wikimedia.org/wiki/Category:German_pronunciation"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium dark:bg-slate-800 bg-slate-100 dark:text-slate-200 text-slate-700 hover:border-slate-600 border dark:border-slate-700 border-slate-200 transition-colors"
              >
                <span>Wikimedia Commons ↗</span>
              </a>
            </div>

            <button
              type="button"
              (click)="close()"
              class="px-4 py-1.5 rounded-xl text-xs font-semibold dark:bg-slate-800 bg-slate-200 dark:text-slate-200 text-slate-800 hover:bg-slate-700 hover:text-white transition-colors"
            >
              {{ phonemeService.ui().community.closeBtn }}
            </button>
          </div>
        </div>
      </div>
    }
  `
})
export class CommunityModalComponent {
  readonly phonemeService = inject(PhonemeDataService);
  readonly copied = signal<boolean>(false);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.phonemeService.isCommunityModalOpen()) {
      this.close();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  close(): void {
    this.phonemeService.toggleCommunityModal(false);
  }

  async onCopyLink(): Promise<void> {
    const ok = await this.phonemeService.copyShareableUrl();
    if (ok) {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2200);
    }
  }
}
