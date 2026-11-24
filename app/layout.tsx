import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cửa hàng Pháo hoa Số 50 Đà Nẵng & Số 3 Huế",
    template: "%s | Cửa hàng Pháo hoa Z121",
  },
  description:
    "Cửa hàng Pháo hoa Số 50 tại Đà Nẵng và Cửa hàng Pháo hoa Số 3 tại Huế phân phối pháo hoa chính hãng Z121.",
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
