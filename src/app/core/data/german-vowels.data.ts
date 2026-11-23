import { GermanPhoneme } from '../models/phoneme.model';
import { buildKeyframes, POSTURE_PRESETS } from './svg-posture-builder';

export const GERMAN_VOWELS_AND_DIPHTHONGS_DATA: GermanPhoneme[] = [
  // ==========================================================================
  // 1. VOWELS — FRONT ROUNDED (4): /yː/, /ʏ/, /øː/, /œ/
  // ==========================================================================
  {
    id: 'ue_long',
    symbol: '/yː/',
    graphemes: 'ü, üh, y',
    category: 'vowel',
    subGroup: 'vowel_front_rounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm tròn môi trước đóng (dài)',
    ipaTechnicalName: 'Langer geschlossener gerundeter Vorderzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/iː/',
    comparisonNote:
      'Thân lưỡi của /yː/ nâng cao sát ngạc cứng phía trước giống hệt âm /iː/, nhưng hai môi chu tròn và nhô hẳn về phía trước thay vì kéo dẹt sang hai bên.',
    phonemeAudioPath: 'assets/audio/phonemes/ue_long.ogg',
    exampleWords: [
      { word: 'über', ipa: '[ˈyːbɐ]', meaning: 'trên, qua, về phía', audioPath: 'assets/audio/words/ueber.ogg', timeRange: [0.05, 0.48], highlightedGrapheme: 'ü' },
      { word: 'Bühne', ipa: '[ˈbyːnə]', meaning: 'sân khấu', audioPath: 'assets/audio/words/buehne.ogg', timeRange: [0.16, 0.56], highlightedGrapheme: 'üh' },
      { word: 'fühlen', ipa: '[ˈfyːlən]', meaning: 'cảm thấy, cảm nhận', audioPath: 'assets/audio/words/fuehlen.ogg', timeRange: [0.18, 0.58], highlightedGrapheme: 'üh' }
    ],
    articulationSteps: [
      'Bước 1 (Định vị lưỡi như âm /iː/): Đặt đầu lưỡi tựa nhẹ mặt sau răng cửa dưới, nâng cao phần trước lưỡi áp gần vòm ngạc cứng giống hệt khi ngân dài âm "i".',
      'Bước 2 (Chu tròn và nhô môi): Giữ cố định lưỡi ở phía trước, chu tròn chặt hai môi nhô về phía trước tạo khe mở tròn nhỏ.',
      'Bước 3 (Đóng ngạc mềm & rung dây thanh): Ngạc mềm nâng ép sát thành họng sau chặn đường mũi; dây thanh rung liên tục suốt âm dài.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "uy" (/wi/) hoặc "u" (/uː/) trong tiếng Việt',
        mistakeDescription: 'Người Việt thường trượt môi từ tròn sang bè thành "uy" hoặc kéo tụt lưỡi về phía sau thành "u".',
        correctionTip: 'Ngân dài âm "iiii...", giữ lưỡi đứng yên tuyệt đối rồi từ từ thu nhỏ hai khóe môi thành hình tròn nhỏ như huýt sáo.'
      },
      {
        confusedWith: 'Âm /iː/ không tròn môi (đọc "über" thành "iber")',
        mistakeDescription: 'Quên chu môi khiến /yː/ biến thành /iː/, dễ nhầm nghĩa (ví dụ: "lügen" vs "liegen").',
        correctionTip: 'Bật "So sánh với /iː/" để thấy lưỡi giống hệt nhưng môi của /yː/ nhô hẳn ra phía trước.'
      }
    ],
    organRoles: {
      lips: 'Môi trên và môi dưới chu tròn chặt, nhô hẳn về phía trước để kéo dài buồng cộng hưởng môi.',
      'tongue-tip': 'Đầu lưỡi hạ thấp, tựa nhẹ vào mặt sau răng cửa hàm dưới.',
      'tongue-blade': 'Phần trước lưỡi dốc cao lên sát vòm ngạc cứng giống hệt vị trí âm /iː/.',
      'tongue-dorsum': 'Thân lưỡi vồng cao về phía trước, thu hẹp khoảng trống dưới ngạc cứng.',
      'tongue-root': 'Gốc lưỡi tiến về phía trước, mở rộng khoang họng phía sau.',
      'soft-palate': 'Ngạc mềm nâng cao chạm thành họng sau, đóng kín hoàn toàn đường mũi.',
      'hard-palate': 'Đóng vai trò điểm tựa cố định phía trên để mặt lưỡi trước tiến gần tạo cộng hưởng cao.',
      'vocal-cords': 'Dây thanh khép sát và rung tuần hoàn (~165 Hz) tạo nguồn âm hữu thanh.'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.y_long, POSTURE_PRESETS.i_long),
    acousticProfile: { f0: 165, formants: [260, 1750, 2200], noiseGain: 0.02, noiseFilterFreq: 1800 }
  },
  {
    id: 'ue_short',
    symbol: '/ʏ/',
    graphemes: 'ü, y',
    category: 'vowel',
    subGroup: 'vowel_front_rounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm tròn môi trước gần đóng (ngắn, thả lỏng)',
    ipaTechnicalName: 'Kurzer zentralisierter fast geschlossener gerundeter Vorderzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/yː/',
    comparisonNote:
      'So với /yː/ (căng và đóng sát), âm ngắn /ʏ/ hạ thân lưỡi hơi thấp hơn và lùi nhẹ vào giữa, đồng thời môi tròn nhưng mở lỏng hơn.',
    phonemeAudioPath: 'assets/audio/phonemes/ue_short.ogg',
    exampleWords: [
      { word: 'Hütte', ipa: '[ˈhʏtə]', meaning: 'túp lều, nhà gỗ nhỏ', audioPath: 'assets/audio/words/huette.ogg', timeRange: [0.14, 0.34], highlightedGrapheme: 'ü' },
      { word: 'fünf', ipa: '[fʏnf]', meaning: 'số năm (5)', audioPath: 'assets/audio/words/fuenf.ogg', timeRange: [0.16, 0.36], highlightedGrapheme: 'ü' },
      { word: 'Glück', ipa: '[ɡlʏk]', meaning: 'hạnh phúc, may mắn', audioPath: 'assets/audio/words/glueck.ogg', timeRange: [0.18, 0.38], highlightedGrapheme: 'ü' }
    ],
    articulationSteps: [
      'Bước 1 (Thả lỏng lưỡi từ /yː/): Giữ đầu lưỡi sau răng dưới nhưng hạ thân lưỡi thấp hơn một chút so với /yː/ (tương đương độ cao âm /ɪ/ ngắn).',
      'Bước 2 (Mở môi tròn vừa phải): Chu môi tròn nhưng không ép căng quá chặt, tạo khe mở hơi rộng hơn /yː/.',
      'Bước 3 (Phát âm ngắn, dứt khoát): Rung dây thanh nhanh và dứt khoát, chuyển ngay sang phụ âm theo sau.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Kéo dài thành /yː/ hoặc đọc thành "uy" / "u"',
        mistakeDescription: 'Người Việt hay kéo dài âm /ʏ/ thành /yː/ (nhầm "Hütte" với "Hüte") hoặc phát âm thành "u" như "Hút-tờ".',
        correctionTip: 'Đặt lưỡi vào tư thế âm "i" ngắn thả lỏng (/ɪ/), chu môi tròn nhẹ rồi bật nhanh và gọn trong 0.15 giây.'
      }
    ],
    organRoles: {
      lips: 'Môi chu tròn nhẹ và thả lỏng hơn so với âm căng /yː/.',
      'tongue-tip': 'Đầu lưỡi tựa nhẹ phía sau răng cửa dưới.',
      'tongue-blade': 'Nâng ở mức gần đóng, thấp hơn /yː/ khoảng 2–3mm.',
      'tongue-dorsum': 'Thân lưỡi hơi lùi nhẹ vào vùng trước-trung tâm.',
      'tongue-root': 'Gốc lưỡi thả lỏng vừa phải.',
      'soft-palate': 'Ngạc mềm nâng đóng kín khoang mũi.',
      'hard-palate': 'Khe hở với mặt lưỡi rộng hơn so với /yː/.',
      'vocal-cords': 'Dây thanh rung ngắn gọn (~162 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.y_short, POSTURE_PRESETS.y_long),
    acousticProfile: { f0: 162, formants: [330, 1560, 2180], noiseGain: 0.02, noiseFilterFreq: 1700 }
  },
  {
    id: 'oe_long',
    symbol: '/øː/',
    graphemes: 'ö, öh, oe',
    category: 'vowel',
    subGroup: 'vowel_front_rounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm tròn môi trước nửa đóng (dài)',
    ipaTechnicalName: 'Langer halbgeschlossener gerundeter Vorderzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/eː/',
    comparisonNote:
      'Thân lưỡi của /øː/ nằm ở vị trí trước-trung bình giống hệt âm /eː/ ("ê"), nhưng hai môi chu tròn nhô ra trước thay vì mở dẹt.',
    phonemeAudioPath: 'assets/audio/phonemes/oe_long.ogg',
    exampleWords: [
      { word: 'schön', ipa: '[ʃøːn]', meaning: 'đẹp, tuyệt vời', audioPath: 'assets/audio/words/schoen.ogg', timeRange: [0.18, 0.58], highlightedGrapheme: 'ö' },
      { word: 'hören', ipa: '[ˈhøːʁən]', meaning: 'nghe, lắng nghe', audioPath: 'assets/audio/words/hoeren.ogg', timeRange: [0.14, 0.54], highlightedGrapheme: 'ö' },
      { word: 'Öl', ipa: '[øːl]', meaning: 'dầu (dầu ăn, dầu mỏ)', audioPath: 'assets/audio/words/oel.ogg', timeRange: [0.05, 0.5], highlightedGrapheme: 'Ö' }
    ],
    articulationSteps: [
      'Bước 1 (Đặt lưỡi ở vị trí âm /eː/): Đầu lưỡi chạm nhẹ mặt sau răng cửa dưới, thân lưỡi trước nâng lên độ cao trung bình (giống khi nói "ê").',
      'Bước 2 (Chu tròn hai môi): Giữ nguyên vị trí lưỡi phía trước của âm "ê", đẩy hai môi chu tròn về phía trước tạo khe mở bầu dục vừa phải.',
      'Bước 3 (Rung dây thanh ổn định): Ngạc mềm đóng kín khoang mũi, dây thanh rung đều tạo âm sắc trầm ấm.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "ơ" (/ɤː/) trong tiếng Việt (đọc "schön" thành "sơn")',
        mistakeDescription: 'Âm "ơ" tiếng Việt có lưỡi rút về sau và môi không tròn, làm từ tiếng Đức nghe bị bẹt.',
        correctionTip: 'Ngân dài âm "êêê..." (lưỡi ở phía trước) rồi tròn môi lại như phát âm chữ "ô". Công thức: [Lưỡi Ê + Môi Ô] = /øː/.'
      }
    ],
    organRoles: {
      lips: 'Hai môi chu tròn và nhô về phía trước với độ mở dọc lớn hơn âm /yː/ một chút.',
      'tongue-tip': 'Đầu lưỡi tựa nhẹ phía sau răng cửa hàm dưới.',
      'tongue-blade': 'Phần trước lưỡi nâng ở độ cao nửa đóng hướng về ngạc cứng.',
      'tongue-dorsum': 'Thân lưỡi ở vị trí trung bình-trước, giống hệt cấu hình lưỡi của /eː/.',
      'tongue-root': 'Gốc lưỡi hơi tiến về trước, giữ khoang họng thông thoáng.',
      'soft-palate': 'Ngạc mềm nâng cao chạm thành họng sau, chặn luồng khí lên mũi.',
      'hard-palate': 'Khoảng cách từ mặt lưỡi lên ngạc cứng rộng hơn /yː/, tạo tần số F1 cao hơn (~380 Hz).',
      'vocal-cords': 'Dây thanh khép sát và rung mạnh (~160 Hz) tạo âm hữu thanh.'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.oe_long, POSTURE_PRESETS.e_long),
    acousticProfile: { f0: 160, formants: [380, 1450, 2150], noiseGain: 0.02, noiseFilterFreq: 1500 }
  },
  {
    id: 'oe_short',
    symbol: '/œ/',
    graphemes: 'ö',
    category: 'vowel',
    subGroup: 'vowel_front_rounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm tròn môi trước nửa mở (ngắn)',
    ipaTechnicalName: 'Kurzer halboffener gerundeter Vorderzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/øː/',
    comparisonNote:
      'Âm ngắn /œ/ hạ hàm và thân lưỡi thấp hơn so với /øː/, đồng thời độ mở môi rộng hơn giống như phát âm /ɛ/ kết hợp tròn môi.',
    phonemeAudioPath: 'assets/audio/phonemes/oe_short.ogg',
    exampleWords: [
      { word: 'Götter', ipa: '[ˈɡœtɐ]', meaning: 'các vị thần', audioPath: 'assets/audio/words/goetter.ogg', timeRange: [0.14, 0.34], highlightedGrapheme: 'ö' },
      { word: 'öffnen', ipa: '[ˈœfnən]', meaning: 'mở ra', audioPath: 'assets/audio/words/oeffnen.ogg', timeRange: [0.05, 0.28], highlightedGrapheme: 'ö' },
      { word: 'zwölf', ipa: '[t͡svœlf]', meaning: 'số mười hai (12)', audioPath: 'assets/audio/words/zwoelf.ogg', timeRange: [0.2, 0.4], highlightedGrapheme: 'ö' }
    ],
    articulationSteps: [
      'Bước 1 (Đặt lưỡi như âm /ɛ/ ngắn): Hạ hàm dưới vừa phải, thân lưỡi trước ở độ cao nửa mở.',
      'Bước 2 (Tròn môi mở vừa): Chu nhẹ hai môi thành hình tròn rộng hơn /øː/ nhưng vẫn giữ độ tròn rõ ở khóe miệng.',
      'Bước 3 (Phát âm ngắn gọn): Ngạc mềm đóng đường mũi, rung dây thanh nhanh rồi đóng ngay bằng phụ âm sau.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "ơ" ngắn hoặc "e" bẹt không tròn môi',
        mistakeDescription: 'Người Việt dễ đọc "öffnen" thành "ớp-nần" hoặc "ép-nần" vì quên giữ độ tròn môi.',
        correctionTip: 'Nói âm "e" mở miệng vừa (/ɛ/) nhưng giữ hai môi hơi chúm tròn ngay từ trước khi mở giọng.'
      }
    ],
    organRoles: {
      lips: 'Hai môi tròn mở rộng hơn /øː/, không kéo dẹt khóe miệng.',
      'tongue-tip': 'Đầu lưỡi hạ thấp sau răng cửa dưới.',
      'tongue-blade': 'Phần trước lưỡi ở mức nửa mở.',
      'tongue-dorsum': 'Thân lưỡi hạ thấp hơn /øː/ và hơi thả lỏng.',
      'tongue-root': 'Gốc lưỡi ở vị trí trung bình.',
      'soft-palate': 'Ngạc mềm nâng đóng kín khoang mũi.',
      'hard-palate': 'Tạo buồng cộng hưởng rộng phía trước.',
      'vocal-cords': 'Dây thanh rung ngắn (~156 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.oe_short, POSTURE_PRESETS.oe_long),
    acousticProfile: { f0: 156, formants: [490, 1420, 2200], noiseGain: 0.02, noiseFilterFreq: 1500 }
  },

  // ==========================================================================
  // 2. VOWELS — FRONT UNROUNDED (5): /iː/, /ɪ/, /eː/, /ɛ/, /ɛː/
  // ==========================================================================
  {
    id: 'i_long',
    symbol: '/iː/',
    graphemes: 'i, ie, ih, ieh',
    category: 'vowel',
    subGroup: 'vowel_front_unrounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm không tròn môi trước đóng (dài, căng)',
    ipaTechnicalName: 'Langer geschlossener ungerundeter Vorderzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/ɪ/',
    comparisonNote:
      'Âm /iː/ nâng lưỡi cao và sát ngạc cứng hơn, đồng thời kéo căng khóe miệng sang hai bên hơn hẳn âm ngắn thả lỏng /ɪ/.',
    phonemeAudioPath: 'assets/audio/phonemes/i_long.ogg',
    exampleWords: [
      { word: 'ihr', ipa: '[iːɐ̯]', meaning: 'các bạn / của cô ấy', audioPath: 'assets/audio/words/ihr.ogg', timeRange: [0.05, 0.45], highlightedGrapheme: 'ih' },
      { word: 'Liebe', ipa: '[ˈliːbə]', meaning: 'tình yêu', audioPath: 'assets/audio/words/liebe.ogg', timeRange: [0.14, 0.52], highlightedGrapheme: 'ie' },
      { word: 'wir', ipa: '[viːɐ̯]', meaning: 'chúng tôi', audioPath: 'assets/audio/words/wir.ogg', timeRange: [0.14, 0.48], highlightedGrapheme: 'i' }
    ],
    articulationSteps: [
      'Bước 1 (Kéo căng môi sang hai bên): Mím nhẹ khóe miệng sang hai bên như đang mỉm cười nhẹ, khe môi hẹp.',
      'Bước 2 (Nâng cao mặt lưỡi trước): Đặt đầu lưỡi sau răng cửa dưới và vồng thân lưỡi trước thật cao sát ngạc cứng.',
      'Bước 3 (Kéo dài âm thanh căng): Đóng ngạc mềm và giữ dây thanh rung ổn định kéo dài.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Rút ngắn /iː/ thành /ɪ/ (nhầm "Miete" với "Mitte")',
        mistakeDescription: 'Nếu đọc quá ngắn và thả lỏng lưỡi, hai từ khác nghĩa hoàn toàn sẽ bị phát âm giống nhau.',
        correctionTip: 'Hãy kéo căng hai khóe miệng và giữ độ dài âm tối thiểu gấp đôi âm /ɪ/ ngắn.'
      }
    ],
    organRoles: {
      lips: 'Hai môi kéo dẹt sang hai bên tạo khe hẹp ngang, lộ nhẹ răng cửa.',
      'tongue-tip': 'Đầu lưỡi tựa sau răng cửa hàm dưới.',
      'tongue-blade': 'Phần trước lưỡi vồng cực cao sát vòm ngạc cứng.',
      'tongue-dorsum': 'Thân lưỡi đẩy sát lên phía trước dưới ngạc cứng.',
      'tongue-root': 'Gốc lưỡi tiến mạnh về trước mở rộng khoang hầu.',
      'soft-palate': 'Ngạc mềm nâng kín đường mũi.',
      'hard-palate': 'Khe hở với mặt lưỡi rất hẹp, tạo tần số F2 cực cao (~2250 Hz).',
      'vocal-cords': 'Dây thanh rung đều đặn (~170 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.i_long, POSTURE_PRESETS.i_short),
    acousticProfile: { f0: 170, formants: [260, 2250, 2950], noiseGain: 0.01, noiseFilterFreq: 2200 }
  },
  {
    id: 'i_short',
    symbol: '/ɪ/',
    graphemes: 'i',
    category: 'vowel',
    subGroup: 'vowel_front_unrounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm không tròn môi trước gần đóng (ngắn, thả lỏng)',
    ipaTechnicalName: 'Kurzer zentralisierter fast geschlossener ungerundeter Vorderzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/iː/',
    comparisonNote:
      'Âm ngắn /ɪ/ có lưỡi thấp và lùi hơn về trung tâm so với /iː/, môi hoàn toàn thả lỏng không kéo căng như khi cười.',
    phonemeAudioPath: 'assets/audio/phonemes/i_short.ogg',
    exampleWords: [
      { word: 'ich', ipa: '[ɪç]', meaning: 'tôi', audioPath: 'assets/audio/words/ich.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'i' },
      { word: 'Mitte', ipa: '[ˈmɪtə]', meaning: 'ở giữa, trung tâm', audioPath: 'assets/audio/words/mitte.ogg', timeRange: [0.14, 0.3], highlightedGrapheme: 'i' },
      { word: 'Kind', ipa: '[kɪnt]', meaning: 'đứa trẻ', audioPath: 'assets/audio/words/kind.ogg', timeRange: [0.14, 0.32], highlightedGrapheme: 'i' }
    ],
    articulationSteps: [
      'Bước 1 (Thả lỏng hoàn toàn môi và má): Không kéo căng khóe miệng như âm "i" tiếng Việt.',
      'Bước 2 (Hạ nhẹ lưỡi ở vị trí gần đóng): Lưỡi nằm hơi thấp và lùi hơn so với /iː/, âm nghe hơi hướng về giữa "i" và "ê".',
      'Bước 3 (Phát âm thật ngắn): Rung thanh quản nhanh, dứt khoát.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "i" căng của tiếng Việt (/iː/)',
        mistakeDescription: 'Tiếng Việt chỉ có âm "i" căng; khi đọc "ich" hoặc "Kind", người Việt hay căng khóe miệng làm từ nghe cứng và dài quá mức.',
        correctionTip: 'Thả lỏng cơ hàm và môi hoàn toàn như sắp đọc chữ "ê" nhưng nâng nhẹ lưỡi lên hướng "i", phát ra thật nhanh.'
      }
    ],
    organRoles: {
      lips: 'Hai môi ở tư thế tự nhiên, hoàn toàn không căng ngang.',
      'tongue-tip': 'Đầu lưỡi đặt nhẹ sau răng cửa dưới.',
      'tongue-blade': 'Nâng mức gần đóng, thấp hơn /iː/.',
      'tongue-dorsum': 'Thân lưỡi hơi lùi nhẹ về phía trung tâm.',
      'tongue-root': 'Gốc lưỡi thả lỏng tự nhiên.',
      'soft-palate': 'Ngạc mềm nâng đóng khoang mũi.',
      'hard-palate': 'Khoảng cách tới lưỡi rộng hơn /iː/.',
      'vocal-cords': 'Dây thanh rung nhanh (~165 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.i_short, POSTURE_PRESETS.i_long),
    acousticProfile: { f0: 165, formants: [360, 1950, 2650], noiseGain: 0.01, noiseFilterFreq: 2000 }
  },
  {
    id: 'e_long',
    symbol: '/eː/',
    graphemes: 'e, ee, eh',
    category: 'vowel',
    subGroup: 'vowel_front_unrounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm không tròn môi trước nửa đóng (dài, căng)',
    ipaTechnicalName: 'Langer halbgeschlossener ungerundeter Vorderzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/ɛ/',
    comparisonNote:
      'Âm /eː/ dài có lưỡi nâng cao và căng hơn hẳn âm /ɛ/ ngắn, nghe sáng và khép hơn âm "ê" tiếng Việt một chút (không trượt thành "ê-i").',
    phonemeAudioPath: 'assets/audio/phonemes/e_long.ogg',
    exampleWords: [
      { word: 'See', ipa: '[zeː]', meaning: 'hồ nước / biển', audioPath: 'assets/audio/words/see.ogg', timeRange: [0.16, 0.54], highlightedGrapheme: 'ee' },
      { word: 'gehen', ipa: '[ˈɡeːən]', meaning: 'đi bộ, đi', audioPath: 'assets/audio/words/gehen.ogg', timeRange: [0.14, 0.5], highlightedGrapheme: 'eh' },
      { word: 'leben', ipa: '[ˈleːbn̩]', meaning: 'sống', audioPath: 'assets/audio/words/leben.ogg', timeRange: [0.14, 0.48], highlightedGrapheme: 'e' }
    ],
    articulationSteps: [
      'Bước 1 (Kéo căng nhẹ khóe miệng): Khép hàm hơn âm "e", hơi căng khóe miệng sang hai bên.',
      'Bước 2 (Nâng lưỡi nửa đóng): Thân lưỡi trước nâng ở mức trung bình-cao (chính giữa /iː/ và /ɛ/).',
      'Bước 3 (Giữ âm thuần bất động): Ngân dài một màu âm thuần nhất, không lướt lưỡi lên thành âm đôi "ây/êi".'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Trượt thành nguyên âm đôi /eɪ/ như tiếng Anh ("See" thành "sây")',
        mistakeDescription: 'Do thói quen tiếng Anh, người học hay nâng lưỡi lên ở cuối âm thành "ê-i".',
        correctionTip: 'Giữ hàm dưới và lưỡi hoàn toàn bất động trong suốt thời gian ngân dài âm /eː/.'
      }
    ],
    organRoles: {
      lips: 'Mở ngang dẹt vừa phải, không chu tròn.',
      'tongue-tip': 'Tựa nhẹ sau răng cửa dưới.',
      'tongue-blade': 'Nâng cao mức nửa đóng dưới ngạc cứng.',
      'tongue-dorsum': 'Thân lưỡi trước căng và nâng đều.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Đóng kín đường mũi.',
      'hard-palate': 'Tạo khe cộng hưởng trước-trung bình.',
      'vocal-cords': 'Dây thanh rung đều đặn (~162 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.e_long, POSTURE_PRESETS.e_short),
    acousticProfile: { f0: 162, formants: [350, 2080, 2750], noiseGain: 0.01, noiseFilterFreq: 2000 }
  },
  {
    id: 'e_short',
    symbol: '/ɛ/',
    graphemes: 'e, ä',
    category: 'vowel',
    subGroup: 'vowel_front_unrounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm không tròn môi trước nửa mở (ngắn)',
    ipaTechnicalName: 'Kurzer halboffener ungerundeter Vorderzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/eː/',
    comparisonNote:
      'Âm /ɛ/ hạ thấp thân lưỡi và mở hàm rộng hơn /eː/, phát âm ngắn và thả lỏng gần giống âm "e" ngắn trong tiếng Việt.',
    phonemeAudioPath: 'assets/audio/phonemes/e_short.ogg',
    exampleWords: [
      { word: 'Bett', ipa: '[bɛt]', meaning: 'cái giường', audioPath: 'assets/audio/words/bett.ogg', timeRange: [0.14, 0.34], highlightedGrapheme: 'e' },
      { word: 'Männer', ipa: '[ˈmɛnɐ]', meaning: 'những người đàn ông', audioPath: 'assets/audio/words/maenner.ogg', timeRange: [0.14, 0.34], highlightedGrapheme: 'ä' },
      { word: 'sprechen', ipa: '[ˈʃpʁɛçn̩]', meaning: 'nói, trò chuyện', audioPath: 'assets/audio/words/sprechen.ogg', timeRange: [0.22, 0.4], highlightedGrapheme: 'e' }
    ],
    articulationSteps: [
      'Bước 1 (Hạ hàm nửa mở): Mở hàm dưới rộng hơn âm /eː/ để tạo khoang miệng thoáng.',
      'Bước 2 (Đặt lưỡi trước nửa mở): Đầu lưỡi sau răng dưới, thân lưỡi trước nâng nhẹ nhàng.',
      'Bước 3 (Phát âm ngắn): Rung thanh quản nhanh và dứt âm gọn.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Kéo dài âm "e" hoặc đọc nhầm sang "ê"',
        mistakeDescription: 'Thay thế /ɛ/ bằng /eː/ hoặc kéo dài làm mất độ tương phản (ví dụ: "Betten" vs "beten").',
        correctionTip: 'Mở hàm dưới xuống một chút so với chữ "ê" và ngắt âm thật gọn.'
      }
    ],
    organRoles: {
      lips: 'Mở tự nhiên theo độ hạ của hàm dưới.',
      'tongue-tip': 'Nằm thấp sau răng cửa dưới.',
      'tongue-blade': 'Nâng nhẹ ở mức nửa mở.',
      'tongue-dorsum': 'Thân lưỡi hạ vừa phải về phía trước.',
      'tongue-root': 'Thả lỏng tự nhiên.',
      'soft-palate': 'Nâng đóng kín đường mũi.',
      'hard-palate': 'Khoảng trống dưới ngạc cứng rộng hơn /eː/.',
      'vocal-cords': 'Dây thanh rung ngắn (~158 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.e_short, POSTURE_PRESETS.e_long),
    acousticProfile: { f0: 158, formants: [540, 1750, 2450], noiseGain: 0.01, noiseFilterFreq: 1800 }
  },
  {
    id: 'ae_long',
    symbol: '/ɛː/',
    graphemes: 'ä, äh',
    category: 'vowel',
    subGroup: 'vowel_front_unrounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm không tròn môi trước nửa mở (dài)',
    ipaTechnicalName: 'Langer halboffener ungerundeter Vorderzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/eː/',
    comparisonNote:
      'Âm /ɛː/ giữ độ dài ngang bằng /eː/ nhưng mở hàm và hạ lưỡi thấp xuống hẳn như chữ "e" dài (phân biệt cặp tối thiểu như "Käse" / "Bären" vs "Beeren").',
    phonemeAudioPath: 'assets/audio/phonemes/ae_long.ogg',
    exampleWords: [
      { word: 'Käse', ipa: '[ˈkɛːzə]', meaning: 'phô mai', audioPath: 'assets/audio/words/kaese.ogg', timeRange: [0.14, 0.5], highlightedGrapheme: 'ä' },
      { word: 'Mädchen', ipa: '[ˈmɛːtçən]', meaning: 'cô gái, bé gái', audioPath: 'assets/audio/words/maedchen.ogg', timeRange: [0.14, 0.48], highlightedGrapheme: 'ä' },
      { word: 'wählen', ipa: '[ˈvɛːlən]', meaning: 'lựa chọn, bầu chọn', audioPath: 'assets/audio/words/waehlen.ogg', timeRange: [0.14, 0.5], highlightedGrapheme: 'äh' }
    ],
    articulationSteps: [
      'Bước 1 (Mở rộng hàm): Hạ hàm dưới rộng như khi nói chữ "e" tiếng Việt.',
      'Bước 2 (Giữ lưỡi trước thấp): Đặt đầu lưỡi sau răng dưới và giữ thân lưỡi trước ở độ cao nửa mở.',
      'Bước 3 (Ngân dài âm mở): Giữ khẩu hình mở rộng và ngân dài âm đều đặn.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Đọc đồng nhất "ä" dài thành /eː/ ("ê")',
        mistakeDescription: 'Nhiều người nói "Mädchen" thành "Mêt-chen" thay vì mở hàm như /ɛː/.',
        correctionTip: 'Hạ cằm xuống rõ rệt và đọc giống âm "e" kéo dài trong tiếng Việt nhưng đều hơi.'
      }
    ],
    organRoles: {
      lips: 'Mở rộng tự nhiên theo độ hạ hàm, không tròn.',
      'tongue-tip': 'Đầu lưỡi tựa nhẹ sau răng cửa dưới.',
      'tongue-blade': 'Giữ ở vị trí nửa mở tương đối thấp.',
      'tongue-dorsum': 'Thân lưỡi trước hạ thấp để mở rộng khoang miệng.',
      'tongue-root': 'Ở vị trí trung tính.',
      'soft-palate': 'Đóng kín đường mũi.',
      'hard-palate': 'Tạo khoang cộng hưởng rộng, F1 cao (~580 Hz).',
      'vocal-cords': 'Dây thanh rung kéo dài (~156 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.ae_long, POSTURE_PRESETS.e_long),
    acousticProfile: { f0: 156, formants: [580, 1720, 2480], noiseGain: 0.01, noiseFilterFreq: 1800 }
  },

  // ==========================================================================
  // 3. VOWELS — CENTRAL & OPEN (4): /ə/, /ɐ/, /aː/, /a/
  // ==========================================================================
  {
    id: 'schwa',
    symbol: '/ə/',
    graphemes: 'e (âm tiết không nhấn)',
    category: 'vowel',
    subGroup: 'vowel_central_open',
    manner: 'vowel',
    subCategory: 'Nguyên âm giữa trung tính (Schwa — không nhấn)',
    ipaTechnicalName: 'Unbetonter mittlerer Zentralvokal (Schwa)',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/ɐ/',
    comparisonNote:
      'Âm Schwa /ə/ đặt lưỡi hoàn toàn ở trung tâm khoang miệng (cao hơn /ɐ/), dùng cho đuôi "-e" như "bitte", "Katze", còn /ɐ/ hạ thấp hơn cho đuôi "-er".',
    phonemeAudioPath: 'assets/audio/phonemes/schwa.ogg',
    exampleWords: [
      { word: 'bitte', ipa: '[ˈbɪtə]', meaning: 'làm ơn / không có gì', audioPath: 'assets/audio/words/bitte.ogg', timeRange: [0.36, 0.56], highlightedGrapheme: 'e' },
      { word: 'Name', ipa: '[ˈnaːmə]', meaning: 'tên gọi', audioPath: 'assets/audio/words/name.ogg', timeRange: [0.42, 0.6], highlightedGrapheme: 'e' },
      { word: 'gesehen', ipa: '[ɡəˈzeːən]', meaning: 'đã nhìn thấy', audioPath: 'assets/audio/words/gesehen.ogg', timeRange: [0.1, 0.24], highlightedGrapheme: 'ge' }
    ],
    articulationSteps: [
      'Bước 1 (Thả lỏng toàn bộ cơ mặt): Để môi và hàm ở vị trí nghỉ tự nhiên, không gắng sức.',
      'Bước 2 (Đặt lưỡi ở trung tâm): Không đẩy lưỡi ra trước như /e/ cũng không kéo về sau như /o/.',
      'Bước 3 (Phát âm cực nhẹ, lướt nhanh): Chỉ bật dây thanh thật nhẹ và ngắn (nhẹ hơn chữ "ờ" tiếng Việt).'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Đọc nặng thành "ơ" nhấn trọng âm hoặc đọc rõ thành "e"',
        mistakeDescription: 'Người Việt hay đọc "bitte" thành "bít-tơ" rất nặng hoặc "bít-te".',
        correctionTip: 'Hãy thả lỏng cổ họng hết mức, đọc thật khẽ và ngắn ở âm tiết cuối như tiếng thở nhẹ hữu thanh.'
      }
    ],
    organRoles: {
      lips: 'Hoàn toàn thư giãn ở tư thế trung tính.',
      'tongue-tip': 'Nằm tự nhiên trên sàn miệng.',
      'tongue-blade': 'Thả lỏng ở độ cao giữa.',
      'tongue-dorsum': 'Thân lưỡi nằm chính giữa khoang miệng (F1≈480, F2≈1480 Hz).',
      'tongue-root': 'Ở vị trí cân bằng.',
      'soft-palate': 'Nâng nhẹ đóng đường mũi.',
      'hard-palate': 'Không có điểm nâng cục bộ.',
      'vocal-cords': 'Dây thanh rung nhẹ và ngắn (~152 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.schwa, POSTURE_PRESETS.tiefschwa),
    acousticProfile: { f0: 152, formants: [480, 1480, 2450], noiseGain: 0.01, noiseFilterFreq: 1500 }
  },
  {
    id: 'tiefschwa',
    symbol: '/ɐ/',
    graphemes: '-er (cuối từ/tiếp vị ngữ), r (sau nguyên âm dài)',
    category: 'vowel',
    subGroup: 'vowel_central_open',
    manner: 'vowel',
    subCategory: 'Nguyên âm giữa gần mở (Tiefschwa — âm R nguyên âm hóa)',
    ipaTechnicalName: 'Fast offener Zentralvokal (vokalisiertes R)',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/ə/',
    comparisonNote:
      'Âm /ɐ/ có lưỡi hạ thấp và mở hàm hơn âm Schwa /ə/, nghe gần giống chữ "a" nhẹ ngắn — là cách phát âm chuẩn của đuôi "-er" trong tiếng Đức.',
    phonemeAudioPath: 'assets/audio/phonemes/tiefschwa.ogg',
    exampleWords: [
      { word: 'Vater', ipa: '[ˈfaːtɐ]', meaning: 'người cha', audioPath: 'assets/audio/words/vater.ogg', timeRange: [0.44, 0.64], highlightedGrapheme: 'er' },
      { word: 'Wasser', ipa: '[ˈvasɐ]', meaning: 'nước', audioPath: 'assets/audio/words/wasser.ogg', timeRange: [0.42, 0.62], highlightedGrapheme: 'er' },
      { word: 'Bruder', ipa: '[ˈbʁuːdɐ]', meaning: 'anh / em trai', audioPath: 'assets/audio/words/bruder.ogg', timeRange: [0.44, 0.64], highlightedGrapheme: 'er' }
    ],
    articulationSteps: [
      'Bước 1 (Hạ nhẹ hàm dưới): Mở hàm rộng hơn /ə/ một chút nhưng vẫn giữ cảm giác thả lỏng.',
      'Bước 2 (Giữ đầu lưỡi nằm thấp): TUYỆT ĐỐI không cong đầu lưỡi lên như chữ "r" tiếng Anh!',
      'Bước 3 (Phát âm lướt giữa "ơ" và "a"): Tạo một âm ngắn, nhẹ hướng về "a" thư giãn (gần như "pha-tờ/pha-ta").'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Cong lưỡi đọc kiểu R tiếng Anh ("Vater" thành "pha-tơr")',
        mistakeDescription: 'Do ảnh hưởng tiếng Anh, người học hay uốn đầu lưỡi lên ở cuối từ chứa "-er".',
        correctionTip: 'Ghim chặt đầu lưỡi sau răng dưới! Trong tiếng Đức chuẩn, đuôi "-er" không bao giờ uốn lưỡi mà đọc như âm /ɐ/ mềm.'
      }
    ],
    organRoles: {
      lips: 'Thả lỏng hơi mở nhẹ.',
      'tongue-tip': 'Nằm yên dưới sàn miệng, không cong lên.',
      'tongue-blade': 'Hạ thấp về vùng giữa-mở.',
      'tongue-dorsum': 'Thân lưỡi hạ thấp hơn /ə/, hơi hướng về /a/.',
      'tongue-root': 'Hơi lùi nhẹ một chút.',
      'soft-palate': 'Đóng đường mũi.',
      'hard-palate': 'Khoang miệng mở thoáng.',
      'vocal-cords': 'Dây thanh rung nhẹ (~150 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.tiefschwa, POSTURE_PRESETS.schwa),
    acousticProfile: { f0: 150, formants: [620, 1380, 2400], noiseGain: 0.01, noiseFilterFreq: 1400 }
  },
  {
    id: 'a_long',
    symbol: '/aː/',
    graphemes: 'a, aa, ah',
    category: 'vowel',
    subGroup: 'vowel_central_open',
    manner: 'vowel',
    subCategory: 'Nguyên âm mở giữa-sau (dài)',
    ipaTechnicalName: 'Langer ungerundeter offener Zentralvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/a/',
    comparisonNote:
      'Âm /aː/ dài mở hàm rộng tối đa và kéo gốc lưỡi hơi lùi sâu hơn một chút so với âm /a/ ngắn sáng, tạo âm sắc trầm và vang.',
    phonemeAudioPath: 'assets/audio/phonemes/a_long.ogg',
    exampleWords: [
      { word: 'Tag', ipa: '[taːk]', meaning: 'ngày, ban ngày', audioPath: 'assets/audio/words/tag.ogg', timeRange: [0.14, 0.5], highlightedGrapheme: 'a' },
      { word: 'Bahn', ipa: '[baːn]', meaning: 'đường sắt, tàu điện', audioPath: 'assets/audio/words/bahn.ogg', timeRange: [0.14, 0.52], highlightedGrapheme: 'ah' },
      { word: 'Staat', ipa: '[ʃtaːt]', meaning: 'nhà nước, quốc gia', audioPath: 'assets/audio/words/staat.ogg', timeRange: [0.22, 0.58], highlightedGrapheme: 'aa' }
    ],
    articulationSteps: [
      'Bước 1 (Mở rộng hàm dưới): Hạ cằm xuống sâu để khoang miệng mở rộng tối đa theo chiều dọc.',
      'Bước 2 (Đặt lưỡi phẳng và thấp): Trải phẳng toàn bộ mặt lưỡi nằm thấp dưới sàn miệng, đầu lưỡi chạm nhẹ lợi dưới.',
      'Bước 3 (Ngân dài vang đều): Giữ nguyên độ mở rộng và rung dây thanh kéo dài rõ ràng.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Rút ngắn thành /a/ (nhầm "Staat" với "Stadt" hoặc "Bahn" với "Bann")',
        mistakeDescription: 'Đọc "a" dài quá ngắn khiến người nghe hiểu nhầm sang cặp từ chứa /a/ ngắn.',
        correctionTip: 'Mở cằm sâu và kéo dài âm "a..." chậm hơn gấp đôi bình thường.'
      }
    ],
    organRoles: {
      lips: 'Mở rộng tự nhiên theo độ hạ của hàm dưới, không chu môi.',
      'tongue-tip': 'Nằm phẳng sát sàn miệng sau răng dưới.',
      'tongue-blade': 'Hạ thấp tối đa.',
      'tongue-dorsum': 'Thân lưỡi hạ thấp và hơi lùi nhẹ về sau tạo âm vang ấm.',
      'tongue-root': 'Hơi lùi nhẹ về thành họng.',
      'soft-palate': 'Nâng cao đóng đường mũi.',
      'hard-palate': 'Khoang cộng hưởng miệng mở lớn nhất (F1 ≈ 750 Hz).',
      'vocal-cords': 'Dây thanh rung mạnh và đều (~154 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.a_long, POSTURE_PRESETS.a_short),
    acousticProfile: { f0: 154, formants: [750, 1220, 2450], noiseGain: 0.01, noiseFilterFreq: 1400 }
  },
  {
    id: 'a_short',
    symbol: '/a/',
    graphemes: 'a',
    category: 'vowel',
    subGroup: 'vowel_central_open',
    manner: 'vowel',
    subCategory: 'Nguyên âm mở giữa (ngắn, sáng)',
    ipaTechnicalName: 'Kurzer ungerundeter offener Zentralvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/aː/',
    comparisonNote:
      'Âm /a/ ngắn có thân lưỡi hơi tiến ra trước và sáng hơn /aː/ dài, đồng thời được phát ra nhanh và dứt khoát trước phụ âm.',
    phonemeAudioPath: 'assets/audio/phonemes/a_short.ogg',
    exampleWords: [
      { word: 'Mann', ipa: '[man]', meaning: 'người đàn ông', audioPath: 'assets/audio/words/mann.ogg', timeRange: [0.14, 0.34], highlightedGrapheme: 'a' },
      { word: 'Stadt', ipa: '[ʃtat]', meaning: 'thành phố', audioPath: 'assets/audio/words/stadt.ogg', timeRange: [0.22, 0.4], highlightedGrapheme: 'a' },
      { word: 'Hand', ipa: '[hant]', meaning: 'bàn tay', audioPath: 'assets/audio/words/hand.ogg', timeRange: [0.14, 0.34], highlightedGrapheme: 'a' }
    ],
    articulationSteps: [
      'Bước 1 (Mở hàm vừa rộng): Hạ hàm dưới tự nhiên, lưỡi nằm thấp ở trung tâm khoang miệng.',
      'Bước 2 (Giữ âm sáng và gọn): Phát âm chữ "a" thật nhanh và rõ trước khi khép lại bằng phụ âm sau.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Kéo dài âm thành /aː/ hoặc đọc sẫm thành "ă"',
        mistakeDescription: 'Đọc kéo dài làm nhầm nghĩa ("Kamm" vs "kam") hoặc đọc biến chất âm.',
        correctionTip: 'Giữ chất âm "a" sáng mở nhưng cắt ngắn thời lượng thật dứt khoát.'
      }
    ],
    organRoles: {
      lips: 'Mở tự nhiên, không tròn.',
      'tongue-tip': 'Nằm thấp sau răng dưới.',
      'tongue-blade': 'Hạ thấp tự nhiên.',
      'tongue-dorsum': 'Ở vị trí mở trung tâm.',
      'tongue-root': 'Thả lỏng.',
      'soft-palate': 'Đóng đường mũi.',
      'hard-palate': 'Khoang miệng mở rộng.',
      'vocal-cords': 'Dây thanh rung ngắn (~156 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.a_short, POSTURE_PRESETS.a_long),
    acousticProfile: { f0: 156, formants: [740, 1340, 2500], noiseGain: 0.01, noiseFilterFreq: 1400 }
  },

  // ==========================================================================
  // 4. VOWELS — BACK ROUNDED (4): /uː/, /ʊ/, /oː/, /ɔ/
  // ==========================================================================
  {
    id: 'u_long',
    symbol: '/uː/',
    graphemes: 'u, uh',
    category: 'vowel',
    subGroup: 'vowel_back_rounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm tròn môi sau đóng (dài, căng)',
    ipaTechnicalName: 'Langer geschlossener gerundeter Hinterzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/yː/',
    comparisonNote:
      'Âm /uː/ và /yː/ có độ chu tròn môi giống nhau, nhưng /uː/ kéo toàn bộ thân lưỡi lùi về phía ngạc mềm sau thay vì đẩy ra ngạc cứng trước.',
    phonemeAudioPath: 'assets/audio/phonemes/u_long.ogg',
    exampleWords: [
      { word: 'Buch', ipa: '[buːx]', meaning: 'quyển sách', audioPath: 'assets/audio/words/buch.ogg', timeRange: [0.14, 0.48], highlightedGrapheme: 'u' },
      { word: 'Uhr', ipa: '[uːɐ̯]', meaning: 'đồng hồ / giờ', audioPath: 'assets/audio/words/uhr.ogg', timeRange: [0.05, 0.44], highlightedGrapheme: 'Uh' },
      { word: 'gut', ipa: '[ɡuːt]', meaning: 'tốt, giỏi', audioPath: 'assets/audio/words/gut.ogg', timeRange: [0.14, 0.5], highlightedGrapheme: 'u' }
    ],
    articulationSteps: [
      'Bước 1 (Kéo lưỡi lùi cao về sau): Rút đầu lưỡi lùi khỏi răng dưới, nâng cao thân lưỡi sau hướng lên ngạc mềm.',
      'Bước 2 (Chu tròn môi mạnh): Chu chặt hai môi nhô ra phía trước thành lỗ tròn nhỏ.',
      'Bước 3 (Ngân dài trầm ấm): Rung dây thanh đều và kéo dài âm.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Rút ngắn thành /ʊ/ hoặc không chu môi đủ chặt',
        mistakeDescription: 'Khi nói nhanh, người học dễ mở lỏng môi làm /uː/ biến thành /ʊ/.',
        correctionTip: 'Chu môi thật tròn và nhô ra trước giống như âm /yː/, nhưng kéo lưỡi hẳn về phía sau.'
      }
    ],
    organRoles: {
      lips: 'Chu tròn chặt và nhô mạnh ra phía trước.',
      'tongue-tip': 'Rút lùi khỏi răng dưới và hạ thấp.',
      'tongue-blade': 'Hạ dốc về phía sàn miệng trước.',
      'tongue-dorsum': 'Phần sau lưỡi vồng cao sát ngạc mềm.',
      'tongue-root': 'Lùi về phía họng sau.',
      'soft-palate': 'Nâng cao đóng kín đường mũi.',
      'hard-palate': 'Tạo khoảng trống lớn phía trước khoang miệng.',
      'vocal-cords': 'Dây thanh rung trầm đều (~150 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.u_long, POSTURE_PRESETS.y_long),
    acousticProfile: { f0: 150, formants: [280, 740, 2200], noiseGain: 0.01, noiseFilterFreq: 1000 }
  },
  {
    id: 'u_short',
    symbol: '/ʊ/',
    graphemes: 'u',
    category: 'vowel',
    subGroup: 'vowel_back_rounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm tròn môi sau gần đóng (ngắn, thả lỏng)',
    ipaTechnicalName: 'Kurzer zentralisierter fast geschlossener gerundeter Hinterzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/uː/',
    comparisonNote:
      'Âm ngắn /ʊ/ hạ lưng lưỡi thấp hơn và tiến vào trung tâm hơn so với /uː/, đồng thời độ chu môi nhẹ và thả lỏng hơn.',
    phonemeAudioPath: 'assets/audio/phonemes/u_short.ogg',
    exampleWords: [
      { word: 'Hund', ipa: '[hʊnt]', meaning: 'con chó', audioPath: 'assets/audio/words/hund.ogg', timeRange: [0.14, 0.34], highlightedGrapheme: 'u' },
      { word: 'Mutter', ipa: '[ˈmʊtɐ]', meaning: 'người mẹ', audioPath: 'assets/audio/words/mutter.ogg', timeRange: [0.14, 0.32], highlightedGrapheme: 'u' },
      { word: 'und', ipa: '[ʊnt]', meaning: 'và', audioPath: 'assets/audio/words/und.ogg', timeRange: [0.05, 0.24], highlightedGrapheme: 'u' }
    ],
    articulationSteps: [
      'Bước 1 (Thả lỏng lưỡi sau): Đặt thân lưỡi sau ở độ cao gần đóng, hơi hướng về trung tâm.',
      'Bước 2 (Tròn môi nhẹ): Chu nhẹ hai môi nhưng không gồng căng như /uː/.',
      'Bước 3 (Phát âm ngắn gọn): Đọc nhanh dứt khoát.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Kéo dài thành /uː/ hoặc đọc giống "u" căng tiếng Việt',
        mistakeDescription: 'Đọc quá căng và dài làm mất sự phân biệt cặp ngắn-dài (như "Muss" vs "Mus").',
        correctionTip: 'Thả lỏng cơ môi và đọc thật ngắn, hơi ngả nhẹ về giữa "u" và "ô".'
      }
    ],
    organRoles: {
      lips: 'Chu tròn vừa và thả lỏng.',
      'tongue-tip': 'Rút nhẹ khỏi răng dưới.',
      'tongue-blade': 'Nằm tương đối thấp.',
      'tongue-dorsum': 'Phần sau lưỡi nâng thấp hơn /uː/ và hơi tiến về giữa.',
      'tongue-root': 'Thả lỏng vừa phải.',
      'soft-palate': 'Đóng kín đường mũi.',
      'hard-palate': 'Khoảng không trước rộng.',
      'vocal-cords': 'Dây thanh rung ngắn (~152 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.u_short, POSTURE_PRESETS.u_long),
    acousticProfile: { f0: 152, formants: [390, 950, 2250], noiseGain: 0.01, noiseFilterFreq: 1100 }
  },
  {
    id: 'o_long',
    symbol: '/oː/',
    graphemes: 'o, oo, oh',
    category: 'vowel',
    subGroup: 'vowel_back_rounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm tròn môi sau nửa đóng (dài, căng)',
    ipaTechnicalName: 'Langer halbgeschlossener gerundeter Hinterzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/ɔ/',
    comparisonNote:
      'Âm /oː/ dài khép hàm hơn, lưỡi nâng cao hơn và hai môi chu tròn rõ rệt hơn so với âm /ɔ/ ngắn mở.',
    phonemeAudioPath: 'assets/audio/phonemes/o_long.ogg',
    exampleWords: [
      { word: 'rot', ipa: '[ʁoːt]', meaning: 'màu đỏ', audioPath: 'assets/audio/words/rot.ogg', timeRange: [0.16, 0.54], highlightedGrapheme: 'o' },
      { word: 'Sohn', ipa: '[zoːn]', meaning: 'con trai', audioPath: 'assets/audio/words/sohn.ogg', timeRange: [0.16, 0.54], highlightedGrapheme: 'oh' },
      { word: 'Boot', ipa: '[boːt]', meaning: 'con thuyền', audioPath: 'assets/audio/words/boot.ogg', timeRange: [0.14, 0.52], highlightedGrapheme: 'oo' }
    ],
    articulationSteps: [
      'Bước 1 (Chu tròn môi hình chữ O nhỏ): Đưa môi ra trước thành vòng tròn gọn, khép hàm.',
      'Bước 2 (Nâng lưỡi sau mức nửa đóng): Rút lưỡi về sau và nâng ở độ cao trung bình-cao.',
      'Bước 3 (Giữ âm thuần không lướt): Ngân dài như chữ "ô" tiếng Việt nhưng tròn môi rõ hơn, không lướt thành "âu/ôu".'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Trượt thành /oʊ/ như tiếng Anh ("Boot" thành "Bâu-t")',
        mistakeDescription: 'Do ảnh hưởng tiếng Anh, người học hay thu nhỏ môi ở cuối âm thành "âu".',
        correctionTip: 'Giữ nguyên khẩu hình môi tròn cố định từ đầu đến cuối khi kéo dài âm /oː/.'
      }
    ],
    organRoles: {
      lips: 'Chu tròn đều và nhô nhẹ về trước.',
      'tongue-tip': 'Rút nhẹ khỏi răng dưới.',
      'tongue-blade': 'Hạ thấp ở phía trước.',
      'tongue-dorsum': 'Phần sau lưỡi nâng ở mức nửa đóng hướng về ngạc mềm.',
      'tongue-root': 'Hơi lùi về phía thành họng.',
      'soft-palate': 'Đóng đường mũi.',
      'hard-palate': 'Khoảng trống khoang miệng trước rộng.',
      'vocal-cords': 'Dây thanh rung đều (~148 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.o_long, POSTURE_PRESETS.o_short),
    acousticProfile: { f0: 148, formants: [360, 780, 2300], noiseGain: 0.01, noiseFilterFreq: 1000 }
  },
  {
    id: 'o_short',
    symbol: '/ɔ/',
    graphemes: 'o',
    category: 'vowel',
    subGroup: 'vowel_back_rounded',
    manner: 'vowel',
    subCategory: 'Nguyên âm tròn môi sau nửa mở (ngắn)',
    ipaTechnicalName: 'Kurzer halboffener gerundeter Hinterzungenvokal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/oː/',
    comparisonNote:
      'Âm /ɔ/ ngắn mở hàm rộng hơn và hạ lưỡi thấp hơn /oː/, nghe gần giống chữ "o" ngắn trong tiếng Việt.',
    phonemeAudioPath: 'assets/audio/phonemes/o_short.ogg',
    exampleWords: [
      { word: 'Gott', ipa: '[ɡɔt]', meaning: 'Chúa, Thượng đế', audioPath: 'assets/audio/words/gott.ogg', timeRange: [0.14, 0.34], highlightedGrapheme: 'o' },
      { word: 'Kopf', ipa: '[kɔp͡f]', meaning: 'cái đầu', audioPath: 'assets/audio/words/kopf.ogg', timeRange: [0.14, 0.32], highlightedGrapheme: 'o' },
      { word: 'offen', ipa: '[ˈɔfn̩]', meaning: 'mở, cởi mở', audioPath: 'assets/audio/words/offen.ogg', timeRange: [0.05, 0.26], highlightedGrapheme: 'o' }
    ],
    articulationSteps: [
      'Bước 1 (Mở hàm nửa mở): Hạ hàm dưới rộng hơn /oː/, môi tròn mở lớn.',
      'Bước 2 (Hạ thân lưỡi sau): Đặt thân lưỡi sau ở độ cao nửa mở.',
      'Bước 3 (Phát âm ngắn): Đọc dứt khoát giống chữ "o" ngắn.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Nhầm lẫn độ dài giữa /ɔ/ và /oː/ ("offen" vs "Ofen")',
        mistakeDescription: 'Không mở rộng hàm khi đọc /ɔ/ làm âm bị khép giống "ô".',
        correctionTip: 'Hạ cằm rõ ràng và phát âm thật ngắn.'
      }
    ],
    organRoles: {
      lips: 'Tròn mở rộng hơn /oː/.',
      'tongue-tip': 'Nằm thấp và hơi lùi.',
      'tongue-blade': 'Hạ thấp.',
      'tongue-dorsum': 'Phần sau lưỡi hạ thấp mức nửa mở.',
      'tongue-root': 'Hơi lùi về sau.',
      'soft-palate': 'Đóng đường mũi.',
      'hard-palate': 'Khoang miệng mở thoáng.',
      'vocal-cords': 'Dây thanh rung ngắn (~150 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.o_short, POSTURE_PRESETS.o_long),
    acousticProfile: { f0: 150, formants: [540, 920, 2350], noiseGain: 0.01, noiseFilterFreq: 1100 }
  },

  // ==========================================================================
  // 5. DIPHTHONGS (3): /aɪ̯/, /aʊ̯/, /ɔʏ̯/
  // ==========================================================================
  {
    id: 'ai_diphthong',
    symbol: '/aɪ̯/',
    graphemes: 'ei, ai, ey, ay',
    category: 'diphthong',
    subGroup: 'diphthong_falling',
    manner: 'diphthong',
    subCategory: 'Nguyên âm đôi mở chuyển sang trước nửa đóng',
    ipaTechnicalName: 'Fallender Diphthong [aɪ̯]',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/eː/',
    comparisonNote:
      'Âm /aɪ̯/ bắt đầu với thân lưỡi hạ thấp và hàm mở rộng (/a/), sau đó nâng nhanh thân lưỡi trước lên gần vị trí của /ɪ/.',
    phonemeAudioPath: 'assets/audio/phonemes/ai_diphthong.ogg',
    exampleWords: [
      { word: 'eins', ipa: '[aɪ̯ns]', meaning: 'số một (1)', audioPath: 'assets/audio/words/eins.ogg', timeRange: [0.05, 0.44], highlightedGrapheme: 'ei' },
      { word: 'mein', ipa: '[maɪ̯n]', meaning: 'của tôi', audioPath: 'assets/audio/words/mein.ogg', timeRange: [0.14, 0.5], highlightedGrapheme: 'ei' },
      { word: 'Zeit', ipa: '[t͡saɪ̯t]', meaning: 'thời gian', audioPath: 'assets/audio/words/zeit.ogg', timeRange: [0.16, 0.52], highlightedGrapheme: 'ei' }
    ],
    articulationSteps: [
      'Bước 1 (Mở rộng hàm ở âm /a/): Hạ thấp hàm dưới và thân lưỡi để khoang miệng mở rộng tối đa.',
      'Bước 2 (Nâng nhanh mặt lưỡi trước lên /ɪ/): Đẩy phần trước lưỡi hướng lên ngạc cứng trong khi khép dần hàm dưới.',
      'Bước 3 (Kết thúc mượt): Dây thanh rung đều từ đầu đến cuối âm đôi.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Đọc mặt chữ "ei" thành "ây" hoặc "ê-i"',
        mistakeDescription: 'Nhìn chữ viết "ei" người Việt dễ đọc thành "mây-n" thay vì "mai-n".',
        correctionTip: 'Trong tiếng Đức: "ei" = /aɪ̯/ (đọc như "ai"), còn "ie" = /iː/ (đọc như "i" dài).'
      }
    ],
    organRoles: {
      lips: 'Môi mở rộng tự nhiên ở đầu âm (/a/) và hơi thu hẹp dọc khi lướt lên /ɪ/.',
      'tongue-tip': 'Đầu lưỡi giữ phía sau răng cửa hàm dưới.',
      'tongue-blade': 'Phần trước lưỡi nâng cao mạnh mẽ ở nửa sau của âm đôi.',
      'tongue-dorsum': 'Thân lưỡi hạ thấp lúc đầu rồi nâng lên hướng về ngạc cứng.',
      'tongue-root': 'Gốc lưỡi dịch chuyển từ trung tâm tiến ra phía trước.',
      'soft-palate': 'Ngạc mềm nâng cao đóng kín đường thông lên mũi.',
      'hard-palate': 'Định hướng điểm đến cho mặt lưỡi trước ở cuối âm đôi.',
      'vocal-cords': 'Dây thanh rung liên tục (~162 Hz).'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.a_short,
      POSTURE_PRESETS.e_long,
      POSTURE_PRESETS.i_short
    ),
    acousticProfile: { f0: 162, formants: [720, 1350, 2300], noiseGain: 0.02, noiseFilterFreq: 1800 }
  },
  {
    id: 'au_diphthong',
    symbol: '/aʊ̯/',
    graphemes: 'au',
    category: 'diphthong',
    subGroup: 'diphthong_falling',
    manner: 'diphthong',
    subCategory: 'Nguyên âm đôi mở chuyển sang sau tròn môi',
    ipaTechnicalName: 'Fallender Diphthong [aʊ̯]',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/aː/',
    comparisonNote:
      'Âm /aʊ̯/ bắt đầu từ /a/ mở hàm rộng giống /aː/, sau đó kéo lưỡi lùi về sau và chu tròn hai môi lên vị trí /ʊ/ (tương tự "ao/au" tiếng Việt nhưng môi tròn rõ hơn).',
    phonemeAudioPath: 'assets/audio/phonemes/au_diphthong.ogg',
    exampleWords: [
      { word: 'Haus', ipa: '[haʊ̯s]', meaning: 'ngôi nhà', audioPath: 'assets/audio/words/haus.ogg', timeRange: [0.14, 0.5], highlightedGrapheme: 'au' },
      { word: 'Auto', ipa: '[ˈaʊ̯to]', meaning: 'xe ô tô', audioPath: 'assets/audio/words/auto.ogg', timeRange: [0.05, 0.36], highlightedGrapheme: 'Au' },
      { word: 'Frau', ipa: '[fʁaʊ̯]', meaning: 'phụ nữ, bà/cô', audioPath: 'assets/audio/words/frau.ogg', timeRange: [0.18, 0.56], highlightedGrapheme: 'au' }
    ],
    articulationSteps: [
      'Bước 1 (Mở rộng hàm ở vị trí /a/): Hạ hàm và trải thấp lưỡi để phát âm phần đầu "a" rõ ràng.',
      'Bước 2 (Kéo lưỡi lùi sau & chu tròn môi lên /ʊ/): Nhanh chóng rút lưng lưỡi về phía ngạc mềm đồng thời thu tròn hai môi lại.',
      'Bước 3 (Kết thúc mềm): Khép dần hàm và giữ dây thanh rung liên tục.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "âu" (/əʊ/) hoặc kết thúc không tròn môi',
        mistakeDescription: 'Đọc thiếu độ mở "a" ở đầu làm "Haus" nghe thành "Hâu-s", hoặc mở dẹt môi ở cuối.',
        correctionTip: 'Mở miệng thật to ở chữ "a" đầu tiên rồi nhanh chóng chu môi thành chữ "u" nhỏ.'
      }
    ],
    organRoles: {
      lips: 'Mở rộng ở pha đầu /a/ rồi nhanh chóng chu tròn ở pha kết thúc /ʊ/.',
      'tongue-tip': 'Hơi rút nhẹ về sau khi chuyển sang /ʊ/.',
      'tongue-blade': 'Hạ thấp trong suốt quá trình trượt.',
      'tongue-dorsum': 'Chuyển từ vị trí thấp trung tâm sang nâng cao ở ngạc mềm sau.',
      'tongue-root': 'Lùi nhẹ về phía thành họng ở cuối âm.',
      'soft-palate': 'Ngạc mềm nâng đóng kín đường mũi.',
      'hard-palate': 'Mở rộng khoảng trống phía trước.',
      'vocal-cords': 'Dây thanh rung liên tục (~156 Hz).'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.a_short,
      POSTURE_PRESETS.a_long,
      POSTURE_PRESETS.u_short
    ),
    acousticProfile: { f0: 156, formants: [720, 1280, 2300], noiseGain: 0.01, noiseFilterFreq: 1400 }
  },
  {
    id: 'oy_diphthong',
    symbol: '/ɔʏ̯/',
    graphemes: 'eu, äu',
    category: 'diphthong',
    subGroup: 'diphthong_falling',
    manner: 'diphthong',
    subCategory: 'Nguyên âm đôi chuyển từ sau tròn môi sang trước',
    ipaTechnicalName: 'Fallender Diphthong [ɔʏ̯]',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/yː/',
    comparisonNote:
      'Âm đôi /ɔʏ̯/ xuất phát từ vị trí lưỡi sau-thấp /ɔ/ rồi trượt nhanh lên vị trí lưỡi trước-cao gần /yː/ trong khi môi vẫn giữ tròn.',
    phonemeAudioPath: 'assets/audio/phonemes/oy_diphthong.ogg',
    exampleWords: [
      { word: 'Deutsch', ipa: '[dɔʏ̯t͡ʃ]', meaning: 'tiếng Đức, người Đức', audioPath: 'assets/audio/words/deutsch.ogg', timeRange: [0.12, 0.48], highlightedGrapheme: 'eu' },
      { word: 'heute', ipa: '[ˈhɔʏ̯tə]', meaning: 'hôm nay', audioPath: 'assets/audio/words/heute.ogg', timeRange: [0.14, 0.5], highlightedGrapheme: 'eu' },
      { word: 'Bäume', ipa: '[ˈbɔʏ̯mə]', meaning: 'những cái cây', audioPath: 'assets/audio/words/baeume.ogg', timeRange: [0.14, 0.52], highlightedGrapheme: 'äu' }
    ],
    articulationSteps: [
      'Bước 1 (Khởi đầu ở âm /ɔ/): Mở hàm vừa phải, môi tròn và thân lưỡi hơi lùi về sau.',
      'Bước 2 (Trượt lưỡi về phía trước lên /ʏ/): Nâng nhanh mặt lưỡi trước hướng về ngạc cứng trong khi giữ hai môi hơi chúm tròn.',
      'Bước 3 (Giữ dây thanh rung): Kết thúc gọn ở khẩu hình môi chúm nhẹ, không bè ngang khóe miệng.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "oi" tiếng Việt (đọc "Deutsch" thành "Đoi-ch")',
        mistakeDescription: 'Người Việt hay kéo dẹt môi ở cuối âm thành "i", làm mất sắc thái tròn môi của âm đích /ʏ/.',
        correctionTip: 'Giữ hai môi hơi chúm tròn từ đầu đến tận cuối âm /ɔʏ̯/.'
      }
    ],
    organRoles: {
      lips: 'Hai môi giữ trạng thái tròn xuyên suốt quá trình chuyển từ /ɔ/ sang /ʏ/.',
      'tongue-tip': 'Đầu lưỡi di chuyển từ sàn miệng tiến nhẹ về phía sau răng cửa dưới.',
      'tongue-blade': 'Phần trước lưỡi nâng nhanh lên cao ở nửa sau của âm đôi.',
      'tongue-dorsum': 'Thân lưỡi trượt từ vùng sau-giữa tiến về vùng trước-cao.',
      'tongue-root': 'Gốc lưỡi dịch chuyển từ sau ra trước, mở rộng dần khoang hầu.',
      'soft-palate': 'Ngạc mềm nâng cao đóng kín đường mũi.',
      'hard-palate': 'Đón nhận phần trước lưỡi nâng lên ở pha kết thúc /ʏ/.',
      'vocal-cords': 'Dây thanh rung liên tục suốt hành trình trượt của lưỡi.'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.o_short,
      POSTURE_PRESETS.y_long,
      POSTURE_PRESETS.y_short
    ),
    acousticProfile: { f0: 158, formants: [520, 1100, 2150], noiseGain: 0.02, noiseFilterFreq: 1600 }
  }
];
