"use client";

import { useEffect, useState, useSyncExternalStore, type FormEvent } from "react";
import { ArrowRight, Info, MessageSquare, Phone } from "lucide-react";
import { company, products } from "@/data/salagardenData";

export function QuoteForm() {
  const search = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("popstate", onChange);
      return () => window.removeEventListener("popstate", onChange);
    },
    () => (typeof window !== "undefined" ? window.location.search : ""),
    () => "",
  );

  const query = new URLSearchParams(search);
  const querySlug = query.get("san-pham");
  const queryProduct =
    querySlug && products.some((product) => product.slug === querySlug)
      ? querySlug
      : "";

  const [selectedProductOverride, setSelectedProductOverride] = useState<string | null>(null);
  const selectedProduct = selectedProductOverride ?? queryProduct;
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    note: "",
  });

  // Listen to in-page product selection events
  useEffect(() => {
    const handleSelectProduct = (event: Event) => {
      if (
        event instanceof CustomEvent &&
        typeof event.detail === "string" &&
        products.some((product) => product.slug === event.detail)
      ) {
        setSelectedProductOverride(event.detail);
        const formEl = document.getElementById("quote-form-element");
        if (formEl) {
          formEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };

    const handlePopState = () => setSelectedProductOverride(null);

    window.addEventListener("salagarden-select-product", handleSelectProduct);
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("salagarden-select-product", handleSelectProduct);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const quantity = query.get("so-luong");
  const initialNote =
    quantity && /^\d+$/.test(quantity) ? `Số lượng dự kiến: ${quantity}` : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.currentTarget;
    const name = (target.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const phone = (target.elements.namedItem("phone") as HTMLInputElement)?.value || "";
    const product = (target.elements.namedItem("product") as HTMLSelectElement)?.value || "";
    const note = (target.elements.namedItem("note") as HTMLTextAreaElement)?.value || "";

    if (!product) {
      setSubmitState("idle");
      setSubmitMessage("");
      const productSelect = target.elements.namedItem("product") as HTMLSelectElement | null;
      productSelect?.setCustomValidity("Vui lòng chọn sản phẩm hoặc dịch vụ quan tâm.");
      productSelect?.reportValidity();
      productSelect?.focus();
      return;
    }

    const productSelect = target.elements.namedItem("product") as HTMLSelectElement | null;
    productSelect?.setCustomValidity("");
    setFormData({ name, phone, note });
    setSubmitState("sending");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, product, note }),
      });
      const result = await response.json() as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Không thể gửi yêu cầu báo giá.");
      }

      setSubmitState("success");
      setSubmitMessage(result.message || "Yêu cầu báo giá đã được gửi thành công.");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error ? error.message : "Không thể gửi yêu cầu báo giá."
      );
    }
  }

  const currentProductObj = products.find((p) => p.slug === selectedProduct);

  return (
    <div className="quote-panel" data-scroll-reveal="right" id="khung-bao-gia">
      {showContactOptions || submitState === "success" || submitState === "error" ? (
        <div aria-live="polite" className="quote-response" role="status">
          <span className="response-icon">
            <Info aria-hidden="true" size={24} />
          </span>
          <h3>
            {submitState === "success"
              ? "Yêu Cầu Đã Được Gửi"
              : submitState === "error"
                ? "Gửi Email Chưa Thành Công"
                : "Thông Tin Chưa Được Gửi"}
          </h3>
          <p className="response-copy">
            {submitState === "success"
              ? submitMessage
              : submitState === "error"
                ? submitMessage
                : `Thông tin của ${formData.name} chỉ đang hiển thị trên trang này. Website chưa gửi dữ liệu đến cửa hàng.`}
          </p>
          {currentProductObj && (
            <div className="quote-response-product">
              <span>Sản phẩm quan tâm:</span>
              <strong>{currentProductObj.name}</strong>
            </div>
          )}
          <p className="response-prompt">
            {submitState === "success"
              ? "Bộ phận tư vấn sẽ liên hệ lại với bạn theo số điện thoại đã cung cấp:"
              : "Để gửi yêu cầu và xác nhận thông tin sản phẩm, vui lòng gọi hoặc nhắn Zalo:"}
          </p>
          <div className="quote-response-actions">
            <a className="button button-gold" href={`tel:${company.phoneLink}`}>
              <Phone aria-hidden="true" size={17} /> Gọi tư vấn: {company.phone}
            </a>
            <a
              className="button button-outline-red"
              href={company.zaloLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageSquare aria-hidden="true" size={17} /> Nhắn Zalo
            </a>
          </div>
          <button
            className="text-button"
            onClick={() => {
              setShowContactOptions(false);
              setSubmitState("idle");
              setSubmitMessage("");
            }}
            type="button"
          >
            ← Quay lại biểu mẫu
          </button>
        </div>
      ) : (
        <>
          <div className="quote-heading">
            <h3>Trao Đổi Nhu Cầu & Báo Giá</h3>
            <p>
              Điền thông tin để gửi yêu cầu báo giá trực tiếp đến cửa hàng pháo hoa.
            </p>
          </div>
          <form className="quote-form" id="quote-form-element" onSubmit={handleSubmit}>
            <label>
              Họ và tên <span aria-hidden="true">*</span>
              <input
                autoComplete="name"
                defaultValue={formData.name}
                name="name"
                placeholder="Ví dụ: Anh Hoàng / Chị Thảo"
                required
              />
            </label>

            <label>
              Số điện thoại / Zalo <span aria-hidden="true">*</span>
              <input
                autoComplete="tel"
                defaultValue={formData.phone}
                inputMode="tel"
                name="phone"
                placeholder="Ví dụ: 0395 952 325"
                required
                type="tel"
              />
            </label>

            <label>
              Sản phẩm hoặc dịch vụ quan tâm <span aria-hidden="true">*</span>
              <select
                name="product"
                onChange={(event) => {
                  event.currentTarget.setCustomValidity("");
                  setSelectedProductOverride(event.target.value);
                }}
                required
                value={selectedProduct}
              >
                <option value="">-- Chọn sản phẩm hoặc gói sự kiện --</option>
                {products.map((product) => (
                  <option key={product.slug} value={product.slug}>
                    {product.name} ({product.cardNote})
                  </option>
                ))}
              </select>
            </label>

            <label>
              Ghi chú số lượng & địa chỉ giao hàng
              <textarea
                defaultValue={formData.note || initialNote}
                key={search}
                name="note"
                placeholder="Ví dụ: Số lượng 2 giàn, giao về KĐT EcoGarden Huế hoặc Ngũ Hành Sơn Đà Nẵng..."
                rows={3}
              />
            </label>

            <button className="button button-red quote-submit" disabled={submitState === "sending"} type="submit">
              {submitState === "sending" ? "Đang gửi..." : "Gửi Yêu Cầu Báo Giá"}
              {submitState !== "sending" && <ArrowRight aria-hidden="true" size={18} />}
            </button>

            <div className="quote-guarantee">
              <MessageSquare aria-hidden="true" size={15} />
              <span>Thông tin được gửi an toàn qua email; cần hỗ trợ gấp có thể gọi hoặc nhắn Zalo.</span>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
