# Thư mục âm thanh Từ ví dụ tiếng Đức (`public/assets/audio/words/`)

Đặt các file `.mp3` ghi âm từ ví dụ tiếng Đức tại đây theo đường dẫn khai báo trong `german-phonemes.data.ts`:
- Nhóm `/yː/`: `ueber.mp3`, `buehne.mp3`, `fuehlen.mp3`
- Nhóm `/øː/`: `schoen.mp3`, `hoeren.mp3`, `oel.mp3`
- Nhóm `/ç/`: `ich.mp3`, `milch.mp3`, `laecheln.mp3`
- Nhóm `/x/`: `buch.mp3`, `machen.mp3`, `nacht.mp3`
- Nhóm `/ʁ/`: `rot.mp3`, `reisen.mp3`, `bruder.mp3`
- Nhóm `/ɔʏ̯/`: `deutsch.mp3`, `heute.mp3`, `baeume.mp3`
- Nhóm `/aɪ̯/`: `eins.mp3`, `mein.mp3`, `zeit.mp3`

> **Lưu ý:** Khi chưa có file `.mp3` ngoài, `AudioSyncService` sẽ tự động phát giọng đọc tiếng Đức chuẩn (`de-DE`) hoặc bộ tổng hợp âm học **Web Audio API** đồng bộ 60fps với thanh trượt khẩu hình.
