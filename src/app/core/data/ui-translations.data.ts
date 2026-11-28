import {
  AnatomicalRegionId,
  PhonemeSubGroup,
  VietnameseMistake
} from '../models/phoneme.model';
import { ExplanationLanguage } from '../services/phoneme-data.service';
import { PHONEME_TRANSLATIONS_DE } from './phoneme-translations-de.data';
import { PHONEME_TRANSLATIONS_EN } from './phoneme-translations-en.data';

export interface PhonemeLocalizedContent {
  subCategory: string;
  graphemes: string;
  comparisonNote: string;
  wordMeanings: Record<string, string>;
  articulationSteps: string[];
  mistakes: VietnameseMistake[];
  organRoles: Record<AnatomicalRegionId, string>;
}

export interface UiTranslationDictionary {
  header: {
    subtitle: string;
    simulating: string;
    voiced: string;
    voiceless: string;
    languageLabel: string;
    themeDarkTitle: string;
    themeLightTitle: string;
  };
  sidebar: {
    title: string;
    subtitle: string;
    soundCountUnit: string;
    searchPlaceholder: string;
    filterAll: string;
    filterVowels: string;
    filterDiphthongs: string;
    filterConsonants: string;
    legendVoiced: string;
    legendVoiceless: string;
    legendAspirated: string;
    vowelsTitle: string;
    vowelsBadge: string;
    diphthongsTitle: string;
    diphthongsBadge: string;
    consonantsTitle: string;
    consonantsBadge: string;
    subGroupLabels: Record<PhonemeSubGroup, string>;
    spellingPrefix: string;
    examplePrefix: string;
    aspiratedBadge: string;
    currentComparison: string;
    emptyState: string;
  };
  viewer: {
    tabSagittal: string;
    tabTopDown: string;
    tabLarynx: string;
    layerAllLabels: string;
    layerAirflow: string;
    layerPaperTest: string;
    layerCompareWith: string;
    compareSelectTitle: string;
    resetCompareTitle: string;
    dashedLabel: string;
    nasalFlowBadge: string;
    lateralFlowBadge: string;
    labiodentalBadge: string;
    clickOrganHint: string;
    listenBtn: string;
    paperDeflectionPrefix: string;
    svgLabels: {
      nasalCavity: string;
      hardPalate: string;
      softPalate: string;
      lips: string;
      tongueTip: string;
      tongueBlade: string;
      tongueDorsum: string;
      tongueRoot: string;
      pharynx: string;
      larynx: string;
      vocalCords: string;
    };
    organNames: Record<AnatomicalRegionId, { title: string; subtitle: string }>;
    topDown: {
      airflowOut: string;
      lateralAirflowOut: string;
      alveolarZone: string;
      palatalZone: string;
      velarZone: string;
      legend: string;
    };
    larynxView: {
      title: string;
      epiglottis: string;
      arytenoid: string;
      voicedStatus: (f0: number) => string;
      voicelessStatus: string;
    };
    frontMouthCard: {
      title: string;
      strongPucker: (pct: number) => string;
      lightPucker: string;
      labiodentalDesc: string;
      bilabialSealDesc: string;
      spreadOrNeutral: string;
      aperturePrefix: string;
    };
    glottalCard: {
      voicedTitle: string;
      voicelessTitle: string;
      voicedDesc: (f0: number) => string;
      voicelessDesc: string;
      voicedBadge: string;
      voicelessBadge: string;
    };
  };
  timeline: {
    phaseLabel: string;
    phaseRest: string;
    phaseTarget: string;
    phaseRelease: string;
    frameLabel: string;
    playBtn: string;
    pauseBtn: string;
    stepBackTitle: string;
    stepForwardTitle: string;
    focusOnSound: string;
    slowMotion: string;
    loop: string;
  };
  guide: {
    spellingBadge: string;
    listenTitle: string;
    compareHeader: string;
    compareActiveBtn: string;
    compareInactiveBtn: string;
    exampleWordsTitle: string;
    meaningPrefix: string;
    stepsTitle: string;
    mistakesTitle: string;
    confusedWithPrefix: string;
    tipPrefix: string;
  };
  community: {
    communityBtn: string;
    shareBtn: string;
    shareCopied: string;
    modalTitle: string;
    modalSubtitle: string;
    openSourceTitle: string;
    openSourceDesc: string;
    attributionTitle: string;
    attributionDesc: string;
    contributeTitle: string;
    contributeSteps: { title: string; desc: string }[];
    copyCurrentLinkBtn: string;
    githubRepoLabel: string;
    closeBtn: string;
  };
  mobileNav: {
    tabVisualizer: string;
    tabIpa: string;
    tabGuide: string;
    changeSoundBtn: string;
    prevSoundTitle: string;
    nextSoundTitle: string;
  };
}

