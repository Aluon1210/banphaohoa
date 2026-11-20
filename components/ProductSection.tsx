"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Flame } from "lucide-react";
import { products, type CatalogItem } from "@/data/salagardenData";
import { QuoteButton } from "./QuoteButton";

const categories = [
  { id: "all", label: "Tất Cả Danh Mục (6)" },
  { id: "product", label: "Pháo Hoa Z121 BQP (5)" },
  { id: "service", label: "Dịch Vụ Trình Diễn (1)" },
];

export function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="catalog-section section-pad" id="san-pham">
      <div className="page-wrap">
        <div className="section-heading catalog-heading" data-scroll-reveal="up">
          <div>
            <h2>Sản Phẩm Z121 Chính Hãng &<br />Dịch Vụ Trình Diễn Nghệ Thuật</h2>
          </div>
          <p>
            Danh mục gồm pháo hoa dân dụng từ Nhà máy Z121 – GAET và dịch vụ tư vấn, thiết kế trình diễn sự kiện. Vui lòng đối chiếu nhãn và chứng từ tại điểm bán.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filter-wrap">
          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                className={`category-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product: CatalogItem, index: number) => (
            <article
              className="product-card"
              data-scroll-reveal="up"
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
