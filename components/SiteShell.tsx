"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import { company, stores } from "@/data/salagardenData";

const navigation = [
  { label: "Giới Thiệu", href: "/#gioi-thieu" },
  { label: "Sản Phẩm Z121", href: "/#san-pham" },
  { label: "Sự Kiện Thực Tế", href: "/#du-an" },
  { label: "Cửa Hàng & Báo Giá", href: "/#bao-gia" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner page-wrap">
        <Link aria-label="Cửa hàng Pháo hoa Z121 — Trang chủ" className="brand-lockup" href="/">
          <span aria-hidden="true" className="brand-mark">S</span>
          <span className="brand-name">
            <strong>CỬA HÀNG PHÁO HOA Z121</strong>
            <small>HUẾ · ĐÀ NẴNG</small>
          </span>
        </Link>

        <nav aria-label="Điều hướng chính" className="desktop-nav">
          {navigation.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-purchase" href="/#bao-gia">
          Đặt mua ngay
        </Link>

        <a
          aria-label={`Gọi ngay Hotline ${company.phone}`}
          className="header-call"
          href={`tel:${company.phoneLink}`}
        >
          <Phone aria-hidden="true" size={16} strokeWidth={2.2} />
          <span>{company.phone}</span>
        </a>

        <details className="mobile-nav">
          <summary aria-label="Mở menu điều hướng">
            <span aria-hidden="true" className="menu-lines">
              <i /><i />
            </span>
          </summary>
          <nav aria-label="Điều hướng trên thiết bị di động">
            <Link className="mobile-purchase-link" href="/#bao-gia">
              Đặt mua ngay
              <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
            {navigation.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
                <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            ))}
            <a className="mobile-call-link" href={`tel:${company.phoneLink}`}>
              <Phone aria-hidden="true" size={15} />
              Gọi Hotline {company.phone}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-main">
        {/* Column 1: Brand & Philosophy */}
        <div className="footer-col-brand" data-scroll-reveal="up">
          <Link aria-label="Cửa hàng Pháo hoa Z121 — Trang chủ" className="brand-lockup" href="/">
            <span aria-hidden="true" className="brand-mark">S</span>
            <span className="brand-name">
              <strong>CỬA HÀNG PHÁO HOA Z121</strong>
              <small>HUẾ · ĐÀ NẴNG</small>
            </span>
          </Link>
          <p className="footer-legal-name">{company.name}</p>
          <p className="footer-motto">“{company.motto}”</p>
          <p className="footer-philosophy">{company.philosophy}</p>
          <div className="footer-cert">
            <ShieldCheck aria-hidden="true" size={16} />
            <span>MST: <strong>{company.taxCode}</strong> · Cấp phép bởi Sở Tài Chính TP. Đà Nẵng</span>
          </div>
        </div>

        {/* Column 2: Branches */}
        <div className="footer-col-stores" data-scroll-reveal="up">
          <p className="footer-col-title">HỆ THỐNG CỬA HÀNG CHÍNH THỨC</p>
          {stores.map((store) => (
            <div className="footer-store-item" key={store.number}>
              <strong>{store.name}</strong>
              <p><MapPin aria-hidden="true" size={14} /> {store.address}</p>
            </div>
          ))}
          <p className="footer-warehouse-badge">
            Kho lưu trữ đạt chuẩn PCCC: <strong>{company.warehouseArea}</strong> tại Huế & Đà Nẵng
          </p>
        </div>

        {/* Column 3: Contact & Hotline */}
        <div className="footer-col-contact" data-scroll-reveal="up">
          <p className="footer-col-title">LIÊN HỆ TRỰC TIẾP</p>
          <a className="footer-hotline" href={`tel:${company.phoneLink}`}>
            <Phone aria-hidden="true" size={16} /> {company.phone}
          </a>
          <a className="footer-email" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <div className="footer-rep">
            <span>Đại diện pháp luật:</span>
            <strong>{company.representative} – {company.role}</strong>
            <small>{company.roleAffiliation}</small>
          </div>
        </div>
      </div>

      <div className="page-wrap footer-bottom">
        <span>© 2026 BQP SALAGARDEN. Bản quyền thuộc về CÔNG TY TNHH TỔ CHỨC SỰ KIỆN PHÁO HOA BQP SALAGARDEN.</span>
        <span>Phân phối pháo hoa Nhà máy Z121 – Bộ Quốc phòng (GAET)</span>
      </div>
    </footer>
  );
}
