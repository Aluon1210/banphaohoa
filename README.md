# BQP SALAGARDEN

Website giới thiệu sản phẩm pháo hoa Z121 chính hãng và dịch vụ tư vấn, trình diễn
pháo hoa sự kiện của BQP SALAGARDEN. Ứng dụng dùng Next.js App Router, TypeScript,
Tailwind CSS và Three.js.

## Phát triển

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000). Trang chi tiết sản phẩm có dạng
`/san-pham/[slug]`; dữ liệu catalog nằm trong `data/salagardenData.ts`.

## Kiểm tra và triển khai

```bash
npm run lint
npm run build
npm start
```

`npm run build` tạo bản Next.js standalone và sao chép `public/` cùng `.next/static/`
vào `.next/standalone/`. `npm start` chạy máy chủ standalone đó; đặt biến môi trường
`PORT` và `HOSTNAME` theo cấu hình máy chủ VPS khi cần.

Biểu mẫu báo giá hiện chỉ xác thực và hiển thị thông báo trên trình duyệt, chưa gửi
dữ liệu đến máy chủ. Khách hàng được hướng dẫn gọi hotline để xác nhận yêu cầu.
