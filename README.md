# Lautform — Interactive German IPA Vocal Tract Visualizer

**Lautform** là ứng dụng web mã nguồn mở, **miễn phí 100% cho cộng đồng**, giúp trực quan hóa khẩu hình giải phẫu SVG và hướng dẫn phát âm **trọn bộ 45 âm vị IPA chuẩn tiếng Đức (Standarddeutsch)** bằng 3 ngôn ngữ (**Tiếng Việt**, **Deutsch**, **English**).

> Free, ad-free, zero-backend static web application designed for self-learners, German teachers, and open-source contributors.

---

## Tính năng nổi bật (Key Features)

- **Trọn bộ 45 âm vị IPA tiếng Đức:**
  - **17 Nguyên âm đơn (Vowels):** Tròn môi trước (`/yː, ʏ, øː, œ/`), Không tròn môi trước (`/iː, ɪ, eː, ɛ, ɛː/`), Trung tâm & Mở (`/ə, ɐ, aː, a/`), Tròn môi sau (`/uː, ʊ, oː, ɔ/`).
  - **3 Nguyên âm đôi (Diphthongs):** `/aɪ̯/`, `/aʊ̯/`, `/ɔʏ̯/`.
  - **25 Phụ âm (Consonants):** Âm tắc & Knacklaut (`/p, b, t, d, k, g, ʔ/`), Âm xát (`/f, v, s, z, ʃ, ʒ, ç, x, ʁ, h/`), Âm tắc-xát 2 pha (`/p͡f, t͡s, t͡ʃ/`), Âm mũi thoát khí qua mũi (`/m, n, ŋ/`), Âm bên rẽ khí 2 bên `/l/` & Tiếp cận `/j/`.
- **3 góc nhìn giải phẫu SVG tương tác 60fps:** Mặt cắt dọc (*Sagittal*), Nhìn từ trên xuống (*Palatogram*), và Nội soi thanh quản (*Larynx/Glottis*), kèm 2 khung phụ **Nhìn chính diện** và **Rung hậu thanh**.
- **So sánh khẩu hình bất kỳ:** Mặc định đối chiếu cặp tối thiểu (minimal pair) và cho phép chọn bất kỳ âm nào trong 45 âm IPA để vẽ viền nét đứt chồng lên nhau.
- **Chia sẻ Deep-Link trực tiếp từng âm:** URL tự đồng bộ (`?phoneme=ch_ich&lang=vi&view=sagittal`) cùng nút **Chia sẻ âm này** giúp giáo viên gửi link mở đúng âm cần học qua Zalo/Facebook/Discord.
- **Hỗ trợ cài đặt PWA lên điện thoại:** Hoạt động như một ứng dụng tĩnh (Zero-Server, `manifest.webmanifest`).

---

## Chạy thử trên máy cá nhân (Local Development)

```bash
npm install
npm start
# Mở trình duyệt tại http://localhost:4200/
```

Build bản Production:

```bash
npm run build
# Output tĩnh nằm tại: dist/lautform/browser
```

---

## Hướng dẫn Deploy miễn phí 0đ lên Cloudflare Pages

Vì Lautform là ứng dụng tĩnh (Static SPA + file `.ogg`), bạn không cần thuê VPS hay Database:

### Cách 1: Kết nối GitHub trực tiếp trên Cloudflare Dashboard (Khuyên dùng)
1. Đẩy thư mục code này lên một repository công khai trên **GitHub**.
2. Truy cập **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
3. Chọn repo `lautform` và cấu hình build:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/lautform/browser`
4. Bấm **Save and Deploy** — sau ~1 phút bạn sẽ có tên miền miễn phí trọn đời `https://lautform.pages.dev` (miễn phí 100% băng thông không giới hạn, có sẵn HTTPS và CDN tại Việt Nam & Đức).

### Cách 2: Tự động Deploy bằng GitHub Actions (đã cấu hình sẵn)
Repo đã có sẵn file [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) và [`wrangler.toml`](wrangler.toml). Chỉ cần thêm 2 Secrets trong GitHub Repo (`Settings → Secrets and variables → Actions`):
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Mỗi lần bạn push lên nhánh `main`, GitHub Actions sẽ tự động build và deploy lên Cloudflare Pages.

### Cách 3: Đăng ký tên miền đẹp miễn phí `lautform.js.org` (Cho dự án Open Source)
1. Fork repository [`js-org/js.org`](https://github.com/js-org/js.org) trên GitHub.
2. Thêm dòng `"lautform": "lautform.pages.dev"` vào file `cnames_active.js` và tạo Pull Request theo hướng dẫn của `js.org`.
3. Vào **Cloudflare Pages → Custom domains** và thêm `lautform.js.org`.

---

## Bản quyền & Ghi công (License & Attribution)

- **Mã nguồn:** Phát hành theo giấy phép [MIT License](LICENSE).
- **Âm thanh (Audio):** Các file phát âm `.ogg` trong `public/assets/audio/` được sưu tầm từ kho dữ liệu mở **Wikimedia Commons** theo giấy phép **CC BY-SA 3.0 / 4.0 & GFDL**. Các âm chưa có bản thu sử dụng bộ tổng hợp Formant **Web Audio API** và `SpeechSynthesis` (`de-DE`) tích hợp sẵn.

Xem thêm [CONTRIBUTING.md](CONTRIBUTING.md) nếu bạn muốn đóng góp cho dự án!
