import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ExplanationLanguage,
  PhonemeDataService
} from '../../core/services/phoneme-data.service';
import { AudioSyncService } from '../../core/services/audio-sync.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="sticky top-0 h-14 border-b border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md px-2.5 sm:px-4 lg:px-6 flex items-center justify-between gap-2 select-none z-20 shrink-0"
    >
      <!-- Left: Logo & Tagline -->
      <div class="flex items-center gap-2 sm:gap-3 min-w-0">
        <div
          class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-rose-500 via-pink-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-rose-500/20 border border-white/10 shrink-0"
        >
          <svg
            class="w-4 h-4 sm:w-5 sm:h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        </div>

        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span
              class="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white"
            >
              LAUTFORM
            </span>
            <span
              class="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500/10 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/25 dark:border-rose-500/30"
            >
              IPA Deutsch Studio
            </span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block truncate">
            {{ phonemeService.ui().header.subtitle }}
          </p>
        </div>
      </div>

      <!-- Center: Active Phoneme Quick Status Pill -->
      <div
        class="hidden xl:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs"
      >
        <span class="text-slate-500 dark:text-slate-400">
          {{ phonemeService.ui().header.simulating }}
        </span>
        <span class="font-mono font-bold text-sm text-rose-600 dark:text-rose-400">
          {{ phonemeService.selectedPhoneme().symbol }}
        </span>
        <span class="text-slate-700 dark:text-slate-300 font-medium">
          {{ phonemeService.selectedPhoneme().subCategory }}
        </span>
        <span class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"></span>
        <span
          class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium"
          [ngClass]="
            phonemeService.selectedPhoneme().isVoiced
              ? 'bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
              : 'bg-sky-500/10 dark:bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-sky-500/30'
          "
        >
          <span
            class="w-1.5 h-1.5 rounded-full"
            [ngClass]="
              phonemeService.selectedPhoneme().isVoiced
                ? 'bg-emerald-500 dark:bg-emerald-400 animate-pulse'
                : 'bg-sky-500 dark:bg-sky-400'
            "
          ></span>
          {{
            phonemeService.selectedPhoneme().isVoiced
              ? phonemeService.ui().header.voiced
              : phonemeService.ui().header.voiceless
          }}
        </span>
      </div>

      <!-- Right: Share, Community, Language Toggle (VI / DE / EN) & Dark/Light Mode Toggle -->
      <div class="flex items-center gap-1 sm:gap-2 shrink-0">
        <!-- Share Deep Link Button -->
        <button
          type="button"
          (click)="onShareClick()"
          class="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs font-medium border transition-all"
          [ngClass]="
            shareCopied()
              ? 'bg-emerald-500/15 dark:bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/50'
              : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-rose-500/50'
          "
          [title]="phonemeService.ui().community.shareBtn"
          [attr.aria-label]="phonemeService.ui().community.shareBtn"
        >
          <svg class="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span class="hidden lg:inline">
            {{
              shareCopied()
                ? phonemeService.ui().community.shareCopied
                : phonemeService.ui().community.shareBtn
            }}
          </span>
        </button>

        <!-- Open Community & Credits Button -->
        <button
          type="button"
          (click)="phonemeService.toggleCommunityModal(true)"
          class="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs font-medium border bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-500/50 transition-colors"
          [title]="phonemeService.ui().community.modalTitle"
          [attr.aria-label]="phonemeService.ui().community.communityBtn"
        >
          <svg class="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span class="hidden md:inline">{{ phonemeService.ui().community.communityBtn }}</span>
        </button>

        <div
          class="inline-flex items-center p-0.5 sm:p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          role="group"
          [attr.aria-label]="phonemeService.ui().header.languageLabel"
        >
          <button
            type="button"
            (click)="setLang('vi')"
            class="px-1.5 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1"
            [ngClass]="
              phonemeService.explanationLanguage() === 'vi'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            "
            title="Tiếng Việt"
          >
            <span>🇻🇳</span>
            <span class="hidden min-[360px]:inline sm:hidden">VI</span>
            <span class="hidden sm:inline">Tiếng Việt</span>
          </button>

          <button
            type="button"
            (click)="setLang('de')"
            class="px-1.5 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1"
            [ngClass]="
              phonemeService.explanationLanguage() === 'de'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            "
            title="Deutsch"
          >
            <span>🇩🇪</span>
            <span class="hidden min-[360px]:inline sm:hidden">DE</span>
            <span class="hidden sm:inline">Deutsch</span>
          </button>

          <button
            type="button"
            (click)="setLang('en')"
            class="px-1.5 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1"
            [ngClass]="
              phonemeService.explanationLanguage() === 'en'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            "
            title="English"
          >
            <span>🇬🇧</span>
            <span class="hidden min-[360px]:inline sm:hidden">EN</span>
            <span class="hidden sm:inline">English</span>
          </button>
        </div>

        <button
          type="button"
          (click)="phonemeService.toggleTheme()"
          class="p-1.5 sm:p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-rose-500/50 transition-colors"
          [title]="
            phonemeService.isDarkMode()
              ? phonemeService.ui().header.themeDarkTitle
              : phonemeService.ui().header.themeLightTitle
          "
          [attr.aria-label]="
            phonemeService.isDarkMode()
              ? phonemeService.ui().header.themeDarkTitle
              : phonemeService.ui().header.themeLightTitle
          "
        >
          @if (phonemeService.isDarkMode()) {
            <svg class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          } @else {
            <svg class="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          }
        </button>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly phonemeService = inject(PhonemeDataService);
  readonly audioService = inject(AudioSyncService);
  readonly shareCopied = signal<boolean>(false);

  setLang(lang: ExplanationLanguage): void {
    this.phonemeService.setLanguage(lang);
  }

  async onShareClick(): Promise<void> {
    const ok = await this.phonemeService.copyShareableUrl();
    if (ok) {
      this.shareCopied.set(true);
      setTimeout(() => this.shareCopied.set(false), 2000);
    }
  }
}
