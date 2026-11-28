import { Injectable, computed, effect, signal } from '@angular/core';
import {
  AnatomyViewTab,
  ExampleWord,
  GermanPhoneme,
  PhonemeCategory,
  PhonemeSubGroup
} from '../models/phoneme.model';
import { GERMAN_PHONEMES_DATA } from '../data/german-phonemes.data';
import {
  PHONEME_CONTENT_TRANSLATIONS,
  UI_TRANSLATIONS
} from '../data/ui-translations.data';

export type ExplanationLanguage = 'vi' | 'de' | 'en';
export type MobileNavTab = 'visualizer' | 'ipa' | 'guide';

const THEME_STORAGE_KEY = 'lautform_theme';

export interface PhonemeSubGroupSection {
  key: PhonemeSubGroup;
  label: string;
  items: GermanPhoneme[];
}

const VOWEL_SUBGROUP_ORDER: PhonemeSubGroup[] = [
  'vowel_front_rounded',
  'vowel_front_unrounded',
  'vowel_central_open',
  'vowel_back_rounded'
];

const CONSONANT_SUBGROUP_ORDER: PhonemeSubGroup[] = [
  'consonant_plosive',
  'consonant_fricative',
  'consonant_affricate',
  'consonant_nasal',
  'consonant_approximant'
];

@Injectable({
  providedIn: 'root'
})
export class PhonemeDataService {
  /** Toàn bộ danh sách 45 âm vị tiếng Đức gốc */
  private readonly rawPhonemes = signal<GermanPhoneme[]>(GERMAN_PHONEMES_DATA);

  /** Ngôn ngữ hiển thị giao diện & giải thích trên Header ('vi' | 'de' | 'en') */
  readonly explanationLanguage = signal<ExplanationLanguage>('vi');

  /** Từ điển chuỗi giao diện theo ngôn ngữ đang chọn */
  readonly ui = computed(() => UI_TRANSLATIONS[this.explanationLanguage()]);

  /** Danh sách 45 âm vị đã được dịch theo ngôn ngữ hiện tại */
  readonly allPhonemes = computed<GermanPhoneme[]>(() => {
    const lang = this.explanationLanguage();
    const list = this.rawPhonemes();
    if (lang === 'vi') {
      return list;
    }
    const langMap = PHONEME_CONTENT_TRANSLATIONS[lang];
    return list.map((p) => {
      const tr = langMap?.[p.id];
      if (!tr) return p;
      return {
        ...p,
        subCategory: tr.subCategory,
        graphemes: tr.graphemes,
        comparisonNote: tr.comparisonNote,
        exampleWords: p.exampleWords.map((w) => ({
          ...w,
          meaning: tr.wordMeanings[w.word] ?? w.meaning
        })),
        articulationSteps: tr.articulationSteps,
        vietnameseMistakes: tr.mistakes,
        organRoles: tr.organRoles
      };
    });
  });

  /** Bộ lọc nhóm chính ở cột trái: 'all' | 'vowel' | 'diphthong' | 'consonant' */
  readonly activeCategoryFilter = signal<'all' | PhonemeCategory>('all');

  /** Từ khóa tìm kiếm nhanh trong cột IPA bên trái */
  readonly searchQuery = signal<string>('');

  /** ID của âm vị đang được chọn (mặc định là 'ue_long' - /yː/) */
  private readonly selectedPhonemeId = signal<string>(GERMAN_PHONEMES_DATA[0].id);

  /** Từ tiếng Đức của từ ví dụ đang được chọn */
  private readonly selectedWordKey = signal<string>(
    GERMAN_PHONEMES_DATA[0].exampleWords[0].word
  );

  /** Âm vị đối chiếu do người dùng tự chọn (null = dùng cặp tối thiểu mặc định `comparedWith`) */
  readonly customComparisonPhonemeId = signal<string | null>(null);

