# BQP SALAGARDEN

Website giới thiệu sản phẩm pháo hoa Z121 chính hãng và dịch vụ tư vấn, trình diễn
pháo hoa sự kiện của BQP SALAGARDEN. Ứng dụng dùng Next.js App Router, TypeScript,
Tailwind CSS và Three.js.

## Phát triển

```bash
npm ci
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000). Trang chi tiết sản phẩm có dạng
`/san-pham/[slug]`; dữ liệu catalog nằm trong `data/salagardenData.ts`.

## Kiểm tra và triển khai

```bash
npm ci
npm run lint
npm run build
npm run start
```

Dự án dùng npm và `package-lock.json`; không dùng pnpm để cài dependency hoặc build.

`npm run build` tạo bản Next.js standalone và sao chép `public/` cùng `.next/static/`
vào `.next/standalone/`. `npm start` chạy máy chủ standalone đó; đặt biến môi trường
`PORT` và `HOSTNAME` theo cấu hình máy chủ VPS khi cần. Máy chủ cần Node.js
`>=20.9.0`; sau khi build, có thể chạy standalone bằng
`node .next/standalone/server.js`.

Trên VPS, cấu hình DNS cho tên miền trỏ về địa chỉ IP máy chủ, sau đó dùng reverse
proxy như Nginx để chuyển HTTPS về cổng Next.js. Cấp chứng chỉ TLS cho cả tên miền
chính và `www` nếu sử dụng cả hai; cấu hình DNS/TLS không được tự động tạo bởi
`next.config.ts`.

Để gửi yêu cầu báo giá qua email, cấu hình các biến môi trường runtime
`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` và
`QUOTE_EMAIL_TO`. Thông thường SMTP cổng `465` dùng `SMTP_SECURE=true`, còn cổng
`587` dùng `SMTP_SECURE=false`. Không đưa thông tin xác thực email vào mã nguồn
hoặc Git.

Biểu mẫu báo giá gửi yêu cầu đến máy chủ và chuyển tiếp qua email SMTP. Nếu email
chưa cấu hình hoặc gửi thất bại, biểu mẫu sẽ thông báo lỗi và hướng dẫn khách hàng
gọi hotline hoặc nhắn Zalo.
