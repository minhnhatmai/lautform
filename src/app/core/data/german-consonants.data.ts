import { GermanPhoneme } from '../models/phoneme.model';
import { buildKeyframes, POSTURE_PRESETS } from './svg-posture-builder';

export const GERMAN_CONSONANTS_DATA: GermanPhoneme[] = [
  // ==========================================================================
  // 1. PLOSIVES (7): /p/, /b/, /t/, /d/, /k/, /ɡ/, /ʔ/
  // ==========================================================================
  {
    id: 'p_voiceless',
    symbol: '/p/',
    graphemes: 'p, pp, b (cuối âm tiết)',
    category: 'consonant',
    subGroup: 'consonant_plosive',
    manner: 'plosive',
    subCategory: 'Âm tắc hai môi vô thanh (bật hơi [pʰ])',
    ipaTechnicalName: 'Stimmloser bilabialer Plosiv',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/b/',
    comparisonNote:
      'Âm /p/ có vị trí mím hai môi giống hệt /b/, nhưng dây thanh mở rộng vô thanh và khi mở môi tạo luồng bật hơi mạnh [pʰ] làm tờ giấy bay rõ.',
    phonemeAudioPath: 'assets/audio/phonemes/p_voiceless.ogg',
    exampleWords: [
      { word: 'Pass', ipa: '[pʰas]', meaning: 'hộ chiếu', audioPath: 'assets/audio/words/pass.ogg', timeRange: [0.05, 0.28], highlightedGrapheme: 'P' },
      { word: 'Papa', ipa: '[ˈpʰaːpa]', meaning: 'bố, ba', audioPath: 'assets/audio/words/papa.ogg', timeRange: [0.05, 0.24], highlightedGrapheme: 'P' },
      { word: 'Suppe', ipa: '[ˈzʊpə]', meaning: 'món súp', audioPath: 'assets/audio/words/suppe.ogg', timeRange: [0.24, 0.44], highlightedGrapheme: 'pp' }
    ],
    articulationSteps: [
      'Bước 1 (Mím chặt hai môi): Ép kín hai môi vào nhau, đồng thời nâng ngạc mềm đóng đường mũi để nén áp suất hơi trong miệng.',
      'Bước 2 (Giữ thanh môn mở): Dây thanh quản hoàn toàn không rung (vô thanh).',
      'Bước 3 (Bật mở môi dứt khoát): Mở đột ngột hai môi giải phóng luồng hơi bật mạnh ra ngoài (bật "Thử bằng giấy" để thấy giấy lệch ~44°).'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "p" không bật hơi hoặc "b" tiếng Việt',
        mistakeDescription: 'Người Việt thường bật hơi rất nhẹ ở đầu từ khiến người Đức nghe nhầm "Pass" thành "Bass".',
        correctionTip: 'Đặt một tờ giấy mỏng cách miệng 5cm: khi đọc /p/ tiếng Đức đầu từ, luồng hơi bật ra phải thổi bay tờ giấy rõ rệt!'
      }
    ],
    organRoles: {
      lips: 'Ép chặt nhau ở pha đóng tắc (30%–50%) rồi bật mở đột ngột giải phóng luồng khí nén.',
      'tongue-tip': 'Nằm thư giãn phía sau răng dưới.',
      'tongue-blade': 'Nằm ở vị trí trung bình.',
      'tongue-dorsum': 'Thư giãn chuẩn bị cho nguyên âm tiếp theo.',
      'tongue-root': 'Ở trạng thái trung tính.',
      'soft-palate': 'Nâng cao đóng kín khoang mũi để giữ áp suất khí.',
      'hard-palate': 'Không tiếp xúc với lưỡi.',
      'vocal-cords': 'Mở rộng hình chữ V (vô thanh), cho phép lượng lớn khí bật qua.'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.p_stop,
      POSTURE_PRESETS.b_stop,
      POSTURE_PRESETS.p_release
    ),
    acousticProfile: { f0: 0, formants: [400, 1100, 2200], noiseGain: 0.55, noiseFilterFreq: 1200 }
  },
  {
    id: 'b_voiced',
    symbol: '/b/',
    graphemes: 'b, bb',
    category: 'consonant',
    subGroup: 'consonant_plosive',
    manner: 'plosive',
    subCategory: 'Âm tắc hai môi hữu thanh',
    ipaTechnicalName: 'Stimmhafter bilabialer Plosiv',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/p/',
    comparisonNote:
      'Âm /b/ mím hai môi giống /p/, nhưng dây thanh khép rung ngay trong lúc môi còn đóng và khi mở ra KHÔNG có luồng bật hơi mạnh.',
    phonemeAudioPath: 'assets/audio/phonemes/b_voiced.ogg',
    exampleWords: [
      { word: 'Buch', ipa: '[buːx]', meaning: 'quyển sách', audioPath: 'assets/audio/words/buch.ogg', timeRange: [0.05, 0.24], highlightedGrapheme: 'B' },
      { word: 'Brot', ipa: '[bʁoːt]', meaning: 'bánh mì', audioPath: 'assets/audio/words/brot.ogg', timeRange: [0.05, 0.22], highlightedGrapheme: 'B' },
      { word: 'abends', ipa: '[ˈaːbn̩t͡s]', meaning: 'vào buổi tối', audioPath: 'assets/audio/words/abends.ogg', timeRange: [0.24, 0.42], highlightedGrapheme: 'b' }
    ],
    articulationSteps: [
      'Bước 1 (Khép nhẹ hai môi): Chạm kín môi trên và môi dưới, đóng ngạc mềm.',
      'Bước 2 (Kích hoạt rung dây thanh): Làm rung nhẹ dây thanh quản ngay trước khi mở môi.',
      'Bước 3 (Mở môi tự nhiên không bật hơi): Thả môi mở ra nhẹ nhàng sang nguyên âm tiếp theo.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Quên quy tắc vô thanh hóa cuối âm tiết (Auslautverhärtung)',
        mistakeDescription: 'Chữ "b" ở cuối từ hoặc cuối âm tiết (như "ab", "gelb") trong tiếng Đức đọc thành /p/ vô thanh, không đọc là /b/.',
        correctionTip: 'Chỉ dùng /b/ hữu thanh ở đầu âm tiết trước nguyên âm/phụ âm vang; ở cuối từ "b" luôn đọc thành /p/.'
      }
    ],
    organRoles: {
      lips: 'Khép kín nhẹ nhàng rồi mở ra êm ái, không bật hơi mạnh.',
      'tongue-tip': 'Nằm yên phía sau răng dưới.',
      'tongue-blade': 'Thư giãn.',
      'tongue-dorsum': 'Ở vị trí trung tính.',
      'tongue-root': 'Thả lỏng.',
      'soft-palate': 'Nâng cao đóng kín khoang mũi.',
      'hard-palate': 'Không tiếp xúc.',
      'vocal-cords': 'Khép sát và rung (~140 Hz) trong suốt pha đóng và mở.'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.b_stop,
      POSTURE_PRESETS.p_stop,
      POSTURE_PRESETS.b_release
    ),
    acousticProfile: { f0: 140, formants: [320, 1050, 2100], noiseGain: 0.08, noiseFilterFreq: 900 }
  },
  {
    id: 't_voiceless',
    symbol: '/t/',
    graphemes: 't, tt, th, dt, d (cuối âm tiết)',
    category: 'consonant',
    subGroup: 'consonant_plosive',
    manner: 'plosive',
    subCategory: 'Âm tắc ổ răng vô thanh (bật hơi [tʰ])',
    ipaTechnicalName: 'Stimmloser alveolarer Plosiv',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/d/',
    comparisonNote:
      'Âm /t/ đặt đầu lưỡi chạm gờ ổ răng trên (alveolar) như /d/, nhưng dây thanh mở vô thanh và bật hơi mạnh [tʰ] ở đầu từ có trọng âm.',
    phonemeAudioPath: 'assets/audio/phonemes/t_voiceless.ogg',
    exampleWords: [
      { word: 'Tag', ipa: '[tʰaːk]', meaning: 'ngày, ban ngày', audioPath: 'assets/audio/words/tag.ogg', timeRange: [0.05, 0.26], highlightedGrapheme: 'T' },
      { word: 'Tisch', ipa: '[tʰɪʃ]', meaning: 'cái bàn', audioPath: 'assets/audio/words/tisch.ogg', timeRange: [0.05, 0.26], highlightedGrapheme: 'T' },
      { word: 'Mutter', ipa: '[ˈmʊtɐ]', meaning: 'người mẹ', audioPath: 'assets/audio/words/mutter.ogg', timeRange: [0.24, 0.42], highlightedGrapheme: 'tt' }
    ],
    articulationSteps: [
      'Bước 1 (Chặn kín tại gờ ổ răng trên): Đặt đầu lưỡi ép chặt lên phần lợi cứng ngay sau răng cửa trên (cao hơn chân răng một chút).',
      'Bước 2 (Giữ thanh quản mở): Không rung dây thanh, nén luồng hơi phía sau đầu lưỡi.',
      'Bước 3 (Bật đầu lưỡi xuống mạnh): Hạ nhanh đầu lưỡi để bật luồng hơi mạnh ra ngoài (làm giấy bay ~40°).'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "t" không bật hơi của tiếng Việt ("tôi")',
        mistakeDescription: 'Âm "t" tiếng Việt đặt đầu lưỡi sát mặt răng trên và không bật hơi, làm người Đức dễ nghe nhầm thành /d/.',
        correctionTip: 'Rút đầu lưỡi lùi lên gờ lợi phía trên răng một chút và bật luồng gió mạnh như chữ "th" + "t" gọn.'
      }
    ],
    organRoles: {
      lips: 'Mở tự nhiên, không tham gia cản khí.',
      'tongue-tip': 'Ép chặt lên gờ lợi trên (ổ răng) chặn kín khí rồi bật hạ xuống nhanh.',
      'tongue-blade': 'Nâng đỡ đầu lưỡi áp lên vùng sau răng.',
      'tongue-dorsum': 'Nâng nhẹ theo chuyển động đầu lưỡi.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Nâng cao đóng kín đường mũi.',
      'hard-palate': 'Phần ổ răng phía trước làm điểm chặn khí trực tiếp.',
      'vocal-cords': 'Mở rộng vô thanh tạo áp lực hơi bật mạnh.'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.t_stop,
      POSTURE_PRESETS.d_stop,
      POSTURE_PRESETS.t_release
    ),
    acousticProfile: { f0: 0, formants: [420, 1750, 2900], noiseGain: 0.62, noiseFilterFreq: 3200 }
  },
  {
    id: 'd_voiced',
    symbol: '/d/',
    graphemes: 'd, dd',
    category: 'consonant',
    subGroup: 'consonant_plosive',
    manner: 'plosive',
    subCategory: 'Âm tắc ổ răng hữu thanh',
    ipaTechnicalName: 'Stimmhafter alveolarer Plosiv',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/t/',
    comparisonNote:
      'Âm /d/ đặt đầu lưỡi ở đúng gờ ổ răng giống /t/, nhưng dây thanh rung êm (hữu thanh) và mở ra không bật hơi mạnh.',
    phonemeAudioPath: 'assets/audio/phonemes/d_voiced.ogg',
    exampleWords: [
      { word: 'Deutsch', ipa: '[dɔʏ̯t͡ʃ]', meaning: 'tiếng Đức', audioPath: 'assets/audio/words/deutsch.ogg', timeRange: [0.04, 0.22], highlightedGrapheme: 'D' },
      { word: 'danke', ipa: '[ˈdaŋkə]', meaning: 'cảm ơn', audioPath: 'assets/audio/words/danke.ogg', timeRange: [0.04, 0.22], highlightedGrapheme: 'd' },
      { word: 'Bruder', ipa: '[ˈbʁuːdɐ]', meaning: 'anh / em trai', audioPath: 'assets/audio/words/bruder.ogg', timeRange: [0.3, 0.48], highlightedGrapheme: 'd' }
    ],
    articulationSteps: [
      'Bước 1 (Chạm nhẹ đầu lưỡi vào gờ ổ răng): Đặt đầu lưỡi chạm lên gờ lợi sau răng cửa trên.',
      'Bước 2 (Rung dây thanh): Kích hoạt rung dây thanh quản êm dịu.',
      'Bước 3 (Hạ lưỡi nhẹ nhàng): Thả đầu lưỡi xuống không bật hơi mạnh.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "đ" bật hút vào của tiếng Việt hoặc đọc /d/ ở cuối từ',
        mistakeDescription: 'Ở cuối từ như "Hund", "Kind", "und", chữ "d" tiếng Đức PHẢI đọc là /t/ vô thanh, không đọc là /d/.',
        correctionTip: 'Nhớ đặt đầu lưỡi nhẹ lên gờ lợi trên (không hít hơi vào như chữ "đ") và biến thành /t/ khi đứng cuối từ.'
      }
    ],
    organRoles: {
      lips: 'Mở tự nhiên.',
      'tongue-tip': 'Chạm kín gờ ổ răng trên rồi hạ xuống nhẹ nhàng.',
      'tongue-blade': 'Nâng theo đầu lưỡi.',
      'tongue-dorsum': 'Ở mức trung bình.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Đóng đường mũi.',
      'hard-palate': 'Vùng ổ răng làm điểm chặn âm.',
      'vocal-cords': 'Khép rung đều (~145 Hz).'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.d_stop,
      POSTURE_PRESETS.t_stop,
      POSTURE_PRESETS.d_release
    ),
    acousticProfile: { f0: 145, formants: [340, 1650, 2600], noiseGain: 0.08, noiseFilterFreq: 2200 }
  },
  {
    id: 'k_voiceless',
    symbol: '/k/',
    graphemes: 'k, ck, g (cuối âm tiết), ch (trước s)',
    category: 'consonant',
    subGroup: 'consonant_plosive',
    manner: 'plosive',
    subCategory: 'Âm tắc ngạc mềm vô thanh (bật hơi [kʰ])',
    ipaTechnicalName: 'Stimmloser velarer Plosiv',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/ɡ/',
    comparisonNote:
      'Âm /k/ nâng phần sau lưỡi chạm kín ngạc mềm giống /ɡ/, nhưng thanh quản mở vô thanh và bật hơi mạnh [kʰ] khi buông lưỡi.',
    phonemeAudioPath: 'assets/audio/phonemes/k_voiceless.ogg',
    exampleWords: [
      { word: 'Kind', ipa: '[kʰɪnt]', meaning: 'đứa trẻ', audioPath: 'assets/audio/words/kind.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'K' },
      { word: 'Kaffee', ipa: '[ˈkʰafe]', meaning: 'cà phê', audioPath: 'assets/audio/words/kaffee.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'K' },
      { word: 'Musik', ipa: '[muˈziːk]', meaning: 'âm nhạc', audioPath: 'assets/audio/words/musik.ogg', timeRange: [0.42, 0.62], highlightedGrapheme: 'k' }
    ],
    articulationSteps: [
      'Bước 1 (Hạ đầu lưỡi): Để đầu lưỡi nằm thấp sau răng dưới.',
      'Bước 2 (Ép lưng lưỡi sau chạm kín ngạc mềm): Nâng phần sau lưỡi bịt kín vào vòm ngạc mềm.',
      'Bước 3 (Bật hơi mạnh vô thanh): Mở rộng thanh môn và hạ nhanh lưng lưỡi để bật luồng hơi [kʰ] mạnh ra ngoài.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "c/k" không bật hơi tiếng Việt ("cá")',
        mistakeDescription: 'Âm "c/k" tiếng Việt không có luồng hơi bật mạnh sau khi nhả lưỡi, dễ bị người Đức nghe nhầm thành /ɡ/.',
        correctionTip: 'Chú ý bật kèm một luồng hơi gió nhẹ như /kʰ/ ở đầu các từ như "Kind", "Kaffee", "kommen".'
      }
    ],
    organRoles: {
      lips: 'Mở tự nhiên.',
      'tongue-tip': 'Nằm thấp dưới sàn miệng.',
      'tongue-blade': 'Hạ thấp ở phía trước.',
      'tongue-dorsum': 'Phần sau lưỡi ép chặt lên ngạc mềm chặn kín khí rồi hạ bật xuống nhanh.',
      'tongue-root': 'Hơi lùi nâng đỡ cuống lưỡi.',
      'soft-palate': 'Đóng kín đường mũi và tiếp xúc trực tiếp với lưng lưỡi sau.',
      'hard-palate': 'Không tiếp xúc.',
      'vocal-cords': 'Mở rộng vô thanh tạo luồng khí bật mạnh.'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.k_stop,
      POSTURE_PRESETS.g_stop,
      POSTURE_PRESETS.k_release
    ),
    acousticProfile: { f0: 0, formants: [450, 1250, 2350], noiseGain: 0.6, noiseFilterFreq: 1650 }
  },
  {
    id: 'g_voiced',
    symbol: '/ɡ/',
    graphemes: 'g, gg',
    category: 'consonant',
    subGroup: 'consonant_plosive',
    manner: 'plosive',
    subCategory: 'Âm tắc ngạc mềm hữu thanh',
    ipaTechnicalName: 'Stimmhafter velarer Plosiv',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/k/',
    comparisonNote:
      'Âm /ɡ/ chặn kín tại ngạc mềm giống /k/, nhưng dây thanh quản rung hữu thanh và nhả hơi êm, không bật hơi mạnh.',
    phonemeAudioPath: 'assets/audio/phonemes/g_voiced.ogg',
    exampleWords: [
      { word: 'gut', ipa: '[ɡuːt]', meaning: 'tốt, giỏi', audioPath: 'assets/audio/words/gut.ogg', timeRange: [0.04, 0.22], highlightedGrapheme: 'g' },
      { word: 'gehen', ipa: '[ˈɡeːən]', meaning: 'đi', audioPath: 'assets/audio/words/gehen.ogg', timeRange: [0.04, 0.22], highlightedGrapheme: 'g' },
      { word: 'Auge', ipa: '[ˈaʊ̯ɡə]', meaning: 'đôi mắt', audioPath: 'assets/audio/words/auge.ogg', timeRange: [0.24, 0.42], highlightedGrapheme: 'g' }
    ],
    articulationSteps: [
      'Bước 1 (Chạm nhẹ lưng lưỡi sau lên ngạc mềm): Nâng phần sau lưỡi chạm kín vòm ngạc mềm.',
      'Bước 2 (Rung dây thanh): Làm rung thanh quản nhẹ trong cổ họng.',
      'Bước 3 (Buông lưỡi êm ái): Hạ lưng lưỡi sang nguyên âm kế tiếp mà không bật hơi.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "g" xát (/ɣ/) của tiếng Việt ("gà") hoặc đọc /ɡ/ ở cuối từ',
        mistakeDescription: 'Người Việt hay để khe hở tạo tiếng xát nhẹ như "gà" (thay vì chạm kín rồi bật), hoặc đọc "Tag" thành [taːɡ] thay vì [taːk].',
        correctionTip: 'Nhấn chạm kín phần sau lưỡi lên ngạc mềm trước khi thả ra; nhớ đọc "-g" cuối từ thành /k/ (trừ đuôi "-ig" đọc là /ɪç/).'
      }
    ],
    organRoles: {
      lips: 'Mở tự nhiên.',
      'tongue-tip': 'Nằm thấp dưới sàn miệng.',
      'tongue-blade': 'Hạ thấp.',
      'tongue-dorsum': 'Phần sau lưỡi chạm kín ngạc mềm rồi hạ êm.',
      'tongue-root': 'Hơi lùi nhẹ.',
      'soft-palate': 'Đóng đường mũi và đón lưng lưỡi sau.',
      'hard-palate': 'Không tiếp xúc.',
      'vocal-cords': 'Khép rung đều (~140 Hz).'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.g_stop,
      POSTURE_PRESETS.k_stop,
      POSTURE_PRESETS.g_release
    ),
    acousticProfile: { f0: 140, formants: [350, 1200, 2250], noiseGain: 0.08, noiseFilterFreq: 1400 }
  },
  {
    id: 'glottal_stop',
    symbol: '/ʔ/',
    graphemes: '(đứng trước mọi nguyên âm đầu từ/căn tố)',
    category: 'consonant',
    subGroup: 'consonant_plosive',
    manner: 'plosive',
    subCategory: 'Âm tắc thanh môn (Knacklaut — bật ngắt giọng)',
    ipaTechnicalName: 'Stimmloser glottaler Plosiv (Knacklaut)',
    isVoiced: false,
    hasAspiration: false,
    comparedWith: '/h/',
    comparisonNote:
      'Âm /ʔ/ đóng kín hoàn toàn hai dây thanh môn (glottalAperture = 0) rồi bật mở nhẹ trước nguyên âm, ngược với /h/ mở rộng thanh môn hoàn toàn.',
    phonemeAudioPath: 'assets/audio/phonemes/glottal_stop.ogg',
    exampleWords: [
      { word: 'Apfel', ipa: '[ˈʔap͡fl̩]', meaning: 'quả táo', audioPath: 'assets/audio/words/apfel.ogg', timeRange: [0.02, 0.18], highlightedGrapheme: 'A' },
      { word: 'Einheit', ipa: '[ˈʔaɪ̯nhaɪ̯t]', meaning: 'sự thống nhất / đơn vị', audioPath: 'assets/audio/words/einheit.ogg', timeRange: [0.02, 0.18], highlightedGrapheme: 'E' },
      { word: 'beachten', ipa: '[bəˈʔaxtn̩]', meaning: 'chú ý, để ý', audioPath: 'assets/audio/words/beachten.ogg', timeRange: [0.22, 0.36], highlightedGrapheme: 'a' }
    ],
    articulationSteps: [
      'Bước 1 (Khép kín dây thanh trong thanh quản): Nín hơi nhẹ trong 0.05 giây bằng cách đóng sát hai dây thanh môn (tương tự trước khi ho nhẹ).',
      'Bước 2 (Giữ khoang miệng mở sẵn sàng): Môi và lưỡi đã đặt vào tư thế của nguyên âm sắp phát.',
      'Bước 3 (Bật mở thanh môn): Mở dứt khoát dây thanh để nguyên âm vang lên tách bạch, không nối chữ.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Đọc nối âm kiểu tiếng Anh ("be-achten" đọc liền thành "beachten")',
        mistakeDescription: 'Do thói quen nối âm tiếng Anh, người học hay đọc dính phụ âm cuối với nguyên âm đầu của từ hoặc tiền tố tiếp theo.',
        correctionTip: 'Mọi từ hoặc gốc từ tiếng Đức bắt đầu bằng nguyên âm (như "ein Apfel", "Ver-ein") đều phải ngắt hơi nhẹ bằng /ʔ/ trước nguyên âm!'
      }
    ],
    organRoles: {
      lips: 'Đặt sẵn ở tư thế của nguyên âm theo sau.',
      'tongue-tip': 'Đặt sẵn theo nguyên âm theo sau.',
      'tongue-blade': 'Trung tính.',
      'tongue-dorsum': 'Trung tính.',
      'tongue-root': 'Trung tính.',
      'soft-palate': 'Đóng đường mũi.',
      'hard-palate': 'Không tham gia chặn hơi.',
      'vocal-cords': 'Đóng kín hoàn toàn (glottis = 0) rồi bật mở nhẹ giải phóng hơi.'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.glottal_stop,
      POSTURE_PRESETS.h_fricative,
      POSTURE_PRESETS.glottal_release
    ),
    acousticProfile: { f0: 0, formants: [500, 1450, 2400], noiseGain: 0.35, noiseFilterFreq: 1100 }
  },

  // ==========================================================================
  // 2. FRICATIVES (10): /f/, /v/, /s/, /z/, /ʃ/, /ʒ/, /ç/, /x/, /ʁ/, /h/
  // ==========================================================================
  {
    id: 'f_voiceless',
    symbol: '/f/',
    graphemes: 'f, ff, v (Vater), ph',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát môi-răng vô thanh',
    ipaTechnicalName: 'Stimmloser labiodentaler Frikativ',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/v/',
    comparisonNote:
      'Âm /f/ chạm nhẹ mép răng cửa trên lên môi dưới giống /v/, nhưng dây thanh mở vô thanh và luồng hơi thổi xát mạnh hơn.',
    phonemeAudioPath: 'assets/audio/phonemes/f_voiceless.ogg',
    exampleWords: [
      { word: 'Fisch', ipa: '[fɪʃ]', meaning: 'con cá', audioPath: 'assets/audio/words/fisch.ogg', timeRange: [0.05, 0.3], highlightedGrapheme: 'F' },
      { word: 'Vater', ipa: '[ˈfaːtɐ]', meaning: 'người cha', audioPath: 'assets/audio/words/vater.ogg', timeRange: [0.05, 0.28], highlightedGrapheme: 'V' },
      { word: 'schlafen', ipa: '[ˈʃlaːfn̩]', meaning: 'ngủ', audioPath: 'assets/audio/words/schlafen.ogg', timeRange: [0.34, 0.56], highlightedGrapheme: 'f' }
    ],
    articulationSteps: [
      'Bước 1 (Tựa răng trên lên môi dưới): Kéo nhẹ môi dưới vào trong để cạnh răng cửa hàm trên chạm nhẹ lên vành môi dưới.',
      'Bước 2 (Giữ khe hẹp môi-răng): Không cắn chặt mà chừa một khe hẹp nhỏ giữa răng và môi.',
      'Bước 3 (Thổi hơi vô thanh): Đẩy luồng hơi ma sát qua khe răng-môi (dây thanh không rung).'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "ph" hai môi hoặc đọc nhầm chữ "v" tiếng Đức thành /v/',
        mistakeDescription: 'Trong các từ thuần Đức (Vater, vier, Vogel, viel), chữ "v" luôn đọc là /f/ vô thanh, không đọc là /v/.',
        correctionTip: 'Luôn chạm răng trên vào môi dưới và kiểm tra từ điển với chữ "v" (từ thuần Đức = /f/, từ mượn như Vase/Verb = /v/).'
      }
    ],
    organRoles: {
      lips: 'Môi dưới nâng nhẹ và thu vào trong tiếp xúc với cạnh dưới của răng cửa trên.',
      'tongue-tip': 'Nằm thư giãn trong khoang miệng.',
      'tongue-blade': 'Thư giãn.',
      'tongue-dorsum': 'Thư giãn.',
      'tongue-root': 'Trung tính.',
      'soft-palate': 'Nâng đóng đường mũi.',
      'hard-palate': 'Răng cửa trên gắn ở ổ răng trên tạo thành điểm xát với môi dưới.',
      'vocal-cords': 'Mở rộng hình chữ V (vô thanh).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.f_fricative, POSTURE_PRESETS.v_fricative),
    acousticProfile: { f0: 0, formants: [420, 1300, 2400], noiseGain: 0.48, noiseFilterFreq: 4200 }
  },
  {
    id: 'v_voiced',
    symbol: '/v/',
    graphemes: 'w, v (từ mượn: Vase, Klavier)',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát môi-răng hữu thanh',
    ipaTechnicalName: 'Stimmhafter labiodentaler Frikativ',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/f/',
    comparisonNote:
      'Âm /v/ giữ vị trí răng trên chạm môi dưới giống /f/, nhưng BẬT RUNG dây thanh quản liên tục (tương ứng chữ "w" tiếng Đức).',
    phonemeAudioPath: 'assets/audio/phonemes/v_voiced.ogg',
    exampleWords: [
      { word: 'Wasser', ipa: '[ˈvasɐ]', meaning: 'nước', audioPath: 'assets/audio/words/wasser.ogg', timeRange: [0.05, 0.28], highlightedGrapheme: 'W' },
      { word: 'Welt', ipa: '[vɛlt]', meaning: 'thế giới', audioPath: 'assets/audio/words/welt.ogg', timeRange: [0.05, 0.28], highlightedGrapheme: 'W' },
      { word: 'Vase', ipa: '[ˈvaːzə]', meaning: 'lọ hoa', audioPath: 'assets/audio/words/vase.ogg', timeRange: [0.05, 0.28], highlightedGrapheme: 'V' }
    ],
    articulationSteps: [
      'Bước 1 (Đặt răng trên lên môi dưới): Chạm nhẹ cạnh răng cửa trên lên mặt trong môi dưới.',
      'Bước 2 (Bật rung dây thanh): Làm rung thanh quản rõ rệt trong cổ họng.',
      'Bước 3 (Lướt hơi nhẹ qua khe môi-răng): Tạo âm rung ma sát nhẹ nhàng.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm /w/ chu tròn môi của tiếng Anh ("water")',
        mistakeDescription: 'Do ảnh hưởng tiếng Anh, người Việt hay đọc chữ "W" tiếng Đức (như "Wasser", "wo") thành /w/ chu môi không chạm răng.',
        correctionTip: 'Chữ "W" tiếng Đức LUÔN chạm răng trên lên môi dưới như chữ "v" tiếng Việt (không bao giờ chu môi thành /w/!).'
      }
    ],
    organRoles: {
      lips: 'Môi dưới nâng nhẹ chạm răng cửa trên, không chu tròn như /w/ tiếng Anh.',
      'tongue-tip': 'Nằm yên trong khoang miệng.',
      'tongue-blade': 'Thư giãn.',
      'tongue-dorsum': 'Thư giãn.',
      'tongue-root': 'Trung tính.',
      'soft-palate': 'Đóng kín đường mũi.',
      'hard-palate': 'Răng cửa trên tiếp xúc nhẹ với môi dưới.',
      'vocal-cords': 'Khép rung liên tục (~145 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.v_fricative, POSTURE_PRESETS.f_fricative),
    acousticProfile: { f0: 145, formants: [340, 1200, 2200], noiseGain: 0.22, noiseFilterFreq: 3400 }
  },
  {
    id: 's_voiceless',
    symbol: '/s/',
    graphemes: 'ß, ss, s (cuối âm tiết)',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát ổ răng vô thanh',
    ipaTechnicalName: 'Stimmloser alveolarer Frikativ',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/z/',
    comparisonNote:
      'Âm /s/ tạo rãnh hẹp ở ổ răng trên giống hệt /z/, nhưng thanh môn mở vô thanh tạo tiếng xì "x..." sắc nét hơn.',
    phonemeAudioPath: 'assets/audio/phonemes/s_voiceless.ogg',
    exampleWords: [
      { word: 'Straße', ipa: '[ˈʃtʁaːsə]', meaning: 'con đường', audioPath: 'assets/audio/words/strasse.ogg', timeRange: [0.36, 0.56], highlightedGrapheme: 'ß' },
      { word: 'Eis', ipa: '[aɪ̯s]', meaning: 'kem / băng đá', audioPath: 'assets/audio/words/eis.ogg', timeRange: [0.32, 0.56], highlightedGrapheme: 's' },
      { word: 'essen', ipa: '[ˈɛsn̩]', meaning: 'ăn', audioPath: 'assets/audio/words/essen.ogg', timeRange: [0.18, 0.4], highlightedGrapheme: 'ss' }
    ],
    articulationSteps: [
      'Bước 1 (Tạo rãnh nhỏ ở đầu lưỡi): Nâng phiến lưỡi sát gờ lợi trên ngay sau răng cửa trên, giữ một rãnh nhỏ ở chính giữa.',
      'Bước 2 (Áp sát hai răng): Hai hàm răng khép gần nhau.',
      'Bước 3 (Thổi luồng khí sắc vô thanh): Đẩy luồng hơi mạnh qua khe giữa đầu lưỡi và răng cửa trên tạo tiếng xì cao (dây thanh không rung).'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Nhầm lẫn giữa "s" đầu từ (/z/) và "ss/ß" (/s/)',
        mistakeDescription: 'Nhiều người đọc "sehen" thành /s/ vô thanh, hoặc đọc nhẹ mất âm /s/ ở cuối từ như "Eis", "Haus".',
        correctionTip: 'Nhớ quy tắc: "s" đứng đầu âm tiết trước nguyên âm = /z/ (rung); "ss", "ß" và "s" cuối từ = /s/ (xì vô thanh).'
      }
    ],
    organRoles: {
      lips: 'Hơi dẹt tự nhiên để lộ khe răng.',
      'tongue-tip': 'Nâng sát gờ lợi trên tạo rãnh thoát hơi hẹp ở trung tâm.',
      'tongue-blade': 'Hai bên rìa lưỡi áp sát hàm trên dồn hơi vào rãnh giữa.',
      'tongue-dorsum': 'Hơi nâng nhẹ theo phiến lưỡi.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Nâng cao đóng kín khoang mũi.',
      'hard-palate': 'Gờ ổ răng trên làm điểm thắt âm chính tạo tần số xát rất cao (~5500 Hz).',
      'vocal-cords': 'Mở rộng vô thanh.'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.s_fricative, POSTURE_PRESETS.z_fricative),
    acousticProfile: { f0: 0, formants: [450, 1850, 3200], noiseGain: 0.65, noiseFilterFreq: 5600 }
  },
  {
    id: 'z_voiced',
    symbol: '/z/',
    graphemes: 's (đầu từ/âm tiết trước nguyên âm)',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát ổ răng hữu thanh',
    ipaTechnicalName: 'Stimmhafter alveolarer Frikativ',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/s/',
    comparisonNote:
      'Vị trí lưỡi giống hệt /s/, nhưng dây thanh rung liên tục như tiếng ong vo ve — là cách đọc chuẩn của chữ "s" đứng trước nguyên âm (như "Sonne", "reisen").',
    phonemeAudioPath: 'assets/audio/phonemes/z_voiced.ogg',
    exampleWords: [
      { word: 'Sonne', ipa: '[ˈzɔnə]', meaning: 'mặt trời', audioPath: 'assets/audio/words/sonne.ogg', timeRange: [0.05, 0.28], highlightedGrapheme: 'S' },
      { word: 'reisen', ipa: '[ˈʁaɪ̯zn̩]', meaning: 'đi du lịch', audioPath: 'assets/audio/words/reisen.ogg', timeRange: [0.34, 0.54], highlightedGrapheme: 's' },
      { word: 'Musik', ipa: '[muˈziːk]', meaning: 'âm nhạc', audioPath: 'assets/audio/words/musik.ogg', timeRange: [0.22, 0.4], highlightedGrapheme: 's' }
    ],
    articulationSteps: [
      'Bước 1 (Đặt lưỡi như âm /s/): Nâng nhẹ đầu lưỡi sát gờ lợi trên với rãnh hẹp ở giữa.',
      'Bước 2 (Kích hoạt rung dây thanh): Đặt tay lên cổ họng cảm nhận tiếng rung rõ ràng (như tiếng ong "zzz...").',
      'Bước 3 (Kết hợp hơi xát và thanh rung): Để luồng hơi thoát qua khe răng tạo âm /z/ chuẩn.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm /s/ vô thanh ("Sonne" đọc thành "Xon-nờ")',
        mistakeDescription: 'Tiếng Việt không có âm /z/ kiểu xát ổ răng ở miền Nam/Trung, nên người học hay đọc "s" đầu từ thành "x" (/s/).',
        correctionTip: 'Chạm ngón tay lên cổ họng khi đọc "Sonne", "sie", "sehr": cổ họng PHẢI rung ngay từ âm đầu tiên!'
      }
    ],
    organRoles: {
      lips: 'Hơi dẹt nhẹ tự nhiên.',
      'tongue-tip': 'Nâng gần gờ lợi trên tạo rãnh hẹp.',
      'tongue-blade': 'Bờ bên lưỡi áp nhẹ hàm trên.',
      'tongue-dorsum': 'Hơi nâng nhẹ.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Đóng đường mũi.',
      'hard-palate': 'Điểm thắt âm ở vùng ổ răng.',
      'vocal-cords': 'Khép sát và rung liên tục (~145 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.z_fricative, POSTURE_PRESETS.s_fricative),
    acousticProfile: { f0: 145, formants: [360, 1750, 2900], noiseGain: 0.35, noiseFilterFreq: 4600 }
  },
  {
    id: 'sch_voiceless',
    symbol: '/ʃ/',
    graphemes: 'sch, s (trong sp-, st- đầu âm tiết)',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát sau ổ răng vô thanh (chu môi)',
    ipaTechnicalName: 'Stimmloser postalveolarer Frikativ',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/ç/',
    comparisonNote:
      'Khác với /ç/ (đầu lưỡi hạ thấp, môi dẹt), âm /ʃ/ vồng phiến lưỡi lên vùng sau ổ răng ĐỒNG THỜI chu tròn hai môi mạnh về phía trước.',
    phonemeAudioPath: 'assets/audio/phonemes/sch_voiceless.ogg',
    exampleWords: [
      { word: 'Schule', ipa: '[ˈʃuːlə]', meaning: 'trường học', audioPath: 'assets/audio/words/schule.ogg', timeRange: [0.05, 0.3], highlightedGrapheme: 'Sch' },
      { word: 'Tisch', ipa: '[tʰɪʃ]', meaning: 'cái bàn', audioPath: 'assets/audio/words/tisch.ogg', timeRange: [0.34, 0.6], highlightedGrapheme: 'sch' },
      { word: 'Stadt', ipa: '[ʃtat]', meaning: 'thành phố', audioPath: 'assets/audio/words/stadt.ogg', timeRange: [0.05, 0.28], highlightedGrapheme: 'St' }
    ],
    articulationSteps: [
      'Bước 1 (Chu tròn hai môi nhô ra trước): Đưa hai môi về phía trước thành loa tròn như khi ra hiệu "suỵt!".',
      'Bước 2 (Nâng phiến lưỡi về vùng sau ổ răng): Đưa đầu lưỡi và phiến lưỡi lùi nhẹ lên vùng chuyển tiếp giữa ổ răng và ngạc cứng.',
      'Bước 3 (Thổi hơi dày và trầm): Dây thanh mở vô thanh, thổi luồng hơi rộng qua rãnh lưỡi tạo tiếng "sh" trầm dày.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "s" dẹt (/s/) hoặc nhầm với /ç/ (Ich-Laut)',
        mistakeDescription: 'Người Việt hay quên chu môi khi đọc "sch" hoặc đọc nhầm "sp-/st-" đầu từ thành /s/ tiếng Anh ("Stadt" thành "S-tát").',
        correctionTip: 'Luôn nhớ "sp-" và "st-" ở đầu từ/gốc từ tiếng Đức đọc là /ʃp-/ và /ʃt-/ với môi chu tròn rõ!'
      }
    ],
    organRoles: {
      lips: 'Chu tròn và nhô mạnh về phía trước giúp hạ tần số tiếng xát.',
      'tongue-tip': 'Hơi nhấc lên phía sau vùng ổ răng trên.',
      'tongue-blade': 'Vồng cao gần ranh giới sau ổ răng – ngạc cứng trước.',
      'tongue-dorsum': 'Nâng cao hỗ trợ tạo khoang xát rộng.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Nâng cao đóng kín khoang mũi.',
      'hard-palate': 'Vùng sau ổ răng tạo xoáy khí ma sát (~2400 Hz).',
      'vocal-cords': 'Mở rộng hình chữ V (vô thanh).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.sch_fricative, POSTURE_PRESETS.ch_ich),
    acousticProfile: { f0: 0, formants: [420, 1650, 2600], noiseGain: 0.62, noiseFilterFreq: 2450 }
  },
  {
    id: 'zh_voiced',
    symbol: '/ʒ/',
    graphemes: 'g, j (trong từ mượn tiếng Pháp: Garage, Journalist)',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát sau ổ răng hữu thanh',
    ipaTechnicalName: 'Stimmhafter postalveolarer Frikativ',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/ʃ/',
    comparisonNote:
      'Âm /ʒ/ có khẩu hình chu môi và vị trí lưỡi giống hệt /ʃ/, nhưng dây thanh quản rung hữu thanh (tương ứng /ʒ/ trong "Garage", "Journalist").',
    phonemeAudioPath: 'assets/audio/phonemes/zh_voiced.ogg',
    exampleWords: [
      { word: 'Garage', ipa: '[ɡaˈʁaːʒə]', meaning: 'nhà để xe (ga-ra)', audioPath: 'assets/audio/words/garage.ogg', timeRange: [0.42, 0.62], highlightedGrapheme: 'g' },
      { word: 'Journalist', ipa: '[ʒʊʁnaˈlɪst]', meaning: 'nhà báo', audioPath: 'assets/audio/words/journalist.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'J' },
      { word: 'Orange', ipa: '[oˈʁɑ̃ːʒə]', meaning: 'quả cam', audioPath: 'assets/audio/words/orange.ogg', timeRange: [0.4, 0.6], highlightedGrapheme: 'g' }
    ],
    articulationSteps: [
      'Bước 1 (Đặt khẩu hình như /ʃ/): Chu tròn hai môi nhô nhẹ về trước, nâng phiến lưỡi về vùng sau ổ răng.',
      'Bước 2 (Bật rung dây thanh): Làm rung dây thanh quản liên tục trong cổ họng.',
      'Bước 3 (Đẩy hơi nhẹ): Kết hợp thanh rung với tiếng xát mềm.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm tắc-xát /d͡ʒ/ tiếng Anh ("Job") hoặc /ʃ/ vô thanh',
        mistakeDescription: 'Người Việt quen đọc "j/g" tiếng Anh hay bật tắc đầu lưỡi thành "giờ/dờ" (/d͡ʒ/) thay vì lướt xát mượt /ʒ/.',
        correctionTip: 'Đừng chạm chặt lưỡi lên vòm miệng! Chỉ nâng lưỡi tạo khe hở như /ʃ/ rồi rung cổ họng.'
      }
    ],
    organRoles: {
      lips: 'Chu tròn nhẹ giống /ʃ/.',
      'tongue-tip': 'Hơi nâng lên sau ổ răng, không chạm kín.',
      'tongue-blade': 'Vồng lên vùng sau ổ răng tạo khe xát.',
      'tongue-dorsum': 'Nâng nhẹ.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Đóng kín đường mũi.',
      'hard-palate': 'Vùng sau ổ răng tạo ma sát mềm.',
      'vocal-cords': 'Khép rung đều (~140 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.zh_fricative, POSTURE_PRESETS.sch_fricative),
    acousticProfile: { f0: 140, formants: [350, 1600, 2500], noiseGain: 0.34, noiseFilterFreq: 2300 }
  },
  {
    id: 'ch_ich',
    symbol: '/ç/',
    graphemes: 'ch (sau i, e, ä, ö, ü, ei, eu, l, n, r), -ig',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát ngạc cứng vô thanh (Ich-Laut)',
    ipaTechnicalName: 'Stimmloser palataler Frikativ (Ich-Laut)',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/x/',
    comparisonNote:
      'So với âm /x/ (Ach-Laut nâng cuống lưỡi ở ngạc mềm phía sau), âm /ç/ (Ich-Laut) đẩy toàn bộ phần trước và giữa lưỡi vồng cao sát ngạc cứng phía trước.',
    phonemeAudioPath: 'assets/audio/phonemes/ch_ich.ogg',
    exampleWords: [
      { word: 'ich', ipa: '[ɪç]', meaning: 'tôi (đại từ nhân xưng)', audioPath: 'assets/audio/words/ich.ogg', timeRange: [0.18, 0.56], highlightedGrapheme: 'ch' },
      { word: 'Milch', ipa: '[mɪlç]', meaning: 'sữa', audioPath: 'assets/audio/words/milch.ogg', timeRange: [0.28, 0.65], highlightedGrapheme: 'ch' },
      { word: 'lächeln', ipa: '[ˈlɛçl̩n]', meaning: 'mỉm cười', audioPath: 'assets/audio/words/laecheln.ogg', timeRange: [0.18, 0.46], highlightedGrapheme: 'ch' }
    ],
    articulationSteps: [
      'Bước 1 (Neo đầu lưỡi dưới răng cửa dưới): Giữ đầu lưỡi nằm thấp chạm nhẹ mặt sau răng cửa hàm dưới, không cong đầu lưỡi lên.',
      'Bước 2 (Ép mặt lưỡi trước sát ngạc cứng): Nâng cao phần trước lưỡi áp sát vòm ngạc cứng tạo khe hẹp khoảng 1.5–2mm.',
      'Bước 3 (Thổi luồng hơi xát vô thanh): Mở rộng dây thanh quản (không rung), đẩy luồng khí mạnh qua khe hẹp ngạc cứng tạo dòng xoáy khí êm và sáng.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "ch" (/tɕ/) tiếng Việt hoặc "sh" (/ʃ/) tiếng Anh',
        mistakeDescription: 'Người Việt hay chạm hẳn lưỡi vào ngạc rồi bật ra thành "ích", hoặc chu môi đọc thành "ish" (/ɪʃ/).',
        correctionTip: 'Đặt lưỡi ở vị trí chuẩn bị nói âm "y" (như trong "yêu"), giữ đầu lưỡi dưới răng dưới và thổi hơi gió vô thanh thật mạnh qua mặt lưỡi.'
      }
    ],
    organRoles: {
      lips: 'Hai môi mở tự nhiên và hơi dẹt nhẹ, không chu tròn (khác hẳn với âm /ʃ/).',
      'tongue-tip': 'Đầu lưỡi neo cố định phía sau răng cửa hàm dưới để tránh biến thành âm tắc "ch".',
      'tongue-blade': 'Phần trước lưỡi nâng cực cao áp sát ngạc cứng, tạo khe hẹp gây nhiễu động luồng khí.',
      'tongue-dorsum': 'Thân lưỡi vồng cao nâng đỡ phiến lưỡi hướng lên vòm ngạc cứng.',
      'tongue-root': 'Gốc lưỡi tiến về phía trước, mở rộng khoang hầu.',
      'soft-palate': 'Ngạc mềm nâng kín thành họng sau để toàn bộ áp lực hơi dồn qua khe ngạc cứng.',
      'hard-palate': 'Điểm thắt âm chính: luồng khí va đập vào vòm ngạc cứng tạo tiếng xát tần số cao (~3000 Hz).',
      'vocal-cords': 'Thanh môn mở rộng hình chữ V (vô thanh), dây thanh hoàn toàn không rung.'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.ch_ich, POSTURE_PRESETS.ch_ach),
    acousticProfile: { f0: 0, formants: [400, 2100, 3100], noiseGain: 0.55, noiseFilterFreq: 2950 }
  },
  {
    id: 'ch_ach',
    symbol: '/x/',
    graphemes: 'ch (sau a, o, u, au)',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát ngạc mềm vô thanh (Ach-Laut)',
    ipaTechnicalName: 'Stimmloser velarer Frikativ (Ach-Laut)',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/ç/',
    comparisonNote:
      'Ngược với /ç/ (nâng lưỡi ở ngạc cứng phía trước), âm /x/ rút lưỡi về phía sau và nâng phần sau lưỡi áp sát ngạc mềm (velum).',
    phonemeAudioPath: 'assets/audio/phonemes/ch_ach.ogg',
    exampleWords: [
      { word: 'Buch', ipa: '[buːx]', meaning: 'quyển sách', audioPath: 'assets/audio/words/buch.ogg', timeRange: [0.26, 0.66], highlightedGrapheme: 'ch' },
      { word: 'machen', ipa: '[ˈmaxən]', meaning: 'làm, thực hiện', audioPath: 'assets/audio/words/machen.ogg', timeRange: [0.18, 0.48], highlightedGrapheme: 'ch' },
      { word: 'Nacht', ipa: '[naxt]', meaning: 'ban đêm', audioPath: 'assets/audio/words/nacht.ogg', timeRange: [0.16, 0.46], highlightedGrapheme: 'ch' }
    ],
    articulationSteps: [
      'Bước 1 (Thả thấp đầu lưỡi): Kéo nhẹ đầu lưỡi lùi về phía sàn miệng dưới.',
      'Bước 2 (Nâng phần sau lưỡi lên ngạc mềm): Nâng cao phần lưng lưỡi sau hướng lên ngạc mềm, giữ khe hẹp nhỏ để hơi đi qua.',
      'Bước 3 (Đẩy luồng hơi xát sâu): Dây thanh mở rộng vô thanh, đẩy hơi từ phổi qua khe ngạc mềm tạo âm xát trầm.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm tắc "c/k" ở cuối từ (đọc "Buch" thành "Búc")',
        mistakeDescription: 'Người Việt quen đóng kín cuống lưỡi ở cuối từ khiến âm xát /x/ bị ngắt đột ngột thành âm tắc /k/.',
        correctionTip: 'Giữ khe hẹp giữa cuống lưỡi và ngạc mềm ở cuối từ "Buch", xì luồng hơi "kh..." liên tục thêm 0.3 giây.'
      }
    ],
    organRoles: {
      lips: 'Hai môi mở tự nhiên tùy thuộc vào nguyên âm đứng trước.',
      'tongue-tip': 'Đầu lưỡi rút nhẹ về phía sau và nằm thấp trên sàn miệng.',
      'tongue-blade': 'Phần trước lưỡi hạ thấp, tạo khoảng trống lớn ở khoang miệng trước.',
      'tongue-dorsum': 'Phần sau lưỡi vồng cao áp sát ngạc mềm tạo khe ma sát khí.',
      'tongue-root': 'Gốc lưỡi lùi nhẹ về phía sau hỗ trợ nâng phần lưng lưỡi sau.',
      'soft-palate': 'Ngạc mềm nâng đóng đường mũi và làm bề mặt ma sát trực tiếp với phần sau lưỡi.',
      'hard-palate': 'Không tiếp xúc với lưỡi trong âm /x/.',
      'vocal-cords': 'Thanh môn mở rộng hình chữ V (vô thanh), cho luồng khí mạnh đi lên từ khí quản.'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.ch_ach, POSTURE_PRESETS.ch_ich),
    acousticProfile: { f0: 0, formants: [500, 1150, 2300], noiseGain: 0.62, noiseFilterFreq: 1350 }
  },
  {
    id: 'r_uvular',
    symbol: '/ʁ/',
    graphemes: 'r, rr, rh (trước nguyên âm)',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát / tiếp cận lưỡi gà hữu thanh',
    ipaTechnicalName: 'Stimmhafter uvularer Frikativ / Approximant',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/x/',
    comparisonNote:
      'So với /x/ (vô thanh ở ngạc mềm), âm /ʁ/ lùi gốc lưỡi sâu hơn về sát lưỡi gà (uvula) đồng thời BẬT RUNG dây thanh quản.',
    phonemeAudioPath: 'assets/audio/phonemes/r_uvular.ogg',
    exampleWords: [
      { word: 'rot', ipa: '[ʁoːt]', meaning: 'màu đỏ', audioPath: 'assets/audio/words/rot.ogg', timeRange: [0.04, 0.36], highlightedGrapheme: 'r' },
      { word: 'reisen', ipa: '[ˈʁaɪ̯zn̩]', meaning: 'đi du lịch, hành trình', audioPath: 'assets/audio/words/reisen.ogg', timeRange: [0.04, 0.34], highlightedGrapheme: 'r' },
      { word: 'Bruder', ipa: '[ˈbʁuːdɐ]', meaning: 'anh / em trai', audioPath: 'assets/audio/words/bruder.ogg', timeRange: [0.12, 0.38], highlightedGrapheme: 'r' }
    ],
    articulationSteps: [
      'Bước 1 (Giữ đầu lưỡi nằm yên phía dưới): Đầu lưỡi chạm nhẹ răng cửa dưới, tuyệt đối không cong đầu lưỡi lên vòm miệng.',
      'Bước 2 (Nâng gốc lưỡi về sát lưỡi gà): Kéo phần sau và gốc lưỡi lên gần đầu lưỡi gà giống tư thế chuẩn bị súc miệng.',
      'Bước 3 (Rung dây thanh & lướt hơi mềm): Kích hoạt rung dây thanh quản đồng thời cho luồng hơi lướt nhẹ qua khe lưỡi gà tạo âm xát hữu thanh trầm ấm.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm R rung đầu lưỡi (/r/) hoặc âm khạc vô thanh quá mạnh',
        mistakeDescription: 'Người Việt thường cong đầu lưỡi lên chân răng trên hoặc gồng cứng họng tạo tiếng khạc khô rát.',
        correctionTip: 'Giữ lưỡi ở tư thế âm /x/ nhưng thả lỏng lực ép đi một nửa và làm rung thanh quản.'
      }
    ],
    organRoles: {
      lips: 'Hai môi hơi tròn nhẹ tự nhiên chuẩn bị chuyển sang nguyên âm kế tiếp.',
      'tongue-tip': 'Đầu lưỡi hoàn toàn thư giãn ở sàn miệng trước.',
      'tongue-blade': 'Phần trước lưỡi nằm thấp.',
      'tongue-dorsum': 'Phần sau lưỡi nâng cao và lùi về phía lưỡi gà.',
      'tongue-root': 'Gốc lưỡi nâng lùi về phía thành họng trên và lưỡi gà.',
      'soft-palate': 'Ngạc mềm đóng đường mũi trong khi đầu lưỡi gà rung nhẹ tiếp cận mặt sau lưỡi.',
      'hard-palate': 'Khoang miệng dưới ngạc cứng mở rộng, tạo âm hưởng trầm.',
      'vocal-cords': 'Dây thanh khép và rung mạnh (~135 Hz) kết hợp ma sát nhẹ ở lưỡi gà.'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.r_uvular, POSTURE_PRESETS.ch_ach),
    acousticProfile: { f0: 135, formants: [480, 1180, 2150], noiseGain: 0.28, noiseFilterFreq: 1100, trillRate: 26 }
  },
  {
    id: 'h_glottal',
    symbol: '/h/',
    graphemes: 'h (đầu âm tiết)',
    category: 'consonant',
    subGroup: 'consonant_fricative',
    manner: 'fricative',
    subCategory: 'Âm xát thanh môn vô thanh',
    ipaTechnicalName: 'Stimmloser glottaler Frikativ',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/ʔ/',
    comparisonNote:
      'Âm /h/ mở rộng thanh môn hoàn toàn để luồng hơi ma sát từ cổ họng thoát tự do ra ngoài, đối lập với /ʔ/ đóng kín thanh môn.',
    phonemeAudioPath: 'assets/audio/phonemes/h_glottal.ogg',
    exampleWords: [
      { word: 'Haus', ipa: '[haʊ̯s]', meaning: 'ngôi nhà', audioPath: 'assets/audio/words/haus.ogg', timeRange: [0.04, 0.22], highlightedGrapheme: 'H' },
      { word: 'heute', ipa: '[ˈhɔʏ̯tə]', meaning: 'hôm nay', audioPath: 'assets/audio/words/heute.ogg', timeRange: [0.04, 0.22], highlightedGrapheme: 'h' },
      { word: 'Hand', ipa: '[hant]', meaning: 'bàn tay', audioPath: 'assets/audio/words/hand.ogg', timeRange: [0.04, 0.22], highlightedGrapheme: 'H' }
    ],
    articulationSteps: [
      'Bước 1 (Đặt sẵn khoang miệng theo nguyên âm sau): Môi và lưỡi chuẩn bị tư thế cho nguyên âm kế tiếp.',
      'Bước 2 (Mở rộng thanh môn): Đẩy luồng hơi ấm từ phổi qua khe thanh môn mở rộng (tạo tiếng thở gió nhẹ, không rung dây thanh).'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Đọc thành âm /x/ khạc ở cuống lưỡi hoặc đọc "h" câm giữa từ',
        mistakeDescription: 'Lưu ý: chữ "h" giữa từ như trong "sehen", "gehen", "Uhr" là Dehnungs-h (h kéo dài nguyên âm) nên KHÔNG đọc thành /h/!',
        correctionTip: 'Chỉ phát âm /h/ khi đứng đầu từ hoặc đầu gốc từ (Haus, heute, woher); nếu đứng sau nguyên âm ở giữa/cuối âm tiết thì chỉ kéo dài nguyên âm đó.'
      }
    ],
    organRoles: {
      lips: 'Thư giãn theo nguyên âm kế tiếp.',
      'tongue-tip': 'Thả lỏng.',
      'tongue-blade': 'Thả lỏng.',
      'tongue-dorsum': 'Thả lỏng.',
      'tongue-root': 'Hơi mở rộng khoang hầu.',
      'soft-palate': 'Nâng đóng đường mũi.',
      'hard-palate': 'Không cản luồng khí.',
      'vocal-cords': 'Khe thanh môn mở rất rộng (glottis = 0.95) tạo tiếng thở vô thanh.'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.h_fricative, POSTURE_PRESETS.glottal_stop),
    acousticProfile: { f0: 0, formants: [550, 1450, 2400], noiseGain: 0.45, noiseFilterFreq: 1600 }
  },

  // ==========================================================================
  // 3. AFFRICATES (3): /p͡f/, /t͡s/, /t͡ʃ/
  // ==========================================================================
  {
    id: 'pf_affricate',
    symbol: '/p͡f/',
    graphemes: 'pf',
    category: 'consonant',
    subGroup: 'consonant_affricate',
    manner: 'affricate',
    subCategory: 'Âm tắc-xát môi / môi-răng vô thanh',
    ipaTechnicalName: 'Stimmlose labiale Affrikate',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/f/',
    comparisonNote:
      'Âm tắc-xát /p͡f/ diễn ra qua 2 pha liên hoàn: pha đầu (30%–50%) mím chặt hai môi như /p/, sau đó (50%–75%) bật trực tiếp sang khe xát răng-môi /f/ thay vì mở hẳn.',
    phonemeAudioPath: 'assets/audio/phonemes/pf_affricate.ogg',
    exampleWords: [
      { word: 'Pferd', ipa: '[p͡feːɐ̯t]', meaning: 'con ngựa', audioPath: 'assets/audio/words/pferd.ogg', timeRange: [0.04, 0.28], highlightedGrapheme: 'Pf' },
      { word: 'Apfel', ipa: '[ˈʔap͡fl̩]', meaning: 'quả táo', audioPath: 'assets/audio/words/apfel.ogg', timeRange: [0.22, 0.44], highlightedGrapheme: 'pf' },
      { word: 'Kopf', ipa: '[kɔp͡f]', meaning: 'cái đầu', audioPath: 'assets/audio/words/kopf.ogg', timeRange: [0.34, 0.56], highlightedGrapheme: 'pf' }
    ],
    articulationSteps: [
      'Bước 1 (Pha 1 — Mím kín hai môi như /p/): Chạm chặt môi trên và môi dưới để tích áp suất khí.',
      'Bước 2 (Pha 2 — Chuyển nhanh sang khe răng-môi /f/): Khi bật mở môi, kéo ngay môi dưới chạm mép răng cửa trên để luồng hơi thoát qua dưới dạng tiếng xát /f/ thay vì bật thoáng.',
      'Bước 3 (Giữ vô thanh): Dây thanh không rung suốt cả 2 pha.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Bỏ mất âm /p/ ở đầu từ (đọc "Pferd" thành "Ferd") hoặc chèn âm "ờ" ở giữa ("pờ-phơt")',
        mistakeDescription: 'Do tiếng Việt không có cụm /p͡f/ đầu từ, người học hay đọc tắt thành /f/ hoặc tách thành hai âm tiết rời.',
        correctionTip: 'Hãy mím môi thật chặt như sắp nói chữ "p", rồi thay vì mở hẳn môi hãy thả hơi trực tiếp qua khe răng trên – môi dưới như /f/ trong một hơi duy nhất.'
      }
    ],
    organRoles: {
      lips: 'Pha 1 mím chặt hai môi (/p/); Pha 2 môi dưới rút nhẹ chạm răng cửa trên (/f/).',
      'tongue-tip': 'Nằm thấp thư giãn.',
      'tongue-blade': 'Trung tính.',
      'tongue-dorsum': 'Trung tính.',
      'tongue-root': 'Trung tính.',
      'soft-palate': 'Nâng cao đóng kín khoang mũi để nén áp lực hơi.',
      'hard-palate': 'Răng cửa trên đón môi dưới ở pha xát thứ hai.',
      'vocal-cords': 'Mở rộng vô thanh suốt cả pha tắc và pha xát.'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.p_stop,
      POSTURE_PRESETS.f_fricative,
      POSTURE_PRESETS.f_fricative
    ),
    acousticProfile: { f0: 0, formants: [420, 1250, 2350], noiseGain: 0.52, noiseFilterFreq: 3800 }
  },
  {
    id: 'ts_affricate',
    symbol: '/t͡s/',
    graphemes: 'z, tz, ts, c (trước e, i)',
    category: 'consonant',
    subGroup: 'consonant_affricate',
    manner: 'affricate',
    subCategory: 'Âm tắc-xát ổ răng vô thanh',
    ipaTechnicalName: 'Stimmlose alveolare Affrikate',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/s/',
    comparisonNote:
      'Âm /t͡s/ (chữ "z" tiếng Đức) bắt đầu bằng pha chặn tắc đầu lưỡi /t/ (30%–50%) rồi lập tức mở khe hẹp thành âm xát /s/ sắc bén (50%–75%).',
    phonemeAudioPath: 'assets/audio/phonemes/ts_affricate.ogg',
    exampleWords: [
      { word: 'Zeit', ipa: '[t͡saɪ̯t]', meaning: 'thời gian', audioPath: 'assets/audio/words/zeit.ogg', timeRange: [0.04, 0.28], highlightedGrapheme: 'Z' },
      { word: 'Zug', ipa: '[t͡suːk]', meaning: 'tàu hỏa', audioPath: 'assets/audio/words/zug.ogg', timeRange: [0.04, 0.28], highlightedGrapheme: 'Z' },
      { word: 'Katze', ipa: '[ˈkʰat͡sə]', meaning: 'con mèo', audioPath: 'assets/audio/words/katze.ogg', timeRange: [0.24, 0.46], highlightedGrapheme: 'tz' }
    ],
    articulationSteps: [
      'Bước 1 (Pha 1 — Chặn đầu lưỡi như /t/): Đặt đầu lưỡi ép chặt lên gờ lợi trên ngay sau răng cửa trên.',
      'Bước 2 (Pha 2 — Nhả lưỡi thành khe xì /s/): Hạ nhẹ phần chính giữa đầu lưỡi để tạo khe xát /s/ ngay tại ổ răng trong cùng một luồng hơi mạnh.',
      'Bước 3 (Vô thanh dứt khoát): Dây thanh hoàn toàn không rung.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Đọc chữ "z" thành /z/ của tiếng Anh ("zoo") hoặc đọc thành "ch/tr" (/t͡ʃ/)',
        mistakeDescription: 'Sai lầm phổ biến nhất của người học tiếng Đức từ tiếng Anh là đọc "Zeit" hay "zwei" thành /z/ hữu thanh.',
        correctionTip: 'Ghi nhớ tuyệt đối: chữ "z" trong tiếng Đức KHÔNG BAO GIỜ là /z/, mà luôn là /t͡s/ (bật như "t + x" trong "t-xây" thật gọn và không rung cổ).'
      }
    ],
    organRoles: {
      lips: 'Hơi dẹt tự nhiên.',
      'tongue-tip': 'Pha 1 chặn kín gờ ổ răng trên (/t/); Pha 2 hạ tạo rãnh hẹp ở trung tâm (/s/).',
      'tongue-blade': 'Hai rìa lưỡi áp sát hàm trên dồn luồng hơi vào rãnh giữa.',
      'tongue-dorsum': 'Hơi nâng nhẹ.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Đóng kín đường mũi.',
      'hard-palate': 'Gờ ổ răng trên là vị trí chung cho cả pha tắc và pha xát.',
      'vocal-cords': 'Mở rộng vô thanh.'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.t_stop,
      POSTURE_PRESETS.s_fricative,
      POSTURE_PRESETS.s_fricative
    ),
    acousticProfile: { f0: 0, formants: [440, 1800, 3100], noiseGain: 0.65, noiseFilterFreq: 5200 }
  },
  {
    id: 'tsch_affricate',
    symbol: '/t͡ʃ/',
    graphemes: 'tsch',
    category: 'consonant',
    subGroup: 'consonant_affricate',
    manner: 'affricate',
    subCategory: 'Âm tắc-xát sau ổ răng vô thanh',
    ipaTechnicalName: 'Stimmlose postalveolare Affrikate',
    isVoiced: false,
    hasAspiration: true,
    comparedWith: '/ʃ/',
    comparisonNote:
      'Âm /t͡ʃ/ bắt đầu bằng pha chặn đầu lưỡi ở ổ răng (/t/) rồi chuyển nhanh sang tư thế chu môi – xát sau ổ răng (/ʃ/).',
    phonemeAudioPath: 'assets/audio/phonemes/tsch_affricate.ogg',
    exampleWords: [
      { word: 'Deutsch', ipa: '[dɔʏ̯t͡ʃ]', meaning: 'tiếng Đức', audioPath: 'assets/audio/words/deutsch.ogg', timeRange: [0.36, 0.58], highlightedGrapheme: 'tsch' },
      { word: 'tschüss', ipa: '[t͡ʃʏs]', meaning: 'tạm biệt (thân mật)', audioPath: 'assets/audio/words/tschuess.ogg', timeRange: [0.04, 0.28], highlightedGrapheme: 'tsch' },
      { word: 'Kutsche', ipa: '[ˈkʊt͡ʃə]', meaning: 'xe ngựa', audioPath: 'assets/audio/words/kutsche.ogg', timeRange: [0.24, 0.46], highlightedGrapheme: 'tsch' }
    ],
    articulationSteps: [
      'Bước 1 (Pha 1 — Chu môi và chặn đầu lưỡi): Chu nhẹ hai môi ra trước đồng thời ép đầu lưỡi lên vùng sau ổ răng trên.',
      'Bước 2 (Pha 2 — Nhả lưỡi thành tiếng xát /ʃ/): Hạ nhẹ lưỡi để luồng khí thoát xát dày qua khe sau ổ răng.',
      'Bước 3 (Giữ vô thanh): Dây thanh không rung.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "ch" tiếng Việt (không chu môi) hoặc bỏ phần tắc /t/ ở cuối từ',
        mistakeDescription: 'Âm "ch" tiếng Việt không chu môi và yếu hơi hơn hẳn /t͡ʃ/ tiếng Đức.',
        correctionTip: 'Chu môi tròn như âm /ʃ/ ngay từ lúc đặt lưỡi chặn hơi.'
      }
    ],
    organRoles: {
      lips: 'Chu tròn về phía trước hỗ trợ pha xát /ʃ/.',
      'tongue-tip': 'Chặn vùng ổ răng rồi hạ tạo khe xát.',
      'tongue-blade': 'Vồng cao về phía sau ổ răng.',
      'tongue-dorsum': 'Nâng hỗ trợ.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Đóng đường mũi.',
      'hard-palate': 'Vùng sau ổ răng tạo điểm tắc-xát.',
      'vocal-cords': 'Mở rộng vô thanh.'
    },
    svgKeyframes: buildKeyframes(
      POSTURE_PRESETS.t_stop,
      POSTURE_PRESETS.sch_fricative,
      POSTURE_PRESETS.sch_fricative
    ),
    acousticProfile: { f0: 0, formants: [430, 1700, 2650], noiseGain: 0.64, noiseFilterFreq: 2600 }
  },

  // ==========================================================================
  // 4. NASALS (3): /m/, /n/, /ŋ/
  // ==========================================================================
  {
    id: 'm_nasal',
    symbol: '/m/',
    graphemes: 'm, mm',
    category: 'consonant',
    subGroup: 'consonant_nasal',
    manner: 'nasal',
    subCategory: 'Âm mũi hai môi hữu thanh',
    ipaTechnicalName: 'Stimmhafter bilabialer Nasal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/b/',
    comparisonNote:
      'Âm /m/ mím hai môi giống hệt /b/, nhưng NGẠC MỀM (velum) hạ thấp xuống mở lối cho luồng hơi hữu thanh thoát lên khoang mũi.',
    phonemeAudioPath: 'assets/audio/phonemes/m_nasal.ogg',
    exampleWords: [
      { word: 'mein', ipa: '[maɪ̯n]', meaning: 'của tôi', audioPath: 'assets/audio/words/mein.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'm' },
      { word: 'Mann', ipa: '[man]', meaning: 'người đàn ông', audioPath: 'assets/audio/words/mann.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'M' },
      { word: 'Name', ipa: '[ˈnaːmə]', meaning: 'tên gọi', audioPath: 'assets/audio/words/name.ogg', timeRange: [0.28, 0.46], highlightedGrapheme: 'm' }
    ],
    articulationSteps: [
      'Bước 1 (Khép kín hai môi): Mím nhẹ nhàng môi trên và môi dưới vào nhau chặn lối thoát miệng.',
      'Bước 2 (Hạ ngạc mềm mở khoang mũi): Thả lỏng ngạc mềm hạ xuống khỏi thành họng để luồng hơi đi thẳng lên mũi.',
      'Bước 3 (Rung dây thanh ngân vang): Rung dây thanh đều đặn tạo tiếng ngân mũi "mmm...".'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Ngắt sớm âm /m/ ở cuối từ (như "am", "im", "Baum")',
        mistakeDescription: 'Khi đứng cuối từ, người Việt có xu hướng thả lỏng môi trước khi ngân đủ âm mũi.',
        correctionTip: 'Đảm bảo hai môi chạm khép trọn vẹn khi kết thúc các từ như "Baum", "dem", "kommen".'
      }
    ],
    organRoles: {
      lips: 'Khép kín hoàn toàn trong suốt quá trình phát âm, chặn đường thoát khí qua miệng.',
      'tongue-tip': 'Thư giãn trong khoang miệng.',
      'tongue-blade': 'Thư giãn.',
      'tongue-dorsum': 'Nằm ở tư thế nghỉ tự nhiên.',
      'tongue-root': 'Thả lỏng.',
      'soft-palate': 'HẠ THẤP rời khỏi thành họng sau, mở thông hoàn toàn đường lên khoang mũi!',
      'hard-palate': 'Không tiếp xúc.',
      'vocal-cords': 'Khép rung đều đặn (~145 Hz) tạo âm cộng hưởng mũi.'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.m_nasal, POSTURE_PRESETS.b_stop),
    acousticProfile: { f0: 145, formants: [260, 1100, 2200], noiseGain: 0.01, noiseFilterFreq: 800 }
  },
  {
    id: 'n_nasal',
    symbol: '/n/',
    graphemes: 'n, nn',
    category: 'consonant',
    subGroup: 'consonant_nasal',
    manner: 'nasal',
    subCategory: 'Âm mũi ổ răng hữu thanh',
    ipaTechnicalName: 'Stimmhafter alveolarer Nasal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/d/',
    comparisonNote:
      'Âm /n/ đặt đầu lưỡi chạm kín gờ ổ răng trên giống /d/, đồng thời HẠ NGẠC MỀM để luồng khí thoát qua đường mũi thay vì bật qua miệng.',
    phonemeAudioPath: 'assets/audio/phonemes/n_nasal.ogg',
    exampleWords: [
      { word: 'Nacht', ipa: '[naxt]', meaning: 'ban đêm', audioPath: 'assets/audio/words/nacht.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'N' },
      { word: 'Name', ipa: '[ˈnaːmə]', meaning: 'tên gọi', audioPath: 'assets/audio/words/name.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'N' },
      { word: 'Sonne', ipa: '[ˈzɔnə]', meaning: 'mặt trời', audioPath: 'assets/audio/words/sonne.ogg', timeRange: [0.24, 0.42], highlightedGrapheme: 'nn' }
    ],
    articulationSteps: [
      'Bước 1 (Chạm đầu lưỡi lên gờ ổ răng): Áp đầu lưỡi và rìa lưỡi lên gờ lợi trên chặn lối thoát khí đường miệng.',
      'Bước 2 (Hạ ngạc mềm): Mở van ngạc mềm cho luồng khí đi qua khoang mũi.',
      'Bước 3 (Rung dây thanh): Ngân tiếng mũi "nnn..." rõ ràng.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Lẫn với /l/ hoặc biến âm cuối "-en" thành âm mũi ngạc mềm /ŋ/',
        mistakeDescription: 'Người học hay đọc lướt hoặc rút lưỡi về sau ở cuối từ chứa "-en" hoặc nhầm n/l do thói quen vùng miền.',
        correctionTip: 'Đặt đầu lưỡi chạm chắc lên gờ lợi trên và kiểm tra luồng hơi ấm thoát ra ở lỗ mũi.'
      }
    ],
    organRoles: {
      lips: 'Mở nhẹ tự nhiên.',
      'tongue-tip': 'Ép kín lên gờ ổ răng trên chặn đường khí miệng.',
      'tongue-blade': 'Áp sát vành răng trên hỗ trợ bịt kín khoang miệng.',
      'tongue-dorsum': 'Nâng nhẹ theo đầu lưỡi.',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'HẠ THẤP mở thông hoàn toàn đường khí lên khoang mũi.',
      'hard-palate': 'Vùng ổ răng đón đầu lưỡi bịt kín đường miệng.',
      'vocal-cords': 'Khép rung đều (~145 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.n_nasal, POSTURE_PRESETS.d_stop),
    acousticProfile: { f0: 145, formants: [280, 1450, 2350], noiseGain: 0.01, noiseFilterFreq: 900 }
  },
  {
    id: 'ng_nasal',
    symbol: '/ŋ/',
    graphemes: 'ng, n (trước k: danke, Bank)',
    category: 'consonant',
    subGroup: 'consonant_nasal',
    manner: 'nasal',
    subCategory: 'Âm mũi ngạc mềm hữu thanh',
    ipaTechnicalName: 'Stimmhafter velarer Nasal',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/n/',
    comparisonNote:
      'Khác với /n/ (chặn bằng đầu lưỡi ở ổ răng), âm /ŋ/ hạ đầu lưỡi xuống và nâng lưng lưỡi sau chạm sát ngạc mềm đang hạ thấp (giống chữ "ng" cuối trong tiếng Việt).',
    phonemeAudioPath: 'assets/audio/phonemes/ng_nasal.ogg',
    exampleWords: [
      { word: 'singen', ipa: '[ˈzɪŋən]', meaning: 'hát', audioPath: 'assets/audio/words/singen.ogg', timeRange: [0.22, 0.42], highlightedGrapheme: 'ng' },
      { word: 'Finger', ipa: '[ˈfɪŋɐ]', meaning: 'ngón tay', audioPath: 'assets/audio/words/finger.ogg', timeRange: [0.22, 0.4], highlightedGrapheme: 'ng' },
      { word: 'danke', ipa: '[ˈdaŋkə]', meaning: 'cảm ơn', audioPath: 'assets/audio/words/danke.ogg', timeRange: [0.2, 0.36], highlightedGrapheme: 'n' }
    ],
    articulationSteps: [
      'Bước 1 (Hạ đầu lưỡi): Để đầu lưỡi nằm thấp sau răng cửa dưới.',
      'Bước 2 (Nâng lưng lưỡi sau chạm ngạc mềm hạ): Chặn lối thoát miệng ở phía sau cuống lưỡi đồng thời mở ngạc mềm lên mũi.',
      'Bước 3 (Rung dây thanh ngân âm mũi): Phát âm một tiếng ngân mũi duy nhất — KHÔNG bật thêm âm /ɡ/ ở sau!'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Bật thêm âm /ɡ/ hoặc /k/ sau "ng" (đọc "singen" thành "zing-gừn", "lang" thành "lăng-c")',
        mistakeDescription: 'Do ảnh hưởng cách đọc chính tả mặt chữ g, người học hay tách "ng" thành /ŋ/ + /ɡ/.',
        correctionTip: 'Chữ "ng" trong tiếng Đức (singen, lang, Wohnung) chỉ là MỘT âm mũi /ŋ/ duy nhất giống hệt "ng" cuối trong tiếng Việt ("lang thang"), tuyệt đối không bật /g/!'
      }
    ],
    organRoles: {
      lips: 'Mở tự nhiên (hoặc khép nhẹ ở cuối từ).',
      'tongue-tip': 'Nằm thấp thư giãn dưới sàn miệng (khác hẳn với /n/).',
      'tongue-blade': 'Hạ thấp.',
      'tongue-dorsum': 'Phần sau lưỡi nâng chạm sát ngạc mềm chặn đường miệng.',
      'tongue-root': 'Hơi lùi nhẹ.',
      'soft-palate': 'HẠ THẤP tiếp xúc lưng lưỡi sau và mở thông luồng khí lên khoang mũi.',
      'hard-palate': 'Không tiếp xúc.',
      'vocal-cords': 'Khép rung đều đặn (~140 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.ng_nasal, POSTURE_PRESETS.n_nasal),
    acousticProfile: { f0: 140, formants: [260, 1200, 2300], noiseGain: 0.01, noiseFilterFreq: 800 }
  },

  // ==========================================================================
  // 5. APPROXIMANTS & LIQUIDS (2): /l/, /j/
  // ==========================================================================
  {
    id: 'l_lateral',
    symbol: '/l/',
    graphemes: 'l, ll',
    category: 'consonant',
    subGroup: 'consonant_approximant',
    manner: 'lateral',
    subCategory: 'Âm bên ổ răng hữu thanh (Lateral)',
    ipaTechnicalName: 'Stimmhafter alveolarer Lateral',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/n/',
    comparisonNote:
      'Âm /l/ chạm đầu lưỡi ở chính giữa gờ ổ răng giống /n/, nhưng NGẠC MỀM đóng đường mũi và HAI BÊN RÌA LƯỠI hạ xuống cho luồng hơi rẽ sang hai bên thoát ra miệng.',
    phonemeAudioPath: 'assets/audio/phonemes/l_lateral.ogg',
    exampleWords: [
      { word: 'Liebe', ipa: '[ˈliːbə]', meaning: 'tình yêu', audioPath: 'assets/audio/words/liebe.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'L' },
      { word: 'lächeln', ipa: '[ˈlɛçl̩n]', meaning: 'mỉm cười', audioPath: 'assets/audio/words/laecheln.ogg', timeRange: [0.04, 0.22], highlightedGrapheme: 'l' },
      { word: 'Öl', ipa: '[øːl]', meaning: 'dầu', audioPath: 'assets/audio/words/oel.ogg', timeRange: [0.38, 0.6], highlightedGrapheme: 'l' }
    ],
    articulationSteps: [
      'Bước 1 (Chạm điểm chính giữa đầu lưỡi lên gờ lợi trên): Đặt đầu lưỡi gọn vào chính giữa gờ ổ răng trên.',
      'Bước 2 (Hạ hai rìa bên lưỡi): Thả lỏng hai cạnh bên thân lưỡi để luồng khí rẽ đôi thoát dọc hai bên má (xem tab "Từ trên xuống").',
      'Bước 3 (Giữ "L sáng" ở cả cuối từ): Rung dây thanh nhẹ và KHÔNG kéo cuống lưỡi về sau như "dark L" tiếng Anh.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm "dark L" (/ɫ/) nặng của tiếng Anh ở cuối từ ("ball", "Öl", "will")',
        mistakeDescription: 'Do thói quen tiếng Anh, người Việt hay kéo gốc lưỡi về sau biến "Öl" thành "Ơ-u" hoặc bỏ âm /l/ ở cuối.',
        correctionTip: 'Âm /l/ tiếng Đức luôn là "L sáng" (helles L) ở cả đầu và cuối từ: giữ thân lưỡi phẳng ra trước và chạm đầu lưỡi rõ lên lợi trên!'
      }
    ],
    organRoles: {
      lips: 'Mở tự nhiên.',
      'tongue-tip': 'Chạm gọn vào chính giữa gờ ổ răng trên, chừa lối bên hai rìa.',
      'tongue-blade': 'Hai bên rìa lưỡi hạ xuống tạo hai kênh thoát khí bên.',
      'tongue-dorsum': 'Giữ phẳng tự nhiên (không kéo lùi cong về sau như dark L tiếng Anh).',
      'tongue-root': 'Tiến nhẹ về trước.',
      'soft-palate': 'Nâng cao đóng kín đường mũi.',
      'hard-palate': 'Chỉ tiếp xúc ở điểm chính giữa gờ ổ răng (xem rõ trong tab Từ trên xuống).',
      'vocal-cords': 'Khép rung đều (~150 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.l_lateral, POSTURE_PRESETS.n_nasal),
    acousticProfile: { f0: 150, formants: [360, 1480, 2650], noiseGain: 0.02, noiseFilterFreq: 1600 }
  },
  {
    id: 'j_palatal',
    symbol: '/j/',
    graphemes: 'j, y (Yacht)',
    category: 'consonant',
    subGroup: 'consonant_approximant',
    manner: 'approximant',
    subCategory: 'Âm tiếp cận ngạc cứng hữu thanh',
    ipaTechnicalName: 'Stimmhafter palataler Approximant',
    isVoiced: true,
    hasAspiration: false,
    comparedWith: '/ç/',
    comparisonNote:
      'Âm /j/ đặt lưỡi vồng cao sát ngạc cứng gần giống /ç/ (Ich-Laut), nhưng khe hở hơi rộng hơn một chút và DÂY THANH RUNG HỮU THANH.',
    phonemeAudioPath: 'assets/audio/phonemes/j_palatal.ogg',
    exampleWords: [
      { word: 'ja', ipa: '[jaː]', meaning: 'vâng, có', audioPath: 'assets/audio/words/ja.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'j' },
      { word: 'Jahr', ipa: '[jaːɐ̯]', meaning: 'năm (thời gian)', audioPath: 'assets/audio/words/jahr.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'J' },
      { word: 'jung', ipa: '[jʊŋ]', meaning: 'trẻ tuổi', audioPath: 'assets/audio/words/jung.ogg', timeRange: [0.04, 0.24], highlightedGrapheme: 'j' }
    ],
    articulationSteps: [
      'Bước 1 (Neo đầu lưỡi sau răng dưới): Đặt đầu lưỡi tựa nhẹ sau răng cửa dưới giống vị trí âm /iː/.',
      'Bước 2 (Nâng cao mặt lưỡi gần ngạc cứng): Đẩy thân lưỡi trước lên gần vòm ngạc cứng nhưng không ép quá khít.',
      'Bước 3 (Rung dây thanh và lướt nhanh): Bật rung thanh quản rồi lướt nhanh lưỡi xuống nguyên âm theo sau.'
    ],
    vietnameseMistakes: [
      {
        confusedWith: 'Âm /d͡ʒ/ tiếng Anh ("yes" vs "jet") hoặc âm "d/gi" tiếng Việt',
        mistakeDescription: 'Người học hay đọc chữ "j" tiếng Đức ("Jahr", "jung") thành /d͡ʒ/ như tiếng Anh ("Giăng").',
        correctionTip: 'Chữ "j" trong tiếng Đức đọc giống âm "y" trong tiếng Anh ("yes", "you") — hoàn toàn KHÔNG bật tắc đầu lưỡi!'
      }
    ],
    organRoles: {
      lips: 'Mở tự nhiên hoặc hơi dẹt nhẹ.',
      'tongue-tip': 'Tựa nhẹ phía sau răng cửa hàm dưới.',
      'tongue-blade': 'Nâng cao hướng sát về vòm ngạc cứng (rộng hơn khe của /ç/ một chút).',
      'tongue-dorsum': 'Vồng cao về phía trước giống vị trí âm /iː/.',
      'tongue-root': 'Tiến về trước mở rộng khoang họng.',
      'soft-palate': 'Nâng cao đóng đường mũi.',
      'hard-palate': 'Đón mặt lưỡi trước tiến gần tạo cộng hưởng chuyển tiếp.',
      'vocal-cords': 'Khép sát và rung mạnh (~160 Hz).'
    },
    svgKeyframes: buildKeyframes(POSTURE_PRESETS.j_approximant, POSTURE_PRESETS.ch_ich),
    acousticProfile: { f0: 160, formants: [280, 2150, 2900], noiseGain: 0.06, noiseFilterFreq: 2600 }
  }
];
