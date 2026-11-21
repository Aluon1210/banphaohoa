import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BQP SALAGARDEN | Pháo hoa Z121 & Trình diễn sự kiện",
    template: "%s | BQP SALAGARDEN",
  },
  description:
    "Phân phối pháo hoa Bộ Quốc phòng chính hãng từ Nhà máy Z121, tư vấn trình diễn sự kiện chuyên nghiệp tại Huế, Đà Nẵng và toàn quốc.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi">
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
