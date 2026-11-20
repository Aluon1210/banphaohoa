"use client";

type QuoteButtonProps = {
  slug: string;
  children?: React.ReactNode;
  className?: string;
};

export function QuoteButton({
  slug,
  children = "Nhận Báo Giá",
  className = "product-quote-link",
}: QuoteButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Dispatch event to QuoteForm
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("salagarden-select-product", { detail: slug }),
      );

      const target = document.getElementById("bao-gia");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Update URL search param cleanly
      const url = new URL(window.location.href);
      url.searchParams.set("san-pham", slug);
      url.hash = "bao-gia";
      window.history.pushState({}, "", url.toString());
    }
  };

  return (
    <a
      className={className}
      href={`/?san-pham=${encodeURIComponent(slug)}#bao-gia`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
