export type PhonemeCategory = 'vowel' | 'diphthong' | 'consonant';

export type PhonemeSubGroup =
  | 'vowel_front_rounded'
  | 'vowel_front_unrounded'
  | 'vowel_central_open'
  | 'vowel_back_rounded'
  | 'diphthong_falling'
  | 'consonant_plosive'
  | 'consonant_fricative'
  | 'consonant_affricate'
  | 'consonant_nasal'
  | 'consonant_approximant';

export type ArticulationManner =
  | 'vowel'
  | 'diphthong'
  | 'plosive'
  | 'fricative'
  | 'affricate'
  | 'nasal'
  | 'lateral'
  | 'approximant';

export type AnatomyViewTab = 'sagittal' | 'top-down' | 'larynx';

export type ArticulationPhase = 'rest' | 'target' | 'release';

export type AnatomicalRegionId =
  | 'lips'
  | 'tongue-tip'
  | 'tongue-blade'
  | 'tongue-dorsum'
  | 'tongue-root'
  | 'soft-palate'
  | 'hard-palate'
  | 'vocal-cords';

export interface ExampleWord {
  /** Từ tiếng Đức (ví dụ: 'über', 'Bühne') */
  word: string;
  /** Phiên âm chuẩn IPA (ví dụ: '[ˈyːbɐ]') */
  ipa: string;
  /** Nghĩa tiếng Việt (ví dụ: 'trên, về, qua') */
  meaning: string;
  /** Đường dẫn file âm thanh (.ogg hoặc .mp3) */
  audioPath: string;
  /** Mốc thời gian [startTime, endTime] (giây) của âm vị trong từ */
  timeRange: [number, number];
  /** Phần chữ cái được nhấn mạnh trong từ (ví dụ: 'ü', 'ch') */
  highlightedGrapheme?: string;
}

export interface VietnameseMistake {
  /** Âm tiếng Việt hoặc âm tiếng Anh/Đức dễ bị người Việt nhầm lẫn */
  confusedWith: string;
  /** Mô tả chi tiết lỗi sai thường gặp */
  mistakeDescription: string;
  /** Mẹo khắc phục thực hành nhanh dành riêng cho người Việt */
  correctionTip: string;
}

export interface SvgOrganPaths {
  /** Đường dẫn SVG d cho môi trên (#upper-lip) trong hệ tọa độ 600x500 hướng sang phải */
  upperLip: string;
  /** Đường dẫn SVG d cho môi dưới (#lower-lip) */
  lowerLip: string;
  /** Đường dẫn SVG d tổng hợp cho cả 2 môi (#lips) */
  lips: string;
  /** Đường dẫn Bézier chính của toàn bộ khối lưỡi (#tongue-main-path) — cùng số điểm neo ở mọi trạng thái */
  tongueMain: string;
  /** Đường dẫn SVG d cho đầu lưỡi (#tongue-tip) */
  tongueTip: string;
  /** Đường dẫn SVG d cho phần trước lưỡi / phiến lưỡi (#tongue-blade) */
  tongueBlade: string;
  /** Đường dẫn SVG d cho phần sau lưỡi / thân lưỡi (#tongue-dorsum / #tongue-body) */
  tongueBody: string;
  /** Đường dẫn SVG d cho gốc lưỡi và mặt dưới lưỡi (#tongue-root) */
  tongueRoot: string;
  /** Đường dẫn SVG d cho ngạc mềm & lưỡi gà (#velum-path / #soft-palate) */
  softPalate: string;
  /** Đường dẫn SVG d cho luồng khí chính đi qua khoang miệng (#airflow-path) */
  airflowPath: string;
  /** Đường dẫn SVG d cho luồng khí đi qua khoang mũi (#nasal-airflow-path) cho /m, n, ŋ/ */
  nasalAirflowPath: string;
  /** Độ mờ hiển thị luồng khí mũi (0 = âm miệng, 1 = âm mũi /m, n, ŋ/) */
  nasalAirflowOpacity: number;
  /** Độ mờ hiển thị luồng khí miệng (0 = đóng tắc hoàn toàn / âm mũi, 1 = thoát khí miệng) */
  oralAirflowOpacity: number;
  /** Bật luồng khí rẽ hai bên lưỡi khi nhìn từ trên xuống (cho âm bên /l/) */
  isLateralAirflow?: boolean;
  /** Hiển thị răng cửa trên tựa lên môi dưới trong ô Nhìn chính diện (cho /f, v, p͡f/) */
  isLabiodental?: boolean;
  /** Tọa độ tâm xoáy khí ma sát (Fricative turbulence eddy) [cx, cy, opacity] */
  turbulenceCenter: [number, number, number];
  /** Góc lệch của tờ giấy thử bật hơi (0° -> 45°) */
  paperDeflectionAngle: number;
  /** Thông số khẩu hình môi nhìn chính diện (180x140 card) */
  frontLipAperture: {
    rx: number;
    ry: number;
    lipThickness: number;
    pucker: number; // 0 -> 1 độ chúm môi
    teethVisible: number; // 0 -> 1 độ lộ răng
    tongueTipY: number; // Vị trí đầu lưỡi nhìn từ khe miệng chính diện
  };
  /** Đường dẫn SVG vùng tiếp xúc vòm miệng khi nhìn từ trên xuống (400x400 Palatogram) */
  topDownContactPath: string;
  /** Đường dẫn SVG hình chiếu lưỡi bán trong suốt nhìn từ trên xuống (400x400) */
  topDownTongueOutline: string;
  /** Độ mở thanh môn (0.08 = khép sát rung hữu thanh, 0.85 = mở hình chữ V vô thanh) */
  glottalAperture: number;
}

