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
import { HeroMosaicMotion } from "@/components/HeroMosaicMotion";
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
          <HeroMosaicMotion />

          <div className="page-wrap hero-layout px-3 px-md-0">
            <div className="hero-copy">
              <h1 className="hero-enter hero-enter-left">
                <span>CỬA HÀNG PHÁO HOA SỐ 50 — TP. ĐÀ NẴNG</span>
                <span>CỬA HÀNG PHÁO HOA SỐ 3 — TP. HUẾ</span>
              </h1>

              <div className="hero-badge hero-enter hero-enter-left">
                <span className="hero-badge-dot" />
                <BadgeCheck aria-hidden="true" size={17} />
                <span>HỒ SƠ NĂNG LỰC • PHÂN PHỐI CHÍNH HÃNG BỘ QUỐC PHÒNG (Z121)</span>
              </div>

              <div className="hero-motto-wrap hero-enter hero-enter-left">
                <Sparkles aria-hidden="true" className="motto-spark" size={18} />
                <span className="motto-text">KIM CHỈ NAM: “{company.motto}”</span>
                <Sparkles aria-hidden="true" className="motto-spark" size={18} />
              </div>

              <p className="hero-intro hero-enter hero-enter-left">
                <strong>Cửa hàng Pháo hoa Số 50 – TP. Đà Nẵng:</strong> 405 Lê Văn Hiến, phường Ngũ Hành Sơn.<br />
                <strong>Cửa hàng Pháo hoa Số 3 – TP. Huế:</strong> CM2-22 Lê Đức Anh, khu đô thị EcoGarden.
                Hai cửa hàng phân phối pháo hoa chính hãng Bộ Quốc phòng Z121.
              </p>

              <div className="hero-actions hero-enter hero-enter-left">
                <a className="button button-gold hero-btn-primary" href="#san-pham">
                  <span>Xem Danh Mục Pháo Hoa Z121</span>
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
                <a className="button button-outline hero-btn-secondary" href="#bao-gia">
                  <span>Tư Vấn Trình Diễn Sự Kiện</span>
                  <ChevronRight aria-hidden="true" size={17} />
                </a>
              </div>

              <div className="hero-scroll-wrap hero-enter hero-enter-left">
                <a className="hero-scroll" href="#gioi-thieu">
                  <span>Khám phá hồ sơ năng lực & pháp lý</span>
                  <ArrowDown aria-hidden="true" size={15} />
                </a>
              </div>
            </div>

              <div className="hero-diamond-mosaic" data-hero-mosaic aria-label="Hình ảnh thực tế kho hàng và sự kiện">
                <svg className="hero-diamond-outer-frame" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroDiamondAmber" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF3B0" />
                      <stop offset="20%" stopColor="#D9B45B" />
                      <stop offset="48%" stopColor="#A86216" />
                      <stop offset="68%" stopColor="#F2C66D" />
                      <stop offset="86%" stopColor="#FFF1A6" />
                      <stop offset="100%" stopColor="#C58A2D" />
                      <animate attributeName="x1" values="-35%; -10%; -35%" dur="5s" repeatCount="indefinite" />
                      <animate attributeName="x2" values="65%; 110%; 65%" dur="5s" repeatCount="indefinite" />
                    </linearGradient>
                  </defs>
                  <polygon points="50,1.2 98.8,50 50,98.8 1.2,50" />
                </svg>
                <figure className="hero-diamond hero-diamond-top">
                  <Image
                    alt="Cơ sở kho hàng BQP SALAGARDEN"
                    fill
                    sizes="310px"
                    src="/media/danang/danang-2.jpg"
                  />
                </figure>
                <figure className="hero-diamond hero-diamond-right">
                  <Image
                    alt="Sản phẩm và kho hàng tại cơ sở"
                    fill
                    sizes="310px"
                    src="/media/hue/hue-1.jpg"
                  />
                </figure>
                <figure className="hero-diamond hero-diamond-bottom">
                  <Image
                    alt="Trình diễn pháo hoa thực tế"
                    fill
                    sizes="310px"
                    src="/media/info/arts-university-2026.jpg"
                  />
                </figure>
                <figure className="hero-diamond hero-diamond-left">
                  <Image
                    alt="Sự kiện chào đón tân sinh viên"
                    fill
                    sizes="310px"
                    src="/images/pdf-p9-17.png"
                  />
                </figure>
                <div className="hero-diamond-seal" aria-hidden="true">
                  <Sparkles size={18} />
                  <span>HUẾ · ĐÀ NẴNG</span>
                </div>
              </div>

          </div>

          {/* 4 THẺ CHỈ SỐ THỰC TẾ (KEY METRICS) */}
          <div aria-label="Năng lực hai cửa hàng pháo hoa" className="page-wrap hero-metrics-container">
            <div className="hero-metrics-grid">
              <div className="metric-card hero-metric-enter">
                <div className="metric-icon-wrap">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Pháo Hoa BQP Z121 Chính Hãng</span>
                </div>
              </div>

              <div className="metric-card hero-metric-enter">
                <div className="metric-icon-wrap">
                  <Warehouse size={22} />
                </div>
                <div>
                  <strong>500 m²</strong>
                  <span>Hệ Thống Kho Lưu Trữ Đạt Chuẩn</span>
                </div>
              </div>

              <div className="metric-card hero-metric-enter">
                <div className="metric-icon-wrap">
                  <Building2 size={22} />
                </div>
                <div>
                  <strong>02 Cơ Sở</strong>
                  <span>Huế & Đà Nẵng</span>
                </div>
              </div>

              <div className="metric-card hero-metric-enter">
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
        {/* SECTION 2: Product catalog */}
        <ProductSection />

        <section className="intro-section section-pad" id="gioi-thieu">
          <div className="page-wrap intro-layout px-3 px-md-0">
            {/* Cột trái (7 cột): Triết lý kinh doanh, năng lực kho bãi 500m2, 4 Giá trị cốt lõi */}
            <div className="intro-copy" data-scroll-reveal="left">
              <h2 className="section-title">Chất lượng tạo nên thương hiệu.<br />Uy tín tạo nên thành công.</h2>

              <p className="lead-copy">
                Hệ thống Cửa hàng Pháo hoa Số 50 tại TP. Đà Nẵng và Cửa hàng Pháo hoa Số 3 tại TP. Huế chuyên phân phối pháo hoa chính hãng Bộ Quốc phòng từ Nhà máy Z121 – GAET.
              </p>

              <p>
                Với kho lưu trữ diện tích <strong>{company.warehouseArea}</strong> và phương tiện vận chuyển chuyên dụng, hai cửa hàng tuân thủ các quy định an toàn phòng cháy chữa cháy và hỗ trợ giao hàng tại TP. Huế, TP. Đà Nẵng cũng như các địa phương khác theo thỏa thuận.
              </p>

              {/* 4 Thẻ Giá Trị Cốt Lõi: UY TÍN, CHẤT LƯỢNG, TẬN TÂM, AN TOÀN */}
              <div className="values-grid">
                {coreValues.map((value, idx) => (
                  <div
                    className="value-card"
                    data-scroll-reveal={idx % 2 === 0 ? "diagonal-left" : "diagonal-right"}
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

              <div className="legal-representative">
                <Image
                  alt={`Chân dung ${company.representative}, đại diện pháp luật`}
                  fill
                  sizes="124px"
                  src="/media/info/representative.jpg"
                />
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
        {/* SECTION 4: CÁC DỰ ÁN & SỰ KIỆN ĐÃ THỰC HIỆN (Nền Đỏ đô #970019 chữ Trắng kem #FFFAF1) */}
        <EventsSection />

        {/* GALLERY STRIP — real-event photo mosaic */}
        <section className="gallery-strip-section" aria-label="Thư viện ảnh sự kiện">
          <div className="gallery-strip-header page-wrap" data-scroll-reveal="up">
            <div className="section-label" style={{ justifyContent: "center" }}>
              <Sparkles size={15} aria-hidden="true" />
              <span>THƯ VIỆN HÌNH ẢNH THỰC TẾ</span>
            </div>
            <h2 className="section-title section-title-centered">Khoảnh Khắc Rực Rỡ Từ Các Sự Kiện</h2>
            <p>Hình ảnh chụp thực tế tại các chương trình đã triển khai — cam kết chất lượng bằng bằng chứng thực tế.</p>
          </div>
          <div className="gallery-scroll-track">
            {events.map((item, i) => (
              <div
                className="gallery-scroll-item"
                data-scroll-reveal={i % 2 === 0 ? "scale" : "diagonal-right"}
                data-reveal-sequence="image"
                key={item.image + i}
              >
                <div className="gallery-scroll-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="gallery-scroll-img"
                    sizes="280px"
                  />
                </div>
                <div className="gallery-scroll-caption">
                  <strong>{item.title}</strong>
                  <span>{item.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4B: MEDIA HỒ SƠ — chứng nhận, kho hàng và video thực tế */}
        <section className="media-proof-section section-pad" aria-label="Hồ sơ minh bạch và kho hàng">
          <div className="page-wrap">
            <div className="media-proof-heading">
              <div>
                <h2 className="section-title">Hồ Sơ Minh Bạch.<br />Kho Hàng Tại Thực Địa.</h2>
              </div>
              <p>Thông tin pháp lý, chứng nhận đồng hành và hình ảnh kho hàng được sử dụng trực tiếp trên website.</p>
            </div>

            <div className="credibility-proof">
              <figure className="credibility-event">
                <a href="/media/info/yba-danang.jpg" target="_blank" rel="noreferrer" aria-label="Xem ảnh buổi gặp mặt hội viên doanh nhân trẻ Đà Nẵng">
                  <Image
                    alt="Buổi gặp mặt hội viên doanh nhân trẻ tại Đà Nẵng"
                    fill
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    src="/media/info/yba-danang.jpg"
                  />
                </a>
                <figcaption>
                  <strong>Gắn kết cùng cộng đồng doanh nhân</strong>
                  <span>Hình ảnh buổi gặp mặt hội viên doanh nhân trẻ Đà Nẵng</span>
                </figcaption>
              </figure>
              <div className="credibility-documents">
                <h3>Hồ sơ &amp; dấu ấn thực tế</h3>
                <p>Hình ảnh và giấy tờ pháp lý của CÔNG TY TNHH TỔ CHỨC SỰ KIỆN PHÁO HOA BQP SALAGARDEN.</p>
                <a href="/media/info/business-registration.pdf" target="_blank" rel="noreferrer">
                  <span><strong>Đăng ký doanh nghiệp</strong><small>Xem hồ sơ pháp lý của công ty</small></span>
                  <ArrowUpRight aria-hidden="true" size={20} />
                </a>
                <a href="/media/info/foreign-language-certificate.jpg" target="_blank" rel="noreferrer">
                  <span><strong>Chứng nhận sự kiện</strong><small>Hình ảnh tại Đại học Ngoại ngữ, Đại học Huế</small></span>
                  <ArrowUpRight aria-hidden="true" size={20} />
                </a>
              </div>
            </div>

            <div className="media-proof-grid">
              <figure className="media-video">
                <video
                  aria-label="Video quay cảnh bốc hàng tại kho"
                  controls
                  width={1280}
                  height={720}
                  playsInline
                  preload="metadata"
                >
                  <source src="/media/video/warehouse-loading.mp4" type="video/mp4" />
                  Trình duyệt của quý khách không hỗ trợ phát video.
                </video>
                <figcaption className="media-video-caption">
                  <strong>Cảnh bốc xếp hàng tại kho</strong>
                  <span>Hình ảnh thực tế tại kho hàng</span>
                </figcaption>
              </figure>

              <figure className="media-video">
                <video
                  controls
                  width={1280}
                  height={720}
                  playsInline
                  poster="/media/video/show-cover.jpg"
                  preload="metadata"
                >
                  <source src="/media/video/showreel.mp4" type="video/mp4" />
                  Trình duyệt của quý khách không hỗ trợ phát video.
                </video>
                <figcaption className="media-video-caption">
                  <strong>Màn trình diễn pháo hoa thực tế</strong>
                  <span>Khoảnh khắc nghệ thuật tại sự kiện</span>
                </figcaption>
              </figure>
            </div>

            <div className="warehouse-grid" aria-label="Hình ảnh kho hàng tại Huế và Đà Nẵng">
              <div className="warehouse-location-column">
                {[1, 2, 3, 5, 6, 7].map((index) => (
                  <figure className="warehouse-shot" key={`hue-${index}`}>
                    <Image
                      alt={`Kho hàng cơ sở Huế - hình ${index}`}
                      fill
                      sizes="(max-width: 760px) 50vw, 180px"
                      src={`/media/hue/hue-${index}.jpg`}
                    />
                    {index === 1 && <figcaption>Kho Huế</figcaption>}
                  </figure>
                ))}
              </div>
              <div className="warehouse-location-column">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <figure className="warehouse-shot" key={`danang-${index}`}>
                    <Image
                      alt={`Kho hàng cơ sở Đà Nẵng - hình ${index}`}
                      fill
                      sizes="(max-width: 760px) 50vw, 180px"
                      src={`/media/danang/danang-${index}.jpg`}
                    />
                    {index === 1 && <figcaption>Kho Đà Nẵng</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: HỆ THỐNG CỬA HÀNG & FORM ĐẶT HÀNG NHANH (Nền Trắng kem #FFFAF1) */}
        <section className="contact-section section-pad" id="bao-gia">
          <div className="page-wrap contact-layout px-3 px-md-0">
            <header className="contact-heading" data-scroll-reveal="up">
              <h2 className="section-title section-title-centered">Điểm Đến Chính Thức<br />Tại TP. Huế & TP. Đà Nẵng</h2>
              <p>
                Quý khách có thể đến hai cửa hàng để xem mẫu sản phẩm, đối chiếu tem QR Z121 và nhận tư vấn hoặc gọi điện để trao đổi phương án giao hàng.
              </p>
            </header>

            {/* Cột trái: Hệ thống 2 cơ sở chính thức */}
            <div className="contact-copy" data-scroll-reveal="left">
              {/* 2 Flagship Store Cards */}
              <div className="store-cards-grid">
                {stores.map((store) => (
                  <div className="store-card" data-scroll-reveal={store.number === "01" ? "diagonal-left" : "diagonal-right"} data-reveal-sequence="image" key={store.number}>
                    <div className="store-card-image">
                      <Image
                        alt={store.name}
                        fill
                        sizes="(max-width: 760px) 100vw, 280px"
                        src={store.image}
                      />
                    </div>
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
