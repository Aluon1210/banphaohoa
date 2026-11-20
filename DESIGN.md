# DESIGN SYSTEM — BQP SALAGARDEN

Hệ thống thiết kế giao diện thương hiệu cho **CÔNG TY TNHH TỔ CHỨC SỰ KIỆN PHÁO HOA BQP SALAGARDEN**.

---

## 1. Bảng Màu Thương Hiệu (Brand Palette)

Áp dụng bộ 3 mã màu chuẩn mực để tôn vinh nét đẹp uy nghiêm, truyền thống lễ hội của dòng pháo hoa Bộ Quốc phòng và sự sang trọng của nghệ thuật ánh sáng:

| Vai trò | Tên màu | Mã HEX | Mô tả & Cách ứng dụng |
| :--- | :--- | :--- | :--- |
| **Primary** | **Đỏ đô (Crimson Red)** | `#970019` | Nền Hero Banner, nền Hồ sơ pháp lý, các khối điểm nhấn quyền uy, thẻ cam kết chính hãng Z121, footer. |
| **Luxury Accent** | **Vàng Gold (Luxury Accent Gold)** | `#D9B45B` | Viền khung ánh kim (`border-[#D9B45B]`), tiêu đề nổi bật, icon điểm nhấn, nút hành động CTA chính (`bg-[#D9B45B] text-[#970019]`), thông số kỹ thuật. |
| **Background / Text** | **Trắng kem (Warm Cream White)** | `#FFFAF1` | Nền các khu vực nội dung đọc nhiều (Giới thiệu, Danh mục sản phẩm, Bảng thông số, Cửa hàng), chữ tương phản trên nền Đỏ đô. |

### Quy tắc tương phản (Contrast Rules)
- **Trên nền Đỏ đô (`#970019`):**
  - Tiêu đề & Icon: **Gold (`#D9B45B`)** hoặc **Trắng kem (`#FFFAF1`)**
  - Văn bản nội dung: **Trắng kem (`#FFFAF1`)** (đạt độ tương phản ≥ 7:1)
  - Viền Card / Divider: `rgba(217, 180, 91, 0.35)` đến `rgba(217, 180, 91, 0.6)`
- **Trên nền Trắng kem (`#FFFAF1` / `#FFFDF8`):**
  - Tiêu đề & Nhãn: **Đỏ đô (`#970019`)** (đạt độ tương phản ≥ 8.5:1)
  - Văn bản nội dung: `#1E1B18` (Ink) hoặc `#5C5549` (Muted Ink)
  - Nút CTA chính: **Đỏ đô (`#970019`)** chữ **Trắng kem (`#FFFAF1`)** viền **Gold (`#D9B45B`)**
  - Nút Hotline: **Gold (`#D9B45B`)** chữ **Đỏ đô (`#970019`)** in đậm

---

## 2. Hệ Thống Typography & Font Chữ

- **Font chữ chính:** `Be Vietnam Pro` (tối ưu tiếng Việt với đầy đủ dấu thanh điệu, hiển thị sắc nét trên Retina & Mobile).
- **Scale tỷ lệ kích thước:**
  - `Hero H1`: `clamp(28px, 3.4vw, 44px)` + `em`: `clamp(44px, 4.8vw, 62px)`
  - `Section H2`: `clamp(30px, 3.6vw, 44px)`
  - `Card Title H3`: `18px - 24px`
  - `Body Copy`: `14px - 15px`, line-height `1.75 - 1.8`
  - `Eyebrow / Badge`: `10px - 11px`, font-weight `700`, letter-spacing `0.12em`

---

## 3. Hiệu Ứng 3D Fireworks (Three.js)

- **Công nghệ:** `@react-three/fiber` & `@react-three/drei` trên nền `three.js`.
- **Mô phỏng vật lý:**
  - Bung tỏa hình cầu 3D đồng đều (Archimedes/Fibonacci sphere projection).
  - Trọng lực thực tế ($g \approx 0.42$) kéo tia sáng rơi xuống như rèm liễu vàng rực rỡ (kamuro / golden willow).
  - Lực cản không khí ($drag = 0.28$) giảm tốc độ tỏa nở tự nhiên.
  - Hiệu ứng nhấp nháy lấp lánh (sparkle twinkle) theo chu kỳ sóng sin.
  - Hạt bụi vàng lơ lửng (`Sparkles`) trôi nhẹ nhàng trong không gian.
- **Tối ưu Production:** Bắt buộc dynamic import `dynamic(() => import('@/components/Fireworks3D'), { ssr: false })` không làm gián đoạn SSR và hoạt động mượt mà trên môi trường Linux VPS `standalone`.

---

## 4. Tối Ưu Chuyển Đổi (CRO - Conversion Rate Optimization)

- **Sticky Header:** Hotline `0395 952 325` luôn trong tầm với của người dùng ở mọi vị trí cuộn.
- **Thẻ Card Sản Phẩm 2 Hành Động:**
  - *Xem Chi Tiết:* Điều hướng sang trang sản phẩm chuyên sâu (`/san-pham/[slug]`).
  - *Nhận Báo Giá:* Cuộn mượt xuống Form và tự động chọn chính xác sản phẩm đó trong dropdown mà không cần tải lại trang.
- **Hồ Sơ Pháp Lý Minh Bạch:** Hiển thị rõ MST `0402356447`, Giám đốc Bùi Thị Lý, Hội viên YBA Danang và 2 địa chỉ kho bãi thực tế, tạo dựng lòng tin tối đa.
- **Form Đặt Hàng Trực Tuyến:** Tối giản 4 trường thiết yếu, phản hồi tức thì với nút kết nối Hotline & Zalo 24/7.