  /** Âm vị đang được chọn (tự động cập nhật bản dịch theo ngôn ngữ) */
  readonly selectedPhoneme = computed<GermanPhoneme>(() => {
    const id = this.selectedPhonemeId();
    const list = this.allPhonemes();
    return list.find((p) => p.id === id) ?? list[0];
  });

  /** Âm vị dùng để đối chiếu nét đứt (#comparison-ghost-layer) */
  readonly comparisonPhoneme = computed<GermanPhoneme | null>(() => {
    const customId = this.customComparisonPhonemeId();
    const list = this.allPhonemes();
    if (customId) {
      return list.find((p) => p.id === customId) ?? null;
    }
    const defaultSymbol = this.selectedPhoneme().comparedWith;
    return list.find((p) => p.symbol === defaultSymbol) ?? null;
  });

  /** Ký hiệu IPA thực tế đang được đối chiếu */
  readonly activeComparisonSymbol = computed<string>(() => {
    return (
      this.comparisonPhoneme()?.symbol ?? this.selectedPhoneme().comparedWith
    );
  });

  /** Từ ví dụ đang được chọn (tự động cập nhật nghĩa theo ngôn ngữ) */
  readonly selectedExampleWord = computed<ExampleWord>(() => {
    const phoneme = this.selectedPhoneme();
    const wordKey = this.selectedWordKey();
    return (
      phoneme.exampleWords.find((w) => w.word === wordKey) ??
      phoneme.exampleWords[0]
    );
  });

  /** Góc nhìn giải phẫu đang chọn: Mặt bên | Từ trên xuống | Thanh quản */
  readonly activeViewTab = signal<AnatomyViewTab>('sagittal');

  /** Tab điều hướng chính trên điện thoại (< 768px): Visualizer | 45 IPA | Guide */
  readonly activeMobileTab = signal<MobileNavTab>('visualizer');

  /** Các lớp hiển thị (Layer Checkboxes) trong khung mô phỏng giải phẫu */
  readonly showAllLabels = signal<boolean>(true);
  readonly showAirflow = signal<boolean>(true);
  readonly showPaperTest = signal<boolean>(false);
  readonly showComparison = signal<boolean>(false);

  /** Chế độ giao diện tối (mặc định false -> Bright Mode) */
  readonly isDarkMode = signal<boolean>(false);

  /** Trạng thái mở hộp thoại Cộng đồng & Bản quyền */
  readonly isCommunityModalOpen = signal<boolean>(false);

  /** Tổng số âm theo từng nhóm (cố định cho badge trên filter tabs) */
  readonly totalCounts = computed(() => {
    const list = this.allPhonemes();
    return {
      all: list.length,
      vowel: list.filter((p) => p.category === 'vowel').length,
      diphthong: list.filter((p) => p.category === 'diphthong').length,
      consonant: list.filter((p) => p.category === 'consonant').length
    };
  });

  /** Lọc danh sách theo từ khóa tìm kiếm VÀ tab danh mục */
  readonly filteredPhonemes = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    const cat = this.activeCategoryFilter();
    const list = this.allPhonemes();

