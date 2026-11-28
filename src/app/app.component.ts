import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header.component';
import { CommunityModalComponent } from './shared/components/community-modal.component';
import { IpaSidebarComponent } from './features/ipa-sidebar/ipa-sidebar.component';
import { AnatomyViewerComponent } from './features/anatomy-viewer/anatomy-viewer.component';
import { PhonemeGuideComponent } from './features/phoneme-guide/phoneme-guide.component';
import { PhonemeDataService } from './core/services/phoneme-data.service';
import { AudioSyncService } from './core/services/audio-sync.service';

export type ResponsiveLayoutMode = 'mobile' | 'tablet' | 'desktop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CommunityModalComponent,
    IpaSidebarComponent,
    AnatomyViewerComponent,
    PhonemeGuideComponent
  ],
  template: `
    <div
      class="flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden"
      [ngClass]="
        layoutMode() === 'mobile'
          ? 'min-h-[100dvh]'
          : 'h-[100dvh] overflow-hidden'
      "
    >
      <!-- Thanh điều hướng trên cùng: Logo Lautform, Chia sẻ, Cộng đồng, Ngôn ngữ, Sáng/Tối -->
      <app-header />

      <!-- SMARTPHONE (< 768px): Quick Phoneme Strip + Single Active Tab + Bottom Tab Bar -->
      @if (layoutMode() === 'mobile') {
        <!-- Quick Phoneme Strip -->
        <div
          class="sticky top-14 z-10 px-2.5 py-2 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-between gap-1.5 shrink-0"
        >
          <button
            type="button"
            (click)="phonemeService.stepPhoneme(-1)"
            [title]="phonemeService.ui().mobileNav.prevSoundTitle"
            [attr.aria-label]="phonemeService.ui().mobileNav.prevSoundTitle"
            class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 active:scale-95 transition-transform"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            (click)="
              phonemeService.setMobileTab(
                phonemeService.activeMobileTab() === 'ipa' ? 'visualizer' : 'ipa'
              )
            "
            class="flex-1 min-w-0 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/90 bg-slate-50 dark:bg-slate-950/90 flex items-center justify-between gap-2 text-left active:scale-[0.99] transition-all"
          >
            <div class="flex items-center gap-2 min-w-0">
              <span
                class="w-2 h-2 rounded-full shrink-0"
                [ngClass]="
                  phonemeService.selectedPhoneme().isVoiced
                    ? 'bg-emerald-500'
                    : 'bg-sky-500'
                "
              ></span>
              <span class="font-mono text-base font-bold text-rose-600 dark:text-rose-400 shrink-0">
                {{ phonemeService.selectedPhoneme().symbol }}
              </span>
              <span class="text-xs font-semibold text-slate-800 dark:text-slate-100 truncate">
                {{ phonemeService.selectedExampleWord().word }}
              </span>
              <span class="font-mono text-[11px] text-slate-500 dark:text-slate-400 truncate hidden min-[390px]:inline">
                {{ phonemeService.selectedExampleWord().ipa }}
              </span>
            </div>

            <span
              class="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/25 shrink-0"
            >
              {{ phonemeService.ui().mobileNav.changeSoundBtn }}
            </span>
          </button>

          <button
            type="button"
            (click)="audioService.playIsolatedPhoneme()"
            [title]="phonemeService.ui().viewer.listenBtn"
            [attr.aria-label]="phonemeService.ui().viewer.listenBtn"
            class="w-9 h-9 rounded-xl bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-sm shrink-0 active:scale-95 transition-transform"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"
              />
            </svg>
          </button>

          <button
            type="button"
            (click)="phonemeService.stepPhoneme(1)"
            [title]="phonemeService.ui().mobileNav.nextSoundTitle"
            [attr.aria-label]="phonemeService.ui().mobileNav.nextSoundTitle"
            class="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 active:scale-95 transition-transform"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Mobile Main Active View (only 1 panel mounted at a time to keep SVG IDs unique) -->
        <main class="flex-1 min-h-0 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))]">
          @switch (phonemeService.activeMobileTab()) {
            @case ('visualizer') {
              <app-anatomy-viewer [naturalHeight]="true" />
            }
            @case ('ipa') {
              <app-ipa-sidebar [naturalHeight]="true" />
            }
            @case ('guide') {
              <app-phoneme-guide [naturalHeight]="true" />
            }
          }
        </main>

        <!-- Fixed App-Style Bottom Tab Bar -->
        <nav
          class="fixed bottom-0 inset-x-0 z-30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 pb-safe shadow-[0_-6px_24px_-8px_rgba(15,23,42,0.12)]"
          [attr.aria-label]="'Mobile Navigation'"
        >
          <div class="grid grid-cols-3 h-14 max-w-lg mx-auto">
            <button
              type="button"
              (click)="phonemeService.setMobileTab('visualizer')"
              class="flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-colors"
              [ngClass]="
                phonemeService.activeMobileTab() === 'visualizer'
                  ? 'text-rose-600 dark:text-rose-400'
                  : 'text-slate-500 dark:text-slate-400'
              "
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{{ phonemeService.ui().mobileNav.tabVisualizer }}</span>
            </button>

            <button
              type="button"
              (click)="phonemeService.setMobileTab('ipa')"
              class="flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-colors"
              [ngClass]="
                phonemeService.activeMobileTab() === 'ipa'
                  ? 'text-rose-600 dark:text-rose-400'
                  : 'text-slate-500 dark:text-slate-400'
              "
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span>{{ phonemeService.ui().mobileNav.tabIpa }}</span>
            </button>

            <button
              type="button"
              (click)="phonemeService.setMobileTab('guide')"
              class="flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-colors"
              [ngClass]="
                phonemeService.activeMobileTab() === 'guide'
                  ? 'text-rose-600 dark:text-rose-400'
                  : 'text-slate-500 dark:text-slate-400'
              "
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>{{ phonemeService.ui().mobileNav.tabGuide }}</span>
            </button>
          </div>
        </nav>
      }

      <!-- TABLET PORTRAIT (768px–1023px): Left 35% IPA Sidebar + Right 65% Scrollable Visualizer & Guide -->
      @else if (layoutMode() === 'tablet') {
        <main class="flex-1 flex flex-row min-h-0 overflow-hidden">
          <div class="w-[35%] h-full shrink-0 min-h-0">
            <app-ipa-sidebar />
          </div>

          <div class="w-[65%] h-full overflow-y-auto min-h-0 divide-y divide-slate-200 dark:divide-slate-800">
            <app-anatomy-viewer [naturalHeight]="true" />
            <app-phoneme-guide [naturalHeight]="true" />
          </div>
        </main>
      }

      <!-- DESKTOP / TABLET LANDSCAPE (>= 1024px): 3 Columns (25% - 45% - 30%) -->
      @else {
        <main class="flex-1 flex flex-row min-h-0 overflow-hidden">
          <div class="w-[25%] h-full shrink-0 min-h-0">
            <app-ipa-sidebar />
          </div>

          <div class="w-[45%] h-full shrink-0 min-h-0">
            <app-anatomy-viewer />
          </div>

          <div class="w-[30%] h-full shrink-0 min-h-0">
            <app-phoneme-guide />
          </div>
        </main>
      }

      <!-- Hộp thoại Cộng đồng, Ghi công bản quyền âm thanh & Đóng góp mã nguồn mở -->
      <app-community-modal />
    </div>
  `
})
export class AppComponent {
  readonly phonemeService = inject(PhonemeDataService);
  readonly audioService = inject(AudioSyncService);
  readonly layoutMode = signal<ResponsiveLayoutMode>(this.detectLayoutMode());

  @HostListener('window:resize')
  onWindowResize(): void {
    const next = this.detectLayoutMode();
    if (next !== this.layoutMode()) {
      this.layoutMode.set(next);
    }
  }

  private detectLayoutMode(): ResponsiveLayoutMode {
    if (typeof window === 'undefined') {
      return 'desktop';
    }
    const width = window.innerWidth;
    if (width < 768) {
      return 'mobile';
    }
    if (width < 1024) {
      return 'tablet';
    }
    return 'desktop';
  }
}
