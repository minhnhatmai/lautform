# Đóng góp cho Lautform (Contributing Guide)

Cảm ơn bạn đã quan tâm đến việc xây dựng **Lautform** thành một công cụ học phát âm tiếng Đức miễn phí chất lượng cao cho cộng đồng!

## Các cách bạn có thể đóng góp

### 1. Bổ sung hoặc cải thiện hướng dẫn phát âm & lỗi sai thực tế
- Dữ liệu ngữ âm tiếng Việt nằm trong:
  - `src/app/core/data/german-vowels.data.ts`
  - `src/app/core/data/german-consonants.data.ts`
- Bản dịch tiếng Đức và tiếng Anh tương ứng nằm trong:
  - `src/app/core/data/phoneme-translations-de.data.ts`
  - `src/app/core/data/phoneme-translations-en.data.ts`

### 2. Đóng góp file thu âm chuẩn (.ogg / .mp3)
- File âm vị đơn đặt trong: `public/assets/audio/phonemes/<phoneme_id>.ogg`
- File từ ví dụ đặt trong: `public/assets/audio/words/<word_key>.ogg`
- Khuyến nghị sử dụng bản thu rõ nét, ít tạp âm và thuộc giấy phép mở (CC0 / CC BY / CC BY-SA).

### 3. Quy trình gửi Pull Request
1. Fork repository này.
2. Tạo nhánh mới (`git checkout -b feat/improve-phoneme-guide`).
3. Chạy kiểm tra build sạch không lỗi:
   ```bash
   npm run build
   ```
4. Tạo Pull Request kèm mô tả rõ thay đổi của bạn.
