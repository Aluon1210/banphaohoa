import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Flame,
  HeartHandshake,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Warehouse,
} from "lucide-react";
import { EventsSection } from "@/components/EventsSection";
import { FireworksLayer } from "@/components/FireworksLayer";
import { FloatingContact } from "@/components/FloatingContact";
import { ProductSection } from "@/components/ProductSection";
import { QuoteForm } from "@/components/QuoteForm";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { company, coreValues, events, stores } from "@/data/salagardenData";

export default function Home() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck size={26} />,
    Award: <Award size={26} />,
    HeartHandshake: <HeartHandshake size={26} />,
    Flame: <Flame size={26} />,
  };

  return (
    <>
      <SiteHeader />
      <main>
        {/* SECTION 1: STICKY NAVBAR & HERO BANNER (Nền Đỏ đô #970019 + Hiệu ứng Pháo hoa 3D) */}
        <section className="hero-section" id="trang-chu">
          <FireworksLayer />
          <div className="hero-pattern-overlay" />

          <div className="page-wrap hero-layout">
            <div className="hero-copy" data-scroll-reveal="up">
              <h1>
                <span>CÔNG TY TNHH TỔ CHỨC SỰ KIỆN PHÁO HOA</span>
                <em className="hero-brand-name">BQP SALAGARDEN</em>
              </h1>

              <div className="hero-badge">
                <span className="hero-badge-dot" />
                <BadgeCheck aria-hidden="true" size={17} />
                <span>HỒ SƠ NĂNG LỰC • PHÂN PHỐI CHÍNH HÃNG BỘ QUỐC PHÒNG (Z121)</span>
              </div>

              <div className="hero-motto-wrap">
                <Sparkles aria-hidden="true" className="motto-spark" size={18} />
                <span className="motto-text">KIM CHỈ NAM: “{company.motto}”</span>
                <Sparkles aria-hidden="true" className="motto-spark" size={18} />
              </div>

              <p className="hero-intro">
                Phân phối pháo hoa Bộ Quốc phòng từ Nhà máy Z121 – GAET; tư vấn, thiết kế trình diễn pháo hoa nghệ thuật tại <strong>TP. Huế và TP. Đà Nẵng</strong>.
              </p>

              <div className="hero-actions">
                <a className="button button-gold hero-btn-primary" href="#san-pham">
                  <span>Xem Danh Mục Pháo Hoa Z121</span>
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
                <a className="button button-outline hero-btn-secondary" href="#bao-gia">
                  <span>Tư Vấn Trình Diễn Sự Kiện</span>
                  <ChevronRight aria-hidden="true" size={17} />
                </a>
              </div>

              <div className="hero-scroll-wrap">
                <a className="hero-scroll" href="#gioi-thieu">
                  <span>Khám phá hồ sơ năng lực & pháp lý</span>
                  <ArrowDown aria-hidden="true" size={15} />
                </a>
              </div>
            </div>

            {/* Hero Image Frame with Royal Gold Border & Badge */}
            <div className="hero-image-frame" data-scroll-reveal="right">
              <Image
                alt="Màn trình diễn pháo hoa nghệ thuật tại sự kiện Đại học Nghệ thuật, Đại học Huế"
                className="hero-image"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 46vw"
                src="/images/pdf-p10-2.png"
              />
              <div className="hero-image-overlay" />
              <div className="hero-image-caption">
                <span className="caption-tag">DẤU ẤN TRÌNH DIỄN NGHỆ THUẬT</span>
                <strong>15.11.2026 · ĐẠI HỌC NGHỆ THUẬT (ĐẠI HỌC HUẾ)</strong>
                <p>Khảo sát trận địa, kịch bản đồng bộ âm thanh ánh sáng và bắn pháo hoa an toàn.</p>
              </div>
              <div aria-hidden="true" className="hero-photo-seal">
                <Sparkles size={20} strokeWidth={1.5} />
                <span>HUẾ<br />·<br />ĐÀ NẴNG</span>
              </div>
            </div>
          </div>

          {/* 4 THẺ CHỈ SỐ THỰC TẾ (KEY METRICS) */}
          <div aria-label="Năng lực thực tế SALAGARDEN" className="page-wrap hero-metrics-container" data-scroll-reveal="up">
            <div className="hero-metrics-grid">
              <div className="metric-card">
                <div className="metric-icon-wrap">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Pháo Hoa BQP Z121 Chính Hãng</span>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-icon-wrap">
                  <Warehouse size={22} />
                </div>
                <div>
                  <strong>500 m²</strong>
                  <span>Hệ Thống Kho Lưu Trữ Đạt Chuẩn</span>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-icon-wrap">
                  <Building2 size={22} />
                </div>
                <div>
                  <strong>02 Cơ Sở</strong>
                  <span>Huế & Đà Nẵng</span>
                </div>
              </div>

              <div className="metric-card">
                <div className="metric-icon-wrap">
                  <PackageCheck size={22} />
                </div>
                <div>
                  <strong>Toàn Quốc</strong>
                  <span>Phạm Vi Giao Hàng</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: GIỚI THIỆU, GIÁ TRỊ CỐT LÕI & HỒ SƠ PHÁP LÝ (Nền Trắng kem #FFFAF1) */}
        <section className="intro-section section-pad" id="gioi-thieu">
          <div className="page-wrap intro-layout">
            {/* Cột trái (7 cột): Triết lý kinh doanh, năng lực kho bãi 500m2, 4 Giá trị cốt lõi */}
            <div className="intro-copy" data-scroll-reveal="left">
              <h2>Chất lượng tạo nên thương hiệu.<br />Uy tín tạo nên thành công.</h2>

              <p className="lead-copy">
                CÔNG TY TNHH TỔ CHỨC SỰ KIỆN PHÁO HOA BQP SALAGARDEN phân phối pháo hoa Bộ Quốc phòng từ Nhà máy Z121 – GAET, đồng thời tư vấn, thiết kế trình diễn pháo hoa sự kiện.
              </p>

              <p>
                Với kho lưu trữ diện tích <strong>{company.warehouseArea}</strong> và phương tiện vận chuyển chuyên dụng, công ty tuân thủ các quy định an toàn phòng cháy chữa cháy, hỗ trợ giao hàng tại TP. Huế, TP. Đà Nẵng và tư vấn phương án trình diễn trên toàn quốc.
              </p>

              {/* 4 Thẻ Giá Trị Cốt Lõi: UY TÍN, CHẤT LƯỢNG, TẬN TÂM, AN TOÀN */}
              <div className="values-grid">
                {coreValues.map((value) => (
                  <div
                    className="value-card"
                    data-scroll-reveal="up"
                    key={value.title}
                  >
                    <div className="value-icon-header">
                      <div className="value-icon">
                        {iconMap[value.icon] || <ShieldCheck size={26} />}
                      </div>
                      <span className="value-subtitle">{value.subtitle}</span>
                    </div>
                    <strong>{value.title}</strong>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột phải (5 cột): Card Hồ Sơ Pháp Lý nền Đỏ đô #970019 viền Gold #D9B45B */}
            <aside aria-label="Hồ sơ pháp lý doanh nghiệp" className="legal-card" data-scroll-reveal="right">
              <div className="legal-card-header">
                <div className="legal-seal-badge">
                  <ShieldCheck aria-hidden="true" size={20} />
                  <span>HỒ SƠ PHÁP LÝ DOANH NGHIỆP</span>
                </div>
                <span className="legal-number">01 — 06</span>
              </div>

              <h3>{company.name}</h3>

              <dl className="legal-list">
                <div className="legal-row highlight">
                  <dt>Mã số doanh nghiệp / MST</dt>
                  <dd className="legal-mst-pill">
                    <span>{company.taxCode}</span>
                    <BadgeCheck size={16} />
                  </dd>
                </div>
                <div className="legal-row">
                  <dt>Cơ quan cấp phép</dt>
                  <dd>{company.registration}</dd>
                </div>
                <div className="legal-row">
                  <dt>Vốn điều lệ</dt>
                  <dd className="legal-capital">{company.capital}</dd>
                </div>
                <div className="legal-row">
                  <dt>Trụ sở chính</dt>
                  <dd>{company.headOffice}</dd>
                </div>
                <div className="legal-row">
                  <dt>Người đại diện pháp luật</dt>
                  <dd>
                    <strong>{company.representative}</strong> — {company.role}
                  </dd>
                </div>
                <div className="legal-row">
                  <dt>Tổ chức thành viên</dt>
                  <dd className="legal-affiliation">{company.roleAffiliation}</dd>
                </div>
              </dl>

              <div className="legal-card-footer">
                <div className="legal-seal">
                  <Award aria-hidden="true" size={18} />
                  <span>Kinh doanh pháo hoa hợp pháp theo Nghị định 137/2020/NĐ-CP của Chính phủ</span>
                </div>
                <a className="button button-gold legal-cta" href="#bao-gia">
                  <span>Liên Hệ Nhận Báo Giá Ngay</span>
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* TRUST STRIP — after hero */}
        <div className="trust-strip">
          <div className="trust-strip-inner page-wrap">
            <div className="trust-item" data-scroll-reveal="up">
              <span className="trust-item-icon"><ShieldCheck size={20} /></span>
              <span className="trust-item-copy">
                <strong>Nhà máy Z121 – BQP</strong>
                <small>Phân phối chính hãng</small>
              </span>
            </div>
            <div className="trust-item" data-scroll-reveal="up">
              <span className="trust-item-icon"><BadgeCheck size={20} /></span>
              <span className="trust-item-copy">
                <strong>MST 0402356447</strong>
                <small>Hợp pháp theo NĐ 137/2020/NĐ-CP</small>
              </span>
            </div>
            <div className="trust-item" data-scroll-reveal="up">
              <span className="trust-item-icon"><PackageCheck size={20} /></span>
              <span className="trust-item-copy">
                <strong>Kho 500 m²</strong>
                <small>Chuẩn PCCC · Giao toàn quốc</small>
              </span>
            </div>
            <div className="trust-item" data-scroll-reveal="up">
              <span className="trust-item-icon"><Star size={20} /></span>
              <span className="trust-item-copy">
                <strong>5 sự kiện tiêu biểu</strong>
                <small>Đại học Huế · 2025–2026</small>
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 3: DANH MỤC SẢN PHẨM PHÁO HOA Z121 & DỊCH VỤ (Nền Trắng kem #FFFAF1) */}
        <ProductSection />

        {/* SECTION 4: CÁC DỰ ÁN & SỰ KIỆN ĐÃ THỰC HIỆN (Nền Đỏ đô #970019 chữ Trắng kem #FFFAF1) */}
        <EventsSection />

        {/* GALLERY STRIP — real-event photo mosaic */}
        <section className="gallery-strip-section" aria-label="Thư viện ảnh sự kiện">
          <div className="gallery-strip-header page-wrap" data-scroll-reveal="up">
            <div className="section-label" style={{ justifyContent: "center" }}>
              <Sparkles size={15} aria-hidden="true" />
              <span>THƯ VIỆN HÌNH ẢNH THỰC TẾ</span>
            </div>
            <h2>Khoảnh Khắc Rực Rỡ Từ Các Sự Kiện</h2>
            <p>Hình ảnh chụp thực tế tại các chương trình đã triển khai — cam kết chất lượng bằng bằng chứng thực tế.</p>
          </div>
          <div className="gallery-scroll-track">
            {events.map((item, i) => (
              <div
                className="gallery-scroll-item"
                data-scroll-reveal="up"
                key={item.image + i}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="gallery-scroll-img"
                  sizes="280px"
                />
                <div className="event-photo-overlay" />
                <span className="event-photo-tag" style={{ top: "auto", bottom: "12px", left: "12px", fontSize: "10px" }}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: HỆ THỐNG CỬA HÀNG & FORM ĐẶT HÀNG NHANH (Nền Trắng kem #FFFAF1) */}
        <section className="contact-section section-pad" id="bao-gia">
          <div className="page-wrap contact-layout">
            {/* Cột trái: Hệ thống 2 cơ sở chính thức */}
            <div className="contact-copy" data-scroll-reveal="left">
              <div className="section-label">
                <Sparkles aria-hidden="true" size={15} />
                <span>HỆ THỐNG ĐIỂM BÁN & KHO HÀNG TRỰC TIẾP</span>
              </div>

              <h2>Điểm Đến Chính Thức<br />Tại TP. Huế & TP. Đà Nẵng</h2>

              <p className="contact-intro">
                Quý khách có thể đến hai cửa hàng để xem mẫu sản phẩm, đối chiếu tem QR Z121 và nhận tư vấn hoặc gọi điện để trao đổi phương án giao hàng.
              </p>

              {/* 2 Flagship Store Cards */}
              <div className="store-cards-grid">
                {stores.map((store) => (
                  <div className="store-card" key={store.number}>
                    <div className="store-card-top">
                      <span className="store-pill">CƠ SỞ {store.number}</span>
                      <span className="store-badge-type">{store.type}</span>
                    </div>
                    <h3>{store.name}</h3>
                    <p className="store-address">
                      <MapPin aria-hidden="true" size={17} />
                      <span>{store.address}</span>
                    </p>
                    <div className="store-card-actions">
                      <a
                        className="store-map-link"
                        href={store.mapLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>Chỉ đường trên Google Maps</span>
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Box */}
              <div className="contact-direct-grid">
                <div className="contact-box">
                  <div className="contact-box-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="contact-box-label">HOTLINE / ZALO</span>
                    <a className="contact-box-value" href={`tel:${company.phoneLink}`}>
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="contact-box-icon">
                    <Warehouse size={22} />
                  </div>
                  <div>
                    <span className="contact-box-label">KHO CHUẨN AN TOÀN PCCC</span>
                    <strong className="contact-box-value">500 m² · Huế & Đà Nẵng</strong>
                  </div>
                </div>
              </div>

              <div className="contact-email-card">
                <Mail aria-hidden="true" size={18} />
                <div>
                  <span className="email-label">Email hỗ trợ dự án & báo giá số lượng lớn:</span>
                  <a className="email-link" href={`mailto:${company.email}`}>
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="contact-proof-pills">
                <div className="proof-pill">
                  <PackageCheck size={16} />
                  <span>100% Chính Hãng Nhà Máy Z121</span>
                </div>
                <div className="proof-pill">
                  <Building2 size={16} />
                  <span>02 Điểm Bán Trực Tiếp Huế & Đà Nẵng</span>
                </div>
                <div className="proof-pill">
                  <CheckCircle2 size={16} />
                  <span>Xuất Hóa Đơn VAT Đầy Đủ</span>
                </div>
              </div>
            </div>

            {/* Cột phải: Form Đặt Hàng & Báo Giá Trực Tuyến */}
            <QuoteForm />
          </div>
        </section>

      </main>

      <SiteFooter />
      <FloatingContact />
    </>
  );
}
