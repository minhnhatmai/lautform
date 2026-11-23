# Thư mục âm thanh Âm vị chuẩn IPA (`public/assets/audio/phonemes/`)

Đặt các file `.mp3` ghi âm từng âm vị cô lập tại đây theo đúng mã `id` trong `german-phonemes.data.ts`:
- `ue_long.mp3` (`/yː/`)
- `oe_long.mp3` (`/øː/`)
- `ch_ich.mp3` (`/ç/`)
- `ch_ach.mp3` (`/x/`)
- `r_uvular.mp3` (`/ʁ/`)
- `oy_diphthong.mp3` (`/ɔʏ̯/`)
- `ai_diphthong.mp3` (`/aɪ̯/`)

> **Lưu ý:** Khi chưa có file `.mp3` ngoài, `AudioSyncService` sẽ tự động kích hoạt bộ tổng hợp âm học **Web Audio API (Formant & Fricative Synthesizer)** theo đúng tần số cộng hưởng F0, F1, F2, F3 của từng âm IPA.
