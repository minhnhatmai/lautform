import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhonemeDataService } from '../../core/services/phoneme-data.service';
import { AudioSyncService } from '../../core/services/audio-sync.service';
import { GermanPhoneme } from '../../core/models/phoneme.model';

@Component({
  selector: 'app-ipa-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <aside
      class="flex flex-col dark:bg-slate-900/75 bg-white select-none"
      [ngClass]="
        naturalHeight()
          ? 'h-auto overflow-visible border-b dark:border-slate-800/80 border-slate-200'
          : 'h-full overflow-hidden border-r dark:border-slate-800/80 border-slate-200'
      "
    >
      <!-- Sidebar Header, Search & Category Filter Tabs -->
      <div class="p-3.5 border-b dark:border-slate-800/80 border-slate-200 space-y-2.5 shrink-0">
        <div class="flex items-center justify-between gap-2">
          <div class="min-w-0">
            <h2 class="text-xs font-bold uppercase tracking-wider dark:text-slate-200 text-slate-800 truncate">
              {{ phonemeService.ui().sidebar.title }}
            </h2>
            <p class="text-[11px] dark:text-slate-400 text-slate-500 mt-0.5 truncate">
              {{ phonemeService.ui().sidebar.subtitle }}
            </p>
          </div>
          <span
            class="text-[11px] font-mono px-2 py-0.5 rounded-md dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-600 shrink-0"
          >
            {{ phonemeService.filteredPhonemes().length }} {{ phonemeService.ui().sidebar.soundCountUnit }}
          </span>
        </div>

        <!-- Search input -->
        <div class="relative">
          <svg
            class="w-3.5 h-3.5 dark:text-slate-400 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            id="ipa-search-input"
            name="ipaSearch"
            type="text"
            [ngModel]="phonemeService.searchQuery()"
            (ngModelChange)="phonemeService.searchQuery.set($event)"
            [placeholder]="phonemeService.ui().sidebar.searchPlaceholder"
            [attr.aria-label]="phonemeService.ui().sidebar.searchPlaceholder"
            class="w-full pl-8 pr-7 py-2 sm:py-1.5 text-xs rounded-lg dark:bg-slate-950/90 bg-slate-50 border dark:border-slate-800 border-slate-200 dark:text-slate-200 text-slate-800 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-rose-500/60 transition-colors"
          />
          @if (phonemeService.searchQuery()) {
            <button
              type="button"
              (click)="phonemeService.searchQuery.set('')"
              class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-xs"
            >
              ✕
            </button>
          }
        </div>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center gap-1 p-1 rounded-xl dark:bg-slate-950/90 bg-slate-100 border dark:border-slate-800 border-slate-200">
          <button
            type="button"
            (click)="phonemeService.setCategoryFilter('all')"
            class="flex-1 basis-auto whitespace-nowrap px-2 py-1.5 sm:py-1 rounded-lg text-[10.5px] font-semibold transition-all"
            [ngClass]="
              phonemeService.activeCategoryFilter() === 'all'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
            "
          >
            {{ phonemeService.ui().sidebar.filterAll }} ({{ phonemeService.totalCounts().all }})
          </button>

          <button
            type="button"
            (click)="phonemeService.setCategoryFilter('vowel')"
            class="flex-1 basis-auto whitespace-nowrap px-2 py-1.5 sm:py-1 rounded-lg text-[10.5px] font-semibold transition-all"
            [ngClass]="
              phonemeService.activeCategoryFilter() === 'vowel'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
            "
          >
            {{ phonemeService.ui().sidebar.filterVowels }} ({{ phonemeService.totalCounts().vowel }})
          </button>

          <button
            type="button"
            (click)="phonemeService.setCategoryFilter('diphthong')"
            class="flex-1 basis-auto whitespace-nowrap px-2 py-1.5 sm:py-1 rounded-lg text-[10.5px] font-semibold transition-all"
            [ngClass]="
              phonemeService.activeCategoryFilter() === 'diphthong'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
            "
          >
            {{ phonemeService.ui().sidebar.filterDiphthongs }} ({{ phonemeService.totalCounts().diphthong }})
          </button>

          <button
            type="button"
            (click)="phonemeService.setCategoryFilter('consonant')"
            class="flex-1 basis-auto whitespace-nowrap px-2 py-1.5 sm:py-1 rounded-lg text-[10.5px] font-semibold transition-all"
            [ngClass]="
              phonemeService.activeCategoryFilter() === 'consonant'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
            "
          >
            {{ phonemeService.ui().sidebar.filterConsonants }} ({{ phonemeService.totalCounts().consonant }})
          </button>
        </div>

        <!-- Legend for Voiced / Voiceless & Aspiration -->
        <div class="flex items-center justify-between text-[10.5px] dark:text-slate-400 text-slate-500">
          <span class="inline-flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
            {{ phonemeService.ui().sidebar.legendVoiced }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400"></span>
            {{ phonemeService.ui().sidebar.legendVoiceless }}
          </span>
          <span class="inline-flex items-center gap-1">
            <span class="text-amber-500 dark:text-amber-400 font-bold">✦</span>
            {{ phonemeService.ui().sidebar.legendAspirated }}
          </span>
        </div>
      </div>

      <!-- Scrollable Sub-grouped Phoneme Grids -->
      <div
        class="p-3.5 space-y-5"
        [ngClass]="naturalHeight() ? '' : 'flex-1 overflow-y-auto'"
      >
        @if (phonemeService.filteredPhonemes().length === 0) {
          <div class="py-10 text-center text-xs dark:text-slate-400 text-slate-500">
            {{ phonemeService.ui().sidebar.emptyState }}
          </div>
        }

        <!-- Group 1: Vowels (Grouped into 4 Phonetic Sub-sections) -->
        @if (phonemeService.vowelSubGroups().length > 0) {
          <section class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                <span class="w-1.5 h-3.5 rounded-full bg-rose-500"></span>
                {{ phonemeService.ui().sidebar.vowelsTitle }}
              </h3>
              <span class="text-[10px] dark:text-slate-500 text-slate-400">
                {{ phonemeService.vowels().length }} {{ phonemeService.ui().sidebar.soundCountUnit }}
              </span>
            </div>

            @for (group of phonemeService.vowelSubGroups(); track group.key) {
              <div class="space-y-1.5">
                <div class="text-[10.5px] font-semibold dark:text-slate-400 text-slate-500 px-0.5">
                  {{ group.label }}
                </div>

                <div class="grid grid-cols-3 gap-1.5">
                  @for (phoneme of group.items; track phoneme.id) {
                    <button
                      type="button"
                      (click)="onSelectPhoneme(phoneme)"
                      class="group relative flex flex-col justify-between p-2.5 sm:p-2 rounded-xl border text-left transition-all duration-150"
                      [ngClass]="
                        isSelected(phoneme)
                          ? 'bg-gradient-to-br from-rose-50 via-pink-50 to-white dark:from-rose-500/25 dark:via-pink-500/10 dark:to-slate-900 border-rose-500 dark:border-rose-500/80 shadow-md shadow-rose-500/10 ring-1 ring-rose-500/30 dark:ring-rose-500/40'
                          : 'dark:bg-slate-950/60 bg-slate-50/80 dark:border-slate-800/80 border-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
                      "
                      [title]="phoneme.subCategory"
                    >
                      <div class="flex items-start justify-between w-full">
                        <span
                          class="font-mono text-base font-bold tracking-tight"
                          [ngClass]="isSelected(phoneme) ? 'text-rose-600 dark:text-rose-400' : 'dark:text-slate-100 text-slate-800'"
                        >
                          {{ phoneme.symbol }}
                        </span>
                        <span
                          class="w-1.5 h-1.5 rounded-full mt-1"
                          [ngClass]="phoneme.isVoiced ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-sky-500 dark:bg-sky-400'"
                        ></span>
                      </div>

                      <div class="mt-1.5">
                        <div class="text-[10px] font-mono text-rose-600/90 dark:text-rose-300/90 truncate">
                          {{ phoneme.graphemes }}
                        </div>
                        <div class="text-[9.5px] dark:text-slate-400 text-slate-500 truncate">
                          {{ phoneme.exampleWords[0].word }}
                        </div>
                      </div>
                    </button>
                  }
                </div>
              </div>
            }
          </section>
        }

        <!-- Group 2: Diphthongs -->
        @if (phonemeService.diphthongs().length > 0) {
          <section class="space-y-2">
            <div class="flex items-center justify-between">
              <h3 class="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                <span class="w-1.5 h-3.5 rounded-full bg-purple-500"></span>
                {{ phonemeService.ui().sidebar.diphthongsTitle }}
              </h3>
              <span class="text-[10px] dark:text-slate-500 text-slate-400">
                {{ phonemeService.diphthongs().length }} {{ phonemeService.ui().sidebar.soundCountUnit }}
              </span>
            </div>

            <div class="grid grid-cols-3 gap-1.5">
              @for (phoneme of phonemeService.diphthongs(); track phoneme.id) {
                <button
                  type="button"
                  (click)="onSelectPhoneme(phoneme)"
                  class="group relative flex flex-col justify-between p-2.5 sm:p-2 rounded-xl border text-left transition-all duration-150"
                  [ngClass]="
                    isSelected(phoneme)
                      ? 'bg-gradient-to-br from-purple-50 via-indigo-50 to-white dark:from-purple-500/25 dark:via-indigo-500/10 dark:to-slate-900 border-purple-500 dark:border-purple-500/80 shadow-md shadow-purple-500/10 ring-1 ring-purple-500/30 dark:ring-purple-500/40'
                      : 'dark:bg-slate-950/60 bg-slate-50/80 dark:border-slate-800/80 border-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
                  "
                  [title]="phoneme.subCategory"
                >
                  <div class="flex items-start justify-between w-full">
                    <span
                      class="font-mono text-base font-bold tracking-tight"
                      [ngClass]="isSelected(phoneme) ? 'text-purple-700 dark:text-purple-300' : 'dark:text-slate-100 text-slate-800'"
                    >
                      {{ phoneme.symbol }}
                    </span>
                    <span
                      class="w-1.5 h-1.5 rounded-full mt-1"
                      [ngClass]="phoneme.isVoiced ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-sky-500 dark:bg-sky-400'"
                    ></span>
                  </div>

                  <div class="mt-1.5">
                    <div class="text-[10px] font-mono text-purple-600/90 dark:text-purple-300/90 truncate">
                      {{ phoneme.graphemes }}
                    </div>
                    <div class="text-[9.5px] dark:text-slate-400 text-slate-500 truncate">
                      {{ phoneme.exampleWords[0].word }}
                    </div>
                  </div>
                </button>
              }
            </div>
          </section>
        }

        <!-- Group 3: Consonants (Grouped into 5 Manner Sub-sections) -->
        @if (phonemeService.consonantSubGroups().length > 0) {
          <section class="space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                <span class="w-1.5 h-3.5 rounded-full bg-sky-500"></span>
                {{ phonemeService.ui().sidebar.consonantsTitle }}
              </h3>
              <span class="text-[10px] dark:text-slate-500 text-slate-400">
                {{ phonemeService.consonants().length }} {{ phonemeService.ui().sidebar.soundCountUnit }}
              </span>
            </div>

            @for (group of phonemeService.consonantSubGroups(); track group.key) {
              <div class="space-y-1.5">
                <div class="text-[10.5px] font-semibold dark:text-slate-400 text-slate-500 px-0.5">
                  {{ group.label }}
                </div>

                <div class="grid grid-cols-3 gap-1.5">
                  @for (phoneme of group.items; track phoneme.id) {
                    <button
                      type="button"
                      (click)="onSelectPhoneme(phoneme)"
                      class="group relative flex flex-col justify-between p-2.5 sm:p-2 rounded-xl border text-left transition-all duration-150"
                      [ngClass]="
                        isSelected(phoneme)
                          ? 'bg-gradient-to-br from-sky-50 via-cyan-50 to-white dark:from-sky-500/25 dark:via-cyan-500/10 dark:to-slate-900 border-sky-500 dark:border-sky-500/80 shadow-md shadow-sky-500/10 ring-1 ring-sky-500/30 dark:ring-sky-500/40'
                          : 'dark:bg-slate-950/60 bg-slate-50/80 dark:border-slate-800/80 border-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
                      "
                      [title]="phoneme.subCategory"
                    >
                      <div class="flex items-start justify-between w-full">
                        <span
                          class="font-mono text-base font-bold tracking-tight"
                          [ngClass]="isSelected(phoneme) ? 'text-sky-700 dark:text-sky-300' : 'dark:text-slate-100 text-slate-800'"
                        >
                          {{ phoneme.symbol }}
                        </span>

                        <div class="flex items-center gap-1 mt-1">
                          @if (phoneme.hasAspiration) {
                            <span
                              class="text-[9px] text-amber-500 dark:text-amber-400 leading-none"
                              [title]="phonemeService.ui().sidebar.legendAspirated"
                            >
                              ✦
                            </span>
                          }
                          <span
                            class="w-1.5 h-1.5 rounded-full"
                            [ngClass]="phoneme.isVoiced ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-sky-500 dark:bg-sky-400'"
                          ></span>
                        </div>
                      </div>

                      <div class="mt-1.5">
                        <div class="text-[10px] font-mono text-sky-600/90 dark:text-sky-300/90 truncate">
                          {{ phoneme.graphemes }}
                        </div>
                        <div class="text-[9.5px] dark:text-slate-400 text-slate-500 truncate">
                          {{ phoneme.exampleWords[0].word }}
                        </div>
                      </div>
                    </button>
                  }
                </div>
              </div>
            }
          </section>
        }
      </div>

      <!-- Footer Quick Comparison Toggle -->
      <div
        class="p-3 border-t dark:border-slate-800/80 border-slate-200 dark:bg-slate-950/60 bg-slate-50 text-[11px] dark:text-slate-400 text-slate-600 flex items-center justify-between shrink-0"
      >
        <span>{{ phonemeService.ui().sidebar.currentComparison }}</span>
        <button
          type="button"
          (click)="phonemeService.toggleComparison()"
          class="font-mono font-semibold px-2 py-0.5 rounded border transition-colors"
          [ngClass]="
            phonemeService.showComparison()
              ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-400 dark:border-amber-500/50'
              : 'dark:bg-slate-900 bg-white dark:border-slate-700 border-slate-300 dark:text-slate-300 text-slate-700'
          "
        >
          {{ phonemeService.selectedPhoneme().symbol }} vs {{ phonemeService.activeComparisonSymbol() }}
        </button>
      </div>
    </aside>
  `
})
export class IpaSidebarComponent {
  readonly phonemeService = inject(PhonemeDataService);
  readonly audioService = inject(AudioSyncService);
  readonly naturalHeight = input<boolean>(false);

  isSelected(phoneme: GermanPhoneme): boolean {
    return this.phonemeService.selectedPhoneme().id === phoneme.id;
  }

  onSelectPhoneme(phoneme: GermanPhoneme): void {
    this.phonemeService.selectPhoneme(phoneme);
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      this.phonemeService.setMobileTab('visualizer');
    }
  }
}