export interface SvgKeyframes {
  /** Trạng thái nghỉ (0%) */
  rest: SvgOrganPaths;
  /** Trạng thái đỉnh phát âm (30% -> 70%, hoặc pha đóng tắc 30% -> 50% với âm tắc/tắc-xát) */
  target: SvgOrganPaths;
  /** Trạng thái nhả âm / bật hơi (50% -> 75% với âm tắc/tắc-xát, 70% -> 100% với âm khác) */
  release: SvgOrganPaths;
  /** Trạng thái đỉnh của âm đối chiếu (comparedWith) để vẽ nét đứt (#comparison-ghost-layer) */
  comparisonTarget: SvgOrganPaths;
}

export interface AcousticSynthesisProfile {
  /** Tần số cơ bản F0 (Hz) cho dây thanh */
  f0: number;
  /** Các tần số cộng hưởng Formant [F1, F2, F3] (Hz) */
  formants: [number, number, number];
  /** Mức độ nhiễu xát (Frication noise gain 0 -> 1) */
  noiseGain: number;
  /** Tần số trung tâm của bộ lọc nhiễu xát (Hz) */
  noiseFilterFreq: number;
  /** Tần số rung lưỡi gà (Trill/Uvular modulation Hz, 0 nếu không có) */
  trillRate?: number;
}

export interface GermanPhoneme {
  /** Mã định danh (ví dụ: 'ue_long', 'ch_ich', 'r_uvular') */
  id: string;
  /** Ký hiệu IPA (ví dụ: '/yː/', '/ç/', '/ʁ/') */
  symbol: string;
  /** Chữ cái biểu diễn phổ biến trong tiếng Đức (ví dụ: 'ü, üh, y') */
  graphemes: string;
  /** Nhóm âm vị chính */
  category: PhonemeCategory;
  /** Phân nhóm chi tiết để hiển thị trong thanh bên trái */
  subGroup: PhonemeSubGroup;
  /** Phương thức cấu âm (điều khiển cơ chế nội suy 1-pha hay 2-pha tắc-bật) */
  manner: ArticulationManner;
  /** Phân loại ngữ âm học bằng tiếng Việt */
  subCategory: string;
  /** Phân loại ngữ âm học bằng tiếng Đức / Quốc tế */
  ipaTechnicalName: string;
  /** Hữu thanh (true) hay Vô thanh (false) — kích hoạt rung dây thanh quản */
  isVoiced: boolean;
  /** Có bật hơi / luồng hơi mạnh hay không — kích hoạt hiệu ứng Thử bằng giấy */
  hasAspiration: boolean;
  /** Ký hiệu âm IPA dùng để đối chiếu nét đứt (ví dụ: '/iː/' khi đang xem '/yː/') */
  comparedWith: string;
  /** Giải thích ngắn về sự khác biệt với âm đối chiếu */
  comparisonNote: string;
  /** Đường dẫn file audio của riêng âm vị */
  phonemeAudioPath: string;
  /** Danh sách các từ ví dụ tiếng Đức có chứa âm vị này */
  exampleWords: ExampleWord[];
  /** Các bước hướng dẫn đặt môi, lưỡi, ngạc mềm và dây thanh bằng tiếng Việt */
  articulationSteps: string[];
  /** Các lỗi thường gặp của người Việt và mẹo sửa lỗi */
  vietnameseMistakes: VietnameseMistake[];
  /** Giải thích vai trò từng bộ phận giải phẫu khi người dùng click trực tiếp lên SVG */
  organRoles: Record<AnatomicalRegionId, string>;
  /** Tọa độ và đường dẫn SVG cho 3 trạng thái: rest, target, release + comparisonTarget */
  svgKeyframes: SvgKeyframes;
  /** Cấu hình tổng hợp âm thanh Web Audio API dự phòng khi chưa có file audio ngoài */
  acousticProfile: AcousticSynthesisProfile;
}