    return list.filter((p) => {
      if (cat !== 'all' && p.category !== cat) {
        return false;
      }
      if (!q) {
        return true;
      }
      return (
        p.symbol.toLowerCase().includes(q) ||
        p.graphemes.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.exampleWords.some(
          (w) =>
            w.word.toLowerCase().includes(q) ||
            w.meaning.toLowerCase().includes(q)
        )
      );
    });
  });

  /** Nhóm Nguyên âm đơn (Vowels) */
  readonly vowels = computed(() =>
    this.filteredPhonemes().filter((p) => p.category === 'vowel')
  );

  /** Phân nhóm chi tiết Nguyên âm cho Sidebar */
  readonly vowelSubGroups = computed<PhonemeSubGroupSection[]>(() => {
    const items = this.vowels();
    const labels = this.ui().sidebar.subGroupLabels;
    return VOWEL_SUBGROUP_ORDER.map((key) => ({
      key,
      label: labels[key],
      items: items.filter((p) => p.subGroup === key)
    })).filter((g) => g.items.length > 0);
  });

  /** Nhóm Nguyên âm đôi (Diphthongs) */
  readonly diphthongs = computed(() =>
    this.filteredPhonemes().filter((p) => p.category === 'diphthong')
  );

  /** Nhóm Phụ âm (Consonants) */
  readonly consonants = computed(() =>
    this.filteredPhonemes().filter((p) => p.category === 'consonant')
  );

  /** Phân nhóm chi tiết Phụ âm cho Sidebar */
  readonly consonantSubGroups = computed<PhonemeSubGroupSection[]>(() => {
    const items = this.consonants();
    const labels = this.ui().sidebar.subGroupLabels;
    return CONSONANT_SUBGROUP_ORDER.map((key) => ({
      key,
      label: labels[key],
      items: items.filter((p) => p.subGroup === key)
    })).filter((g) => g.items.length > 0);
  });

  constructor() {
    this.initThemeAndMobileDefaults();
    this.initFromUrlQueryParams();

    // Đồng bộ URL query parameters để người dùng/giáo viên có thể chia sẻ link trực tiếp tới từng âm IPA
    effect(() => {
      const phoneme = this.selectedPhoneme();
      const lang = this.explanationLanguage();
      const view = this.activeViewTab();
      const compareOn = this.showComparison();
      const customCompareId = this.customComparisonPhonemeId();

      if (typeof window === 'undefined') {
        return;
      }

      const url = new URL(window.location.href);
      url.searchParams.set('phoneme', phoneme.id);
      url.searchParams.set('lang', lang);
      url.searchParams.set('view', view);

      if (compareOn) {
        const compId = customCompareId ?? this.comparisonPhoneme()?.id ?? '';
        if (compId) {
          url.searchParams.set('compare', compId);
        }
      } else {
        url.searchParams.delete('compare');
      }

      window.history.replaceState({}, '', url.toString());
    });
  }

  private initThemeAndMobileDefaults(): void {
    if (typeof window === 'undefined') {
      return;
    }

    let isDark = false;
    try {
      isDark = window.localStorage.getItem(THEME_STORAGE_KEY) === 'dark';
    } catch {
      isDark = false;
    }
    this.applyTheme(isDark);
  }

  private applyTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark);
      document
        .getElementById('theme-color-meta')
        ?.setAttribute('content', isDark ? '#090d16' : '#f8fafc');
    }
  }

  private initFromUrlQueryParams(): void {
    if (typeof window === 'undefined') {
      return;
    }
    const params = new URLSearchParams(window.location.search);

    const langParam = params.get('lang');
    if (langParam === 'vi' || langParam === 'de' || langParam === 'en') {
      this.setLanguage(langParam);
    }

    const phonemeParam = params.get('phoneme');
    if (phonemeParam) {
      this.selectPhoneme(phonemeParam);
    }

    const viewParam = params.get('view');
    if (viewParam === 'sagittal' || viewParam === 'top-down' || viewParam === 'larynx') {
      this.activeViewTab.set(viewParam);
    }

    const compareParam = params.get('compare');
    if (compareParam) {
      const exists = this.rawPhonemes().some((p) => p.id === compareParam);
      if (exists) {
        this.customComparisonPhonemeId.set(compareParam);
        this.showComparison.set(true);
      }
    }
  }

  toggleCommunityModal(open?: boolean): void {
    this.isCommunityModalOpen.update((v) => (open !== undefined ? open : !v));
  }

  getShareableUrl(): string {
    if (typeof window === 'undefined') {
      return '';
    }
    const url = new URL(window.location.href);
    url.searchParams.set('phoneme', this.selectedPhoneme().id);
    url.searchParams.set('lang', this.explanationLanguage());
    url.searchParams.set('view', this.activeViewTab());
    if (this.showComparison()) {
      const compId =
        this.customComparisonPhonemeId() ?? this.comparisonPhoneme()?.id ?? '';
      if (compId) {
        url.searchParams.set('compare', compId);
      }
    }
    return url.toString();
  }

  async copyShareableUrl(): Promise<boolean> {
    const shareUrl = this.getShareableUrl();
    if (!shareUrl || typeof navigator === 'undefined' || !navigator.clipboard) {
      return false;
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      return true;
    } catch {
      return false;
    }
  }

  /** Đổi bộ lọc nhóm chính ở cột trái */
  setCategoryFilter(cat: 'all' | PhonemeCategory): void {
    this.activeCategoryFilter.set(cat);
  }

  /** Đổi ngôn ngữ hiển thị ('vi' | 'de' | 'en') */
  setLanguage(lang: ExplanationLanguage): void {
    this.explanationLanguage.set(lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  /** Chọn một âm vị mới theo ID hoặc đối tượng */
  selectPhoneme(phonemeOrId: GermanPhoneme | string): void {
    const id = typeof phonemeOrId === 'string' ? phonemeOrId : phonemeOrId.id;
    const found = this.allPhonemes().find((p) => p.id === id);

    if (found) {
      this.selectedPhonemeId.set(found.id);
      this.customComparisonPhonemeId.set(null);
      if (found.exampleWords.length > 0) {
        this.selectedWordKey.set(found.exampleWords[0].word);
      }
    }
  }

  /** Chọn âm đối chiếu tùy chỉnh (hoặc truyền null để về cặp tối thiểu mặc định) */
  setComparisonPhoneme(phonemeId: string | null): void {
    this.customComparisonPhonemeId.set(phonemeId || null);
    if (phonemeId && !this.showComparison()) {
      this.showComparison.set(true);
    }
  }

  /** Chọn một từ ví dụ cụ thể trong âm vị hiện tại */
  selectExampleWord(word: ExampleWord): void {
    this.selectedWordKey.set(word.word);
  }

  /** Chuyển tab góc nhìn giải phẫu */
  setViewTab(tab: AnatomyViewTab): void {
    this.activeViewTab.set(tab);
  }

  /** Chuyển tab điều hướng trên điện thoại */
  setMobileTab(tab: MobileNavTab): void {
    this.activeMobileTab.set(tab);
  }

  /** Chuyển tới âm vị trước hoặc tiếp theo trong danh sách */
  stepPhoneme(delta: -1 | 1): void {
    const list = this.allPhonemes();
    if (list.length === 0) return;
    const currentIdx = list.findIndex((p) => p.id === this.selectedPhoneme().id);
    const nextIdx = (currentIdx + delta + list.length) % list.length;
    this.selectPhoneme(list[nextIdx]);
  }

  /** Bật/tắt các lớp hiển thị trên khung mô phỏng */
  toggleLabels(checked?: boolean): void {
    this.showAllLabels.update((v) => (checked !== undefined ? checked : !v));
  }

  toggleAirflow(checked?: boolean): void {
    this.showAirflow.update((v) => (checked !== undefined ? checked : !v));
  }

  togglePaperTest(checked?: boolean): void {
    this.showPaperTest.update((v) => (checked !== undefined ? checked : !v));
  }

  toggleComparison(checked?: boolean): void {
    this.showComparison.update((v) => (checked !== undefined ? checked : !v));
  }

  /** Bật/tắt chế độ Sáng/Tối và lưu vào localStorage */
  toggleTheme(): void {
    const next = !this.isDarkMode();
    this.applyTheme(next);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light');
      } catch {
        // Ignore storage write errors in private/restricted contexts
      }
    }
  }

  /** Lấy danh sách âm vị theo phân nhóm */
  getPhonemesByCategory(category: PhonemeCategory): GermanPhoneme[] {
    return this.allPhonemes().filter((p) => p.category === category);
  }
}
