"use client";

import { useState } from "react";
import { Minus, Phone, Plus, ShoppingBag } from "lucide-react";
import { company } from "@/data/salagardenData";

type ProductControlsProps = {
  slug: string;
  service?: boolean;
};

export function ProductControls({ slug, service = false }: ProductControlsProps) {
  const [quantity, setQuantity] = useState(1);
  const purchaseLink = `/?san-pham=${encodeURIComponent(slug)}&so-luong=${quantity}#bao-gia`;

  const handleOrderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If on home, scroll; otherwise navigate to home quote form
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.dispatchEvent(
        new CustomEvent("salagarden-select-product", { detail: slug }),
      );
      const target = document.getElementById("bao-gia");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="purchase-controls">
      {!service && (
        <div aria-label="Chọn số lượng" className="quantity-control">
          <button
            aria-label="Giảm số lượng"
            disabled={quantity <= 1}
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            type="button"
          >
            <Minus aria-hidden="true" size={16} />
          </button>
          <output aria-live="polite">{quantity}</output>
          <button
            aria-label="Tăng số lượng"
            onClick={() => setQuantity((current) => current + 1)}
            type="button"
          >
            <Plus aria-hidden="true" size={16} />
          </button>
        </div>
      )}
      <div className="purchase-buttons">
        <a
          className="button button-red"
          href={purchaseLink}
          onClick={handleOrderClick}
        >
          <ShoppingBag aria-hidden="true" size={17} />
          {service ? "Nhận Tư Vấn Phương Án" : "Đặt Mua Ngay"}
        </a>
        <a className="button button-gold" href={`tel:${company.phoneLink}`}>
          <Phone aria-hidden="true" size={17} />
          Gọi Tư Vấn: {company.phone}
        </a>
      </div>
    </div>
  );
}