export const UI_TRANSLATIONS: Record<ExplanationLanguage, UiTranslationDictionary> = {
  // ==========================================================================
  // TIẾNG VIỆT (VI)
  // ==========================================================================
  vi: {
    header: {
      subtitle:
        'Trực quan hóa giải phẫu khẩu hình & Hướng dẫn phát âm tiếng Đức chuẩn IPA',
      simulating: 'Đang mô phỏng:',
      voiced: 'Hữu thanh (Rung)',
      voiceless: 'Vô thanh (Hơi)',
      languageLabel: 'Ngôn ngữ',
      themeDarkTitle: 'Chuyển sang giao diện Sáng',
      themeLightTitle: 'Chuyển sang giao diện Tối'
    },
    sidebar: {
      title: 'Bảng 45 Âm Vị IPA Tiếng Đức',
      subtitle: 'Chọn ký hiệu IPA để mô phỏng khẩu hình',
      soundCountUnit: 'âm',
      searchPlaceholder: 'Tìm âm IPA, chữ cái (ü, ö, ch, sch, z) hoặc từ...',
      filterAll: 'Tất cả',
      filterVowels: 'Nguyên âm',
      filterDiphthongs: 'Đôi',
      filterConsonants: 'Phụ âm',
      legendVoiced: 'Hữu thanh',
      legendVoiceless: 'Vô thanh',
      legendAspirated: 'Bật hơi',
      vowelsTitle: 'Nguyên âm đơn (Vokale)',
      vowelsBadge: '17 nguyên âm',
      diphthongsTitle: 'Nguyên âm đôi (Diphthonge)',
      diphthongsBadge: '3 âm đôi',
      consonantsTitle: 'Phụ âm (Konsonanten)',
      consonantsBadge: '25 phụ âm',
      subGroupLabels: {
        vowel_front_rounded: 'Tròn môi trước (ü / ö)',
        vowel_front_unrounded: 'Không tròn môi trước (i / e / ä)',
        vowel_central_open: 'Trung tâm & Mở (ə / ɐ / a)',
        vowel_back_rounded: 'Tròn môi sau (u / o)',
        diphthong_falling: 'Nguyên âm đôi (ei / au / eu)',
        consonant_plosive: 'Âm tắc & Knacklaut (p, b, t, d, k, g, ʔ)',
        consonant_fricative: 'Âm xát (f, v, s, z, ʃ, ʒ, ç, x, ʁ, h)',
        consonant_affricate: 'Âm tắc-xát (pf, ts, tsch)',
        consonant_nasal: 'Âm mũi (m, n, ŋ)',
        consonant_approximant: 'Âm bên & Tiếp cận (l, j)'
      },
      spellingPrefix: 'Chữ:',
      examplePrefix: 'VD:',
      aspiratedBadge: 'Bật hơi',
      currentComparison: 'Đối chiếu hiện tại:',
      emptyState: 'Không tìm thấy âm vị phù hợp.'
    },
    viewer: {
      tabSagittal: 'Mặt bên',
      tabTopDown: 'Từ trên xuống',
      tabLarynx: 'Thanh quản',
      layerAllLabels: 'Tất cả nhãn',
      layerAirflow: 'Luồng hơi',
      layerPaperTest: 'Thử bằng giấy',
      layerCompareWith: 'So sánh với',
      compareSelectTitle: 'Chọn âm đối chiếu bất kỳ trong 45 âm IPA',
      resetCompareTitle: 'Đặt lại cặp tối thiểu mặc định',
      dashedLabel: 'Nét đứt:',
      nasalFlowBadge: '👃 Luồng hơi qua mũi (Ngạc mềm hạ)',
      lateralFlowBadge: '↔ Luồng hơi rẽ hai bên lưỡi (/l/)',
      labiodentalBadge: '🦷 Răng trên chạm môi dưới',
      clickOrganHint: '💡 Bấm vào bộ phận giải phẫu để xem vai trò',
      listenBtn: 'Nghe',
      paperDeflectionPrefix: 'Lệch:',
      svgLabels: {
        nasalCavity: 'Khoang mũi',
        hardPalate: 'Ngạc cứng',
        softPalate: 'Ngạc mềm / Lưỡi gà',
        lips: 'Môi',
        tongueTip: 'Đầu lưỡi',
        tongueBlade: 'Phần trước lưỡi',
        tongueDorsum: 'Phần sau lưỡi',
        tongueRoot: 'Gốc lưỡi',
        pharynx: 'Họng (hầu)',
        larynx: 'Thanh quản',
        vocalCords: 'Dây thanh'
      },
      organNames: {
        lips: { title: 'Môi trên & Môi dưới', subtitle: 'Ober- & Unterlippe' },
        'tongue-tip': { title: 'Đầu lưỡi (Apex)', subtitle: 'Zungenspitze' },
        'tongue-blade': { title: 'Phần trước lưỡi (Lamina)', subtitle: 'Zungenblatt' },
        'tongue-dorsum': {
          title: 'Phần sau lưỡi / Thân lưỡi (Dorsum)',
          subtitle: 'Zungenrücken'
        },
        'tongue-root': { title: 'Gốc lưỡi (Radix)', subtitle: 'Zungenwurzel' },
        'soft-palate': {
          title: 'Ngạc mềm & Lưỡi gà (Velum & Uvula)',
          subtitle: 'Gaumensegel & Zäpfchen'
        },
        'hard-palate': {
          title: 'Ngạc cứng & Chân răng (Palatum)',
          subtitle: 'Harter Gaumen & Alveolen'
        },
        'vocal-cords': {
          title: 'Thanh quản & Dây thanh (Glottis)',
          subtitle: 'Kehlkopf & Stimmlippen'
        }
      },
      topDown: {
        airflowOut: '↑ Luồng hơi thoát ra môi (Phía trước)',
        lateralAirflowOut: '↰ ↱ Luồng hơi rẽ hai bên rìa lưỡi thoát ra ngoài',
        alveolarZone: 'Vùng chân răng & Ngạc cứng trước (Alveolar)',
        palatalZone: 'Vùng ngạc cứng giữa (Palatal — /ç/, /yː/, /øː/)',
        velarZone: 'Vùng ngạc mềm & Lưỡi gà (Velar/Uvular — /x/, /ʁ/)',
        legend: 'Vùng màu đỏ hồng: Điểm tiếp xúc giữa lưỡi và vòm miệng (Palatogram)'
      },
      larynxView: {
        title: 'Góc nhìn Nội soi Thanh quản từ trên xuống (Endoscopic Glottis View)',
        epiglottis: 'Nắp thanh môn (Epiglottis — Phía trước)',
        arytenoid: 'Sụn phễu (Arytenoid Cartilages — Phía sau)',
        voicedStatus: (f0: number) =>
          `● Hữu thanh (Stimmhaft): Hai dây thanh khép sát đường giữa và rung (${f0} Hz)`,
        voicelessStatus:
          '▲ Vô thanh (Stimmlos): Khe thanh môn mở rộng hình chữ V cho hơi đi qua'
      },
      frontMouthCard: {
        title: 'Nhìn chính diện (Môi)',
        strongPucker: (pct: number) => `Môi chu tròn chữ O (${pct}% độ chúm)`,
        lightPucker: 'Môi tròn nhẹ tự nhiên',
        labiodentalDesc: 'Răng cửa trên tựa nhẹ lên môi dưới',
        bilabialSealDesc: 'Hai môi mím chặt chặn hoàn toàn đường miệng',
        spreadOrNeutral: 'Môi mở tự nhiên / căng ngang',
        aperturePrefix: 'Độ mở:'
      },
      glottalCard: {
        voicedTitle: 'Rung hậu thanh',
        voicelessTitle: 'Mở vô thanh',
        voicedDesc: (f0: number) => `Dây thanh khép sát và rung mạnh (${f0} Hz).`,
        voicelessDesc: 'Khe thanh môn mở hình chữ V, hơi đi qua tự do.',
        voicedBadge: '● Stimmhaft (Hữu thanh)',
        voicelessBadge: '▲ Stimmlos (Vô thanh)'
      }
    },
    timeline: {
      phaseLabel: 'Giai đoạn:',
      phaseRest: '1. Nghỉ (Rest)',
      phaseTarget: '2. Đỉnh âm',
      phaseRelease: '3. Nhả âm (Release)',
      frameLabel: 'Khung:',
      playBtn: 'Phát',
      pauseBtn: 'Tạm dừng',
      stepBackTitle: 'Lùi 1 khung hình',
      stepForwardTitle: 'Tiến 1 khung hình',
      focusOnSound: 'Tập trung vào âm',
      slowMotion: '🐢 Chậm 0.5x',
      loop: 'Lặp lại'
    },
    guide: {
      spellingBadge: 'Chữ viết:',
      listenTitle: 'Phát âm vị chuẩn IPA',
      compareHeader: '⇄ Đối chiếu khẩu hình với âm',
      compareActiveBtn: 'Đang bật nét đứt',
      compareInactiveBtn: 'Bật nét đứt',
      exampleWordsTitle: 'Từ Ví Dụ (Bấm để nghe & đồng bộ khẩu hình)',
      meaningPrefix: 'Nghĩa:',
      stepsTitle: 'Cách Phát Âm Từng Bước (Khẩu Hình Chuẩn)',
      mistakesTitle: 'Lỗi Thường Gặp & Mẹo Khắc Phục',
      confusedWithPrefix: 'Dễ nhầm với:',
      tipPrefix: '💡 Mẹo:'
    },
    community: {
      communityBtn: 'Cộng đồng',
      shareBtn: 'Chia sẻ âm này',
      shareCopied: 'Đã chép link!',
      modalTitle: 'Lautform — Dự án Mã nguồn mở vì Cộng đồng',
      modalSubtitle:
        'Công cụ miễn phí 100% giúp người học chinh phục trọn bộ 45 âm vị IPA tiếng Đức',
      openSourceTitle: 'Miễn phí, Không quảng cáo & Giấy phép MIT',
      openSourceDesc:
        'Mã nguồn Lautform được phát hành công khai theo giấy phép MIT trên GitHub. Giáo viên, sinh viên và cộng đồng học tiếng Đức có thể sử dụng miễn phí, nhúng vào bài giảng hoặc gửi link trực tiếp tới từng âm IPA.',
      attributionTitle: 'Bản quyền Âm thanh & Ghi công Nguồn mở',
      attributionDesc:
        'Các bản thu âm phát âm chuẩn IPA và từ vựng tiếng Đức (.ogg) được trích xuất từ kho dữ liệu mở Wikimedia Commons theo giấy phép Creative Commons (CC BY-SA 3.0 / 4.0 & GFDL). Các âm chưa có bản thu hoặc chạy ngoại tuyến được tổng hợp tự động bằng bộ Formant Web Audio API.',
      contributeTitle: 'Cách bạn có thể đóng góp cho Lautform',
      contributeSteps: [
        {
          title: 'Gửi link bài học tới từng âm',
          desc: 'Dùng nút "Chia sẻ âm này" để gửi URL mở trực tiếp đúng âm IPA, góc nhìn giải phẫu và ngôn ngữ đang chọn.'
        },
        {
          title: 'Bổ sung từ ví dụ & Mẹo phát âm',
          desc: 'Mở Issue hoặc Pull Request trên GitHub để thêm lỗi sai thực tế của người học và ví dụ từ vựng mới.'
        },
        {
          title: 'Đóng góp file thu âm bản xứ',
          desc: 'Bổ sung file phát âm .ogg/.mp3 chuẩn cho 45 âm vị vào thư mục public/assets/audio/ để thay thế bộ tổng hợp.'
        }
      ],
      copyCurrentLinkBtn: 'Sao chép link tới âm đang xem',
      githubRepoLabel: 'Xem mã nguồn & Hướng dẫn đóng góp (GitHub)',
      closeBtn: 'Đóng'
    },
    mobileNav: {
      tabVisualizer: 'Khẩu hình',
      tabIpa: '45 Âm IPA',
      tabGuide: 'Hướng dẫn',
      changeSoundBtn: 'Đổi âm',
      prevSoundTitle: 'Âm trước',
      nextSoundTitle: 'Âm tiếp theo'
    }
  },

  // ==========================================================================
  // DEUTSCH (DE)
  // ==========================================================================
  de: {
    header: {
      subtitle:
        'Interaktive Vokaltrakt-Anatomie & vollständiger deutscher IPA-Aussprachetrainer',
      simulating: 'Aktiv:',
      voiced: 'Stimmhaft (Vibration)',
      voiceless: 'Stimmlos (Atemstrom)',
      languageLabel: 'Sprache',
      themeDarkTitle: 'Zum hellen Modus wechseln',
      themeLightTitle: 'Zum dunklen Modus wechseln'
    },
    sidebar: {
      title: 'Vollständige IPA-Tabelle (45 Laute)',
      subtitle: 'IPA-Symbol wählen zur Artikulationsanalyse',
      soundCountUnit: 'Laute',
      searchPlaceholder: 'IPA, Graphem (ü, ö, sch, z) oder Wort suchen...',
      filterAll: 'Alle',
      filterVowels: 'Vokale',
      filterDiphthongs: 'Diphthonge',
      filterConsonants: 'Konsonanten',
      legendVoiced: 'Stimmhaft',
      legendVoiceless: 'Stimmlos',
      legendAspirated: 'Behaucht',
      vowelsTitle: 'Vokale (Monophthonge)',
      vowelsBadge: '17 Vokale',
      diphthongsTitle: 'Diphthonge (Doppellaute)',
      diphthongsBadge: '3 Diphthonge',
      consonantsTitle: 'Konsonanten',
      consonantsBadge: '25 Konsonanten',
      subGroupLabels: {
        vowel_front_rounded: 'Gerundete Vorderzungenvokale',
        vowel_front_unrounded: 'Ungerundete Vorderzungenvokale',
        vowel_central_open: 'Zentral- & Öffnungsvokale',
        vowel_back_rounded: 'Gerundete Hinterzungenvokale',
        diphthong_falling: 'Diphthonge (ei / au / eu)',
        consonant_plosive: 'Plosive & Knacklaut (p, b, t, d, k, g, ʔ)',
        consonant_fricative: 'Frikative (f, v, s, z, ʃ, ʒ, ç, x, ʁ, h)',
        consonant_affricate: 'Affrikaten (pf, ts, tsch)',
        consonant_nasal: 'Nasale (m, n, ŋ)',
        consonant_approximant: 'Lateral & Approximant (l, j)'
      },
      spellingPrefix: 'Graphem:',
      examplePrefix: 'Bsp.:',
      aspiratedBadge: 'Behaucht',
      currentComparison: 'Aktueller Vergleich:',
      emptyState: 'Kein passender Laut gefunden.'
    },
    viewer: {
      tabSagittal: 'Sagittalschnitt',
      tabTopDown: 'Gaumenansicht',
      tabLarynx: 'Kehlkopf (Glottis)',
      layerAllLabels: 'Beschriftungen',
      layerAirflow: 'Luftstrom',
      layerPaperTest: 'Papiertest',
      layerCompareWith: 'Vergleich mit',
      compareSelectTitle: 'Beliebigen IPA-Vergleichslaut auswählen',
      resetCompareTitle: 'Standard-Minimalpaar wiederherstellen',
      dashedLabel: 'Gestrichelt:',
      nasalFlowBadge: '👃 Nasaler Luftstrom (Gaumensegel gesenkt)',
      lateralFlowBadge: '↔ Seitlicher Luftstrom (/l/)',
      labiodentalBadge: '🦷 Obere Zähne an Unterlippe',
      clickOrganHint: '💡 Auf ein Artikulationsorgan klicken für Details',
      listenBtn: 'Hören',
      paperDeflectionPrefix: 'Winkel:',
      svgLabels: {
        nasalCavity: 'Nasenhöhle',
        hardPalate: 'Harter Gaumen',
        softPalate: 'Gaumensegel / Uvula',
        lips: 'Lippen',
        tongueTip: 'Zungenspitze',
        tongueBlade: 'Zungenblatt',
        tongueDorsum: 'Zungenrücken',
        tongueRoot: 'Zungenwurzel',
        pharynx: 'Rachen (Pharynx)',
        larynx: 'Kehlkopf',
        vocalCords: 'Stimmlippen'
      },
      organNames: {
        lips: { title: 'Ober- & Unterlippe', subtitle: 'Labia' },
        'tongue-tip': { title: 'Zungenspitze (Apex)', subtitle: 'Apex linguae' },
        'tongue-blade': { title: 'Zungenblatt (Lamina)', subtitle: 'Lamina linguae' },
        'tongue-dorsum': { title: 'Zungenrücken (Dorsum)', subtitle: 'Dorsum linguae' },
        'tongue-root': { title: 'Zungenwurzel (Radix)', subtitle: 'Radix linguae' },
        'soft-palate': {
          title: 'Gaumensegel & Zäpfchen (Velum & Uvula)',
          subtitle: 'Palatum molle'
        },
        'hard-palate': {
          title: 'Harter Gaumen & Zahndamm',
          subtitle: 'Palatum durum & Alveolen'
        },
        'vocal-cords': {
          title: 'Kehlkopf & Stimmlippen (Glottis)',
          subtitle: 'Larynx & Plicae vocales'
        }
      },
      topDown: {
        airflowOut: '↑ Austretender Luftstrom zu den Lippen (Vorne)',
        lateralAirflowOut: '↰ ↱ Seitlich ausströmende Luft an den Zungenrändern',
        alveolarZone: 'Zahndamm & Vorderer Gaumen (Alveolar)',
        palatalZone: 'Mittlerer Harter Gaumen (Palatal — /ç/, /yː/, /øː/)',
        velarZone: 'Weicher Gaumen & Zäpfchen (Velar/Uvular — /x/, /ʁ/)',
        legend: 'Rosa Bereich: Kontaktfläche zwischen Zunge und Gaumen (Palatogramm)'
      },
      larynxView: {
        title: 'Endoskopische Aufsicht auf Kehlkopf & Stimmlippen (Glottis)',
        epiglottis: 'Kehldeckel (Epiglottis — Vorne)',
        arytenoid: 'Stellknorpel (Aryknorpel — Hinten)',
        voicedStatus: (f0: number) =>
          `● Stimmhaft: Stimmlippen geschlossen und periodisch schwingend (${f0} Hz)`,
        voicelessStatus:
          '▲ Stimmlos: Glottis weit V-förmig geöffnet für freien Luftstrom'
      },
      frontMouthCard: {
        title: 'Frontalansicht (Lippen)',
        strongPucker: (pct: number) => `Starke Lippenrundung (${pct}% Rundung)`,
        lightPucker: 'Leichte natürliche Lippenrundung',
        labiodentalDesc: 'Obere Schneidezähne an der Unterlippe',
        bilabialSealDesc: 'Bilabialer Lippenverschluss',
        spreadOrNeutral: 'Ungespannt / gespreizte Lippen',
        aperturePrefix: 'Öffnung:'
      },
      glottalCard: {
        voicedTitle: 'Stimmhaft (Schwingend)',
        voicelessTitle: 'Stimmlos (Geöffnet)',
        voicedDesc: (f0: number) =>
          `Stimmlippen liegen eng an und schwingen (${f0} Hz).`,
        voicelessDesc: 'Glottis V-förmig geöffnet, reiner Reibeluftstrom.',
        voicedBadge: '● Stimmhaft (Voiced)',
        voicelessBadge: '▲ Stimmlos (Voiceless)'
      }
    },
    timeline: {
      phaseLabel: 'Phase:',
      phaseRest: '1. Ruhestellung',
      phaseTarget: '2. Kernphase',
      phaseRelease: '3. Lösung',
      frameLabel: 'Bild:',
      playBtn: 'Abspielen',
      pauseBtn: 'Pause',
      stepBackTitle: '1 Bild zurück',
      stepForwardTitle: '1 Bild vor',
      focusOnSound: 'Lautfokus',
      slowMotion: '🐢 Langsam 0.5x',
      loop: 'Schleife'
    },
    guide: {
      spellingBadge: 'Schreibung:',
      listenTitle: 'Isolierten IPA-Laut anhören',
      compareHeader: '⇄ Artikulationsvergleich mit',
      compareActiveBtn: 'Kontur aktiv',
      compareInactiveBtn: 'Kontur zeigen',
      exampleWordsTitle: 'Beispielwörter (Klicken zum Anhören & Synchronisieren)',
      meaningPrefix: 'Bedeutung:',
      stepsTitle: 'Schritt-für-Schritt-Artikulation',
      mistakesTitle: 'Typische Aussprachefehler & Korrekturtipps',
      confusedWithPrefix: 'Oft verwechselt mit:',
      tipPrefix: '💡 Tipp:'
    },
    community: {
      communityBtn: 'Community',
      shareBtn: 'Laut-Link teilen',
      shareCopied: 'Link kopiert!',
      modalTitle: 'Lautform — Open-Source-Community-Projekt',
      modalSubtitle:
        '100 % kostenloses Open-Source-Tool für alle 45 deutschen IPA-Phoneme',
      openSourceTitle: 'Kostenlos, werbefrei & MIT-Lizenz',
      openSourceDesc:
        'Der Quellcode von Lautform steht unter der freien MIT-Lizenz. Lehrkräfte, Studierende und Deutschlernende weltweit können das Tool kostenlos nutzen, im Unterricht einsetzen und Deep-Links zu jedem einzelnen IPA-Laut teilen.',
      attributionTitle: 'Audio-Lizenzen & Quellenangaben',
      attributionDesc:
        'Die deutschen Wort- und IPA-Aufnahmen (.ogg) stammen aus den offenen Beständen von Wikimedia Commons (CC BY-SA 3.0 / 4.0 & GFDL). Fehlende Aufnahmen werden dynamisch über den integrierten Web Audio API Formant-Synthesizer erzeugt.',
      contributeTitle: 'So kannst du zu Lautform beitragen',
      contributeSteps: [
        {
          title: 'Direktlinks im Unterricht teilen',
          desc: 'Mit „Laut-Link teilen“ wird eine URL mit aktivem Phonem, Sprache und gewählter Ansicht kopiert.'
        },
        {
          title: 'Tipps & Beispielwörter ergänzen',
          desc: 'Reiche typische Aussprachefehler oder neue Beispielwörter über GitHub Issues oder Pull Requests ein.'
        },
        {
          title: 'Muttersprachliche Aufnahmen beisteuern',
          desc: 'Ergänze klare .ogg/.mp3-Aufnahmen in public/assets/audio/ für noch authentischere Beispiele.'
        }
      ],
      copyCurrentLinkBtn: 'Link zum aktuellen Laut kopieren',
      githubRepoLabel: 'Quellcode & Mitwirken (GitHub)',
      closeBtn: 'Schließen'
    },
    mobileNav: {
      tabVisualizer: 'Vokaltrakt',
      tabIpa: '45 IPA-Laute',
      tabGuide: 'Anleitung',
      changeSoundBtn: 'Laut',
      prevSoundTitle: 'Vorheriger Laut',
      nextSoundTitle: 'Nächster Laut'
    }
  },

  // ==========================================================================
  // ENGLISH (EN)
  // ==========================================================================
  en: {
    header: {
      subtitle:
        'Complete Interactive Vocal Tract & German IPA Pronunciation Visualizer',
      simulating: 'Simulating:',
      voiced: 'Voiced (Vibrating)',
      voiceless: 'Voiceless (Airflow)',
      languageLabel: 'Language',
      themeDarkTitle: 'Switch to Light Mode',
      themeLightTitle: 'Switch to Dark Mode'
    },
    sidebar: {
      title: 'Complete German IPA Chart (45)',
      subtitle: 'Select an IPA symbol to inspect vocal tract posture',
      soundCountUnit: 'sounds',
      searchPlaceholder: 'Search IPA, spelling (ü, ö, sch, z) or word...',
      filterAll: 'All',
      filterVowels: 'Vowels',
      filterDiphthongs: 'Diphthongs',
      filterConsonants: 'Consonants',
      legendVoiced: 'Voiced',
      legendVoiceless: 'Voiceless',
      legendAspirated: 'Aspirated',
      vowelsTitle: 'Vowels (Monophthongs)',
      vowelsBadge: '17 vowels',
      diphthongsTitle: 'Diphthongs (Gliding Vowels)',
      diphthongsBadge: '3 diphthongs',
      consonantsTitle: 'Consonants',
      consonantsBadge: '25 consonants',
      subGroupLabels: {
        vowel_front_rounded: 'Front Rounded Vowels (ü / ö)',
        vowel_front_unrounded: 'Front Unrounded Vowels (i / e / ä)',
        vowel_central_open: 'Central & Open Vowels (ə / ɐ / a)',
        vowel_back_rounded: 'Back Rounded Vowels (u / o)',
        diphthong_falling: 'Diphthongs (ei / au / eu)',
        consonant_plosive: 'Plosives & Glottal Stop (p, b, t, d, k, g, ʔ)',
        consonant_fricative: 'Fricatives (f, v, s, z, ʃ, ʒ, ç, x, ʁ, h)',
        consonant_affricate: 'Affricates (pf, ts, tsch)',
        consonant_nasal: 'Nasals (m, n, ŋ)',
        consonant_approximant: 'Lateral & Approximant (l, j)'
      },
      spellingPrefix: 'Letters:',
      examplePrefix: 'Ex:',
      aspiratedBadge: 'Aspirated',
      currentComparison: 'Active comparison:',
      emptyState: 'No matching phoneme found.'
    },
    viewer: {
      tabSagittal: 'Sagittal View',
      tabTopDown: 'Top-Down Palate',
      tabLarynx: 'Larynx & Glottis',
      layerAllLabels: 'All Labels',
      layerAirflow: 'Airflow',
      layerPaperTest: 'Paper Test',
      layerCompareWith: 'Compare with',
      compareSelectTitle: 'Pick any German IPA phoneme to overlay',
      resetCompareTitle: 'Reset to default minimal pair',
      dashedLabel: 'Dashed:',
      nasalFlowBadge: '👃 Nasal Airflow (Velum Lowered)',
      lateralFlowBadge: '↔ Bilateral Lateral Airflow (/l/)',
      labiodentalBadge: '🦷 Upper Teeth on Lower Lip',
      clickOrganHint: '💡 Click any anatomical structure to see its role',
      listenBtn: 'Listen',
      paperDeflectionPrefix: 'Angle:',
      svgLabels: {
        nasalCavity: 'Nasal cavity',
        hardPalate: 'Hard palate',
        softPalate: 'Soft palate / Uvula',
        lips: 'Lips',
        tongueTip: 'Tongue tip',
        tongueBlade: 'Tongue blade',
        tongueDorsum: 'Tongue dorsum',
        tongueRoot: 'Tongue root',
        pharynx: 'Pharynx',
        larynx: 'Larynx',
        vocalCords: 'Vocal folds'
      },
      organNames: {
        lips: { title: 'Upper & Lower Lips', subtitle: 'Ober- & Unterlippe' },
        'tongue-tip': { title: 'Tongue Tip (Apex)', subtitle: 'Zungenspitze' },
        'tongue-blade': { title: 'Tongue Blade (Lamina)', subtitle: 'Zungenblatt' },
        'tongue-dorsum': {
          title: 'Tongue Body / Dorsum',
          subtitle: 'Zungenrücken'
        },
        'tongue-root': { title: 'Tongue Root (Radix)', subtitle: 'Zungenwurzel' },
        'soft-palate': {
          title: 'Soft Palate & Uvula (Velum)',
          subtitle: 'Gaumensegel & Zäpfchen'
        },
        'hard-palate': {
          title: 'Hard Palate & Alveolar Ridge',
          subtitle: 'Harter Gaumen & Alveolen'
        },
        'vocal-cords': {
          title: 'Larynx & Vocal Folds (Glottis)',
          subtitle: 'Kehlkopf & Stimmlippen'
        }
      },
      topDown: {
        airflowOut: '↑ Outgoing airflow through the lips (Anterior)',
        lateralAirflowOut: '↰ ↱ Split lateral airflow escaping past tongue sides',
        alveolarZone: 'Alveolar Ridge & Anterior Hard Palate',
        palatalZone: 'Mid Hard Palate (Palatal — /ç/, /yː/, /øː/)',
        velarZone: 'Soft Palate & Uvula (Velar/Uvular — /x/, /ʁ/)',
        legend: 'Pink shaded area: Tongue-to-palate contact zone (Palatogram)'
      },
      larynxView: {
        title: 'Superior Endoscopic Larynx & Vocal Folds View (Glottis)',
        epiglottis: 'Epiglottis (Anterior)',
        arytenoid: 'Arytenoid Cartilages (Posterior)',
        voicedStatus: (f0: number) =>
          `● Voiced (Stimmhaft): Vocal folds adducted and vibrating along midline (${f0} Hz)`,
        voicelessStatus:
          '▲ Voiceless (Stimmlos): Wide V-shaped open glottis allowing free airflow'
      },
      frontMouthCard: {
        title: 'Front View (Lips)',
        strongPucker: (pct: number) => `Tight O-shaped lip rounding (${pct}% pucker)`,
        lightPucker: 'Slight natural lip rounding',
        labiodentalDesc: 'Upper incisors resting lightly on lower lip',
        bilabialSealDesc: 'Complete bilabial lip seal',
        spreadOrNeutral: 'Neutral or spread unrounded lips',
        aperturePrefix: 'Aperture:'
      },
      glottalCard: {
        voicedTitle: 'Voiced Vibration',
        voicelessTitle: 'Voiceless Open',
        voicedDesc: (f0: number) =>
          `Vocal folds adducted and vibrating steadily (${f0} Hz).`,
        voicelessDesc: 'Glottis open in a V-shape; voiceless airstream.',
        voicedBadge: '● Stimmhaft (Voiced)',
        voicelessBadge: '▲ Stimmlos (Voiceless)'
      }
    },
    timeline: {
      phaseLabel: 'Phase:',
      phaseRest: '1. Rest',
      phaseTarget: '2. Target',
      phaseRelease: '3. Release',
      frameLabel: 'Frame:',
      playBtn: 'Play',
      pauseBtn: 'Pause',
      stepBackTitle: 'Step back 1 frame',
      stepForwardTitle: 'Step forward 1 frame',
      focusOnSound: 'Focus on Sound',
      slowMotion: '🐢 Slow 0.5x',
      loop: 'Loop'
    },
    guide: {
      spellingBadge: 'Spelling:',
      listenTitle: 'Play isolated IPA phoneme',
      compareHeader: '⇄ Articulation Comparison with',
      compareActiveBtn: 'Ghost Outline On',
      compareInactiveBtn: 'Show Ghost Outline',
      exampleWordsTitle: 'Example Words (Click to listen & sync articulation)',
      meaningPrefix: 'Meaning:',
      stepsTitle: 'Step-by-Step Articulation Guide',
      mistakesTitle: 'Common Learner Mistakes & Correction Tips',
      confusedWithPrefix: 'Often confused with:',
      tipPrefix: '💡 Fix Tip:'
    },
    community: {
      communityBtn: 'Community',
      shareBtn: 'Share Sound Link',
      shareCopied: 'Link copied!',
      modalTitle: 'Lautform — Open-Source Community Project',
      modalSubtitle:
        '100% free open-source visualizer for all 45 Standard German IPA phonemes',
      openSourceTitle: '100% Free, Ad-Free & MIT Licensed',
      openSourceDesc:
        'Lautform source code is open source under the MIT License. Teachers, students, and self-learners can use it freely, embed it in courses, or share direct deep-links to any specific German phoneme.',
      attributionTitle: 'Audio Attribution & Open Data Credits',
      attributionDesc:
        'German IPA and word pronunciation recordings (.ogg) are sourced from Wikimedia Commons under Creative Commons licenses (CC BY-SA 3.0 / 4.0 & GFDL). Sounds without a local recording automatically use the built-in Web Audio API formant synthesizer and German SpeechSynthesis.',
      contributeTitle: 'How to Contribute to Lautform',
      contributeSteps: [
        {
          title: 'Share Direct Phoneme Links',
          desc: 'Use "Share Sound Link" to copy a URL that opens this exact IPA sound, view tab, and language.'
        },
        {
          title: 'Improve Tips & Example Words',
          desc: 'Open a GitHub Issue or Pull Request to add learner mistakes, translations, or example words.'
        },
        {
          title: 'Contribute Native Recordings',
          desc: 'Add clear .ogg or .mp3 recordings under public/assets/audio/ for any phoneme or example word.'
        }
      ],
      copyCurrentLinkBtn: 'Copy link to current phoneme',
      githubRepoLabel: 'Source Code & Contribution Guide (GitHub)',
      closeBtn: 'Close'
    },
    mobileNav: {
      tabVisualizer: 'Visualizer',
      tabIpa: '45 IPA',
      tabGuide: 'Guide',
      changeSoundBtn: 'Sounds',
      prevSoundTitle: 'Previous sound',
      nextSoundTitle: 'Next sound'
    }
  }
};

export const PHONEME_CONTENT_TRANSLATIONS: Record<
  'de' | 'en',
  Record<string, PhonemeLocalizedContent>
> = {
  de: PHONEME_TRANSLATIONS_DE,
  en: PHONEME_TRANSLATIONS_EN
};
