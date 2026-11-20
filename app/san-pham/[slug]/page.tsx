import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Flame,
  Phone,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FloatingContact } from "@/components/FloatingContact";
import { ProductControls } from "@/components/ProductControls";
import { ProductInformation, ProductTrustMarks } from "@/components/ProductInformation";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { company, products } from "@/data/salagardenData";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Không tìm thấy sản phẩm | BQP SALAGARDEN" };
  }

  return {
    title: `${product.name} — Pháo Hoa Bộ Quốc Phòng Z121 Chính Hãng`,
    description: `${product.description} Phân phối chính hãng bởi BQP SALAGARDEN tại Huế & Đà Nẵng. Hotline: 0395 952 325.`,
  };
}

function ProductPageFallback() {
  return (
    <main className="product-page">
      <div className="page-wrap product-detail-loading" aria-live="polite">
        Đang tải thông tin sản phẩm...
      </div>
    </main>
  );
}

async function ProductContent({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const isService = product.category === "service";

  return (
    <>
      <SiteHeader />
      <main className="product-page">
        {/* HEADER & BREADCRUMB */}
        <div className="product-breadcrumb-wrap page-wrap">
          <Link className="back-home" href="/">
            <ArrowLeft aria-hidden="true" size={16} />
            <span>Quay lại Trang chủ</span>
          </Link>
          <nav aria-label="Đường dẫn trang" className="breadcrumb">
            <Link href="/">Trang chủ</Link>
            <ChevronRight aria-hidden="true" size={14} />
            <Link href="/#san-pham">{isService ? "Dịch vụ sự kiện" : "Sản phẩm Z121"}</Link>
            <ChevronRight aria-hidden="true" size={14} />
            <span aria-current="page">{product.name}</span>
          </nav>
        </div>

        {/* KHỐI THÔNG TIN CHÍNH (GRID 2 CỘT 5/7) */}
        <section className="product-detail page-wrap">
          {/* Cột trái: Khung trưng bày aspect-square nền #970019 viền #D9B45B + Badge + 3 Ô cam kết */}
          <div className="product-display" data-scroll-reveal="left">
            <div className="product-display-image">
              <Image
                alt={product.imageAlt}
                className="detail-image"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 42vw"
                src={product.image}
              />
              <div className="product-display-overlay" />
              <div className="genuine-badge">
                <BadgeCheck aria-hidden="true" size={17} />
                <span>{isService ? "DỊCH VỤ SỰ KIỆN CHUYÊN NGHIỆP" : "CHÍNH HÃNG Z121 — BỘ QUỐC PHÒNG"}</span>
              </div>
              <span aria-hidden="true" className="image-corner-label">
                BQP SALAGARDEN · Z121
              </span>
            </div>

            {/* 3 Ô cam kết: Tem QR Z121, Hóa đơn đầy đủ, Giao toàn quốc */}
            <ProductTrustMarks service={isService} />
          </div>

          {/* Cột phải: Tên sản phẩm H1 màu #970019, thông số kỹ thuật, bộ chọn số lượng, 2 nút CTA */}
          <div className="product-summary" data-scroll-reveal="right">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-summary-copy">{product.description}</p>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="product-tags-row">
                {product.tags.map((tag) => (
                  <span className="product-tag-pill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="price-box">
              <span className="price-label">
                {isService ? "BÁO GIÁ TRỌN GÓI THEO QUY MÔ SỰ KIỆN" : "GIÁ PHÂN PHỐI CHÍNH HÃNG BQP"}
              </span>
              <p className="price-value">
                {isService ? "Khảo sát thực địa & Báo giá tối ưu" : "Liên Hệ Báo Giá Chiết Khấu Ưu Đãi"}
              </p>
            </div>

            {!isService && (
              <p className="product-safety-note">
                <Flame size={14} />
                <span>
                  Lưu ý: Sản phẩm pháo hoa dân dụng Z121 sử dụng hợp pháp theo Nghị định 137/2020/NĐ-CP. Chỉ đốt ở khu vực ngoài trời thoáng khí và tuân thủ khoảng cách an toàn.
                </span>
              </p>
            )}

            {/* Bộ chọn số lượng (-) / (+) và 2 Nút hành động */}
            <ProductControls service={isService} slug={product.slug} />

            <div className="product-direct-call">
              <span>Liên hệ để được tư vấn và xác nhận lịch giao:</span>
              <a href={`tel:${company.phoneLink}`}>
                <Phone aria-hidden="true" size={15} /> Gọi hoặc nhắn Zalo: <strong>{company.phone}</strong>
              </a>
            </div>
          </div>
        </section>

        {/* Bảng thông số kỹ thuật ở dưới khu mua hàng */}
        <section className="product-specifications-section page-wrap" data-scroll-reveal="up">
          <div className="specifications-box product-specifications-wide">
            <h3 className="specifications-heading">
              <ShieldCheck aria-hidden="true" size={17} />
              <span>Bảng Thông Số Kỹ Thuật Tiêu Chuẩn:</span>
            </h3>
            <dl className="specification-list">
              {product.specifications.map((specification) => (
                <div key={specification.label}>
                  <dt>{specification.label}</dt>
                  <dd>{specification.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 3 TABS NỘI DUNG CHI TIẾT */}
        <div data-scroll-reveal="up">
          <ProductInformation item={product} />
        </div>

        {/* SẢN PHẨM LIÊN QUAN */}
        <section className="related-section section-pad">
          <div className="page-wrap">
            <div className="section-heading related-heading" data-scroll-reveal="up">
              <div>
                <h2>Khám Phá Thêm Sản Phẩm Khác</h2>
              </div>
              <Link className="text-arrow-link" href="/#san-pham">
                <span>Xem toàn bộ danh mục</span>
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>

            <div className="related-grid">
              {relatedProducts.map((item) => (
                <Link
                  className="related-product"
                  data-scroll-reveal="up"
                  href={`/san-pham/${item.slug}`}
                  key={item.slug}
                >
                  <div className="related-top">
                    <span className="related-tag">{item.cardNote}</span>
                    <span className="related-arrow"><ArrowRight size={15} /></span>
                  </div>
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingContact />
    </>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<ProductPageFallback />}>
      <ProductContent params={params} />
    </Suspense>
  );
}
