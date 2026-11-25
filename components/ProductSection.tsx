"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Flame } from "lucide-react";
import {
  products,
  retailPrices,
  type CatalogItem,
  type ProductType,
} from "@/data/salagardenData";
import { QuoteButton } from "./QuoteButton";

type ProductFilter = "all" | ProductType | "service";

const categories: { id: ProductFilter; label: string }[] = [
  { id: "all", label: `Tất Cả Danh Mục (${products.length})` },
  {
    id: "phun-vien",
    label: `Phun Viên (${products.filter((product) => product.productType === "phun-vien").length})`,
  },
  {
    id: "nhap-nhay",
    label: `Nhấp Nháy (${products.filter((product) => product.productType === "nhap-nhay").length})`,
  },
  {
    id: "phun-hoa",
    label: `Phun Hoa (${products.filter((product) => product.productType === "phun-hoa").length})`,
  },
  {
    id: "service",
    label: `Dịch Vụ Trình Diễn (${products.filter((product) => product.category === "service").length})`,
  },
];

export function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<ProductFilter>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : activeCategory === "service"
        ? products.filter((product) => product.category === "service")
        : products.filter((product) => product.productType === activeCategory);

  return (
    <section className="catalog-section section-pad" id="san-pham">
      <div className="page-wrap">
        <div className="section-heading catalog-heading" data-scroll-reveal="up">
          <div>
            <span className="section-kicker">DANH MỤC ĐANG BÁN</span>
            <h2 className="section-title">Chọn pháo hoa Z121<br />phù hợp với dịp của bạn</h2>
          </div>
          <p>
            Giá niêm yết tại cửa hàng. Chọn mẫu để xem thông tin, hoặc gửi yêu cầu để được tư vấn theo nhu cầu và địa điểm nhận hàng.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filter-wrap">
          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                className={`category-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                aria-pressed={activeCategory === cat.id}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="retail-price-panel" aria-label="Bảng giá lẻ">
          <div className="retail-price-heading">
            <span>Bảng giá tham khảo</span>
            <strong>Niêm yết tại cửa hàng Huế &amp; Đà Nẵng</strong>
          </div>
          <div className="retail-price-grid">
            {retailPrices.map((item) => (
              <div className="retail-price-item" key={item.name}>
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid" key={activeCategory}>
          {filteredProducts.map((product: CatalogItem, index: number) => (
            <article
              className="product-card is-category-enter"
              key={product.slug}
            >
              <Link
                aria-label={`Xem chi tiết sản phẩm ${product.name}`}
                className="product-image-link"
                href={`/san-pham/${product.slug}`}
              >
                <Image
                  alt={product.imageAlt}
                  className="product-card-image"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  src={product.image}
                />
                <div className="product-image-spotlight" />
                <div className="product-card-badge">
                  <span className="product-index">0{index + 1}</span>
                  <span className="product-category-tag">
                    {product.category === "service" ? "GÓI SỰ KIỆN" : "CHÍNH HÃNG Z121"}
                  </span>
                </div>
                <span className="product-image-arrow">
                  <ArrowUpRight aria-hidden="true" size={18} />
                </span>
              </Link>

              <div className="product-card-copy">
                <h3>
                  <Link href={`/san-pham/${product.slug}`}>{product.name}</Link>
                </h3>

                {product.price && (
                  <div className="product-card-price">
                    <span>Giá lẻ</span>
                    <strong>{product.price}</strong>
                  </div>
                )}

                <p className="product-note">
                  <Flame aria-hidden="true" size={14} />
                  <span>{product.cardNote}</span>
                </p>

                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="product-tags-row">
                    {product.tags.slice(0, 3).map((tag) => (
                      <span className="product-tag-pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="product-description">{product.description}</p>

                {/* Action Buttons */}
                <div className="product-card-actions">
                  <Link className="product-detail-link" href={`/san-pham/${product.slug}`}>
                    Xem Chi Tiết <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                  <QuoteButton slug={product.slug}>
                    Nhận Báo Giá
                  </QuoteButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
