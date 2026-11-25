"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, CheckCircle, MapPin, Sparkles } from "lucide-react";
import { events } from "@/data/salagardenData";

// Extended gallery images per event (from PDF scan)
const eventGalleries: Record<number, string[]> = {
  0: ["/media/info/arts-university-2026.jpg", "/images/pdf-p10-2.png", "/images/pdf-p10-3.png", "/images/pdf-p10-4.png", "/images/pdf-p10-5.png"],
  1: ["/media/info/nonglam-event-1.jpg", "/media/info/nonglam-event-2.jpg", "/media/info/nonglam-event-2025.jpg", "/media/info/nonglam-event-2025-2.jpg", "/images/pdf-p9-17.png"],
  2: ["/media/info/science-event-2026.jpg", "/media/info/science-event-2025.jpg", "/images/pdf-p9-24.png", "/images/pdf-p9-27.png", "/images/pdf-p9-31.png"],
  3: ["/media/info/foreign-language-certificate.jpg", "/images/pdf-p8-4.png", "/images/pdf-p8-5.png", "/images/pdf-p8-6.png", "/images/pdf-p8-7.png"],
  4: ["/media/info/nonglam-event-2025-2.jpg", "/images/pdf-p11-1.png", "/images/pdf-p9-1.png", "/images/pdf-p9-2.png", "/images/pdf-p9-3.png"],
};

const mobileEventLabels = [
  { title: "Chào đón tân sinh viên 2026", venue: "Đại học Nghệ thuật Huế" },
  { title: "Chào đón tân sinh viên", venue: "Đại học Nông Lâm Huế" },
  { title: "Chào đón tân sinh viên", venue: "Đại học Khoa học Huế" },
  { title: "Chào đón tân sinh viên K23", venue: "Đại học Ngoại ngữ Huế" },
  { title: "Chào đón TSV K49", venue: "THPT Chuyên Khoa học Huế" },
];

export function EventsSection() {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [expandedEventIndex, setExpandedEventIndex] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [photoDirection, setPhotoDirection] = useState<"left" | "right" | "up">("up");
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const currentEvent = events[selectedEventIndex];
  const gallery = eventGalleries[selectedEventIndex] ?? [currentEvent.image];
  const currentImage = gallery[galleryIndex] ?? gallery[0];

  function selectEvent(idx: number) {
    setSelectedEventIndex(idx);
    setGalleryIndex(0);
    setPhotoDirection("up");
    setExpandedEventIndex((current) => (current === idx ? null : idx));
  }

  function renderPhotoShowcase(className: string) {
    return (
      <div className={`event-photo-showcase ${className}`}>
        <figure
          className={`event-photo event-photo-enter event-photo-from-${photoDirection}`}
          key={`${selectedEventIndex}-${galleryIndex}`}
          onTouchStart={(event) => {
            touchStart.current = {
              x: event.changedTouches[0].clientX,
              y: event.changedTouches[0].clientY,
            };
          }}
          onTouchEnd={(event) => {
            if (!touchStart.current) return;
            const deltaX = event.changedTouches[0].clientX - touchStart.current.x;
            const deltaY = event.changedTouches[0].clientY - touchStart.current.y;
            touchStart.current = null;

            if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

            setGalleryIndex((index) => (index + (deltaX < 0 ? 1 : -1) + gallery.length) % gallery.length);
            setPhotoDirection(deltaX < 0 ? "right" : "left");
          }}
        >
          <Image
            alt={currentEvent.title}
            className="event-photo-image"
            fill
            key={currentImage}
            sizes="(max-width: 760px) 100vw, 45vw"
            src={currentImage}
          />
          <div className="event-photo-overlay" />
          {gallery.length > 1 && (
            <div className="event-photo-counter">
              {galleryIndex + 1} / {gallery.length}
            </div>
          )}
          <div className="event-photo-tag">
            <Sparkles size={14} />
            <span>HÌNH ẢNH THỰC TẾ TỪ HỒ SƠ NĂNG LỰC</span>
          </div>
          <figcaption>
            <span className="event-venue-tag">{currentEvent.venue}</span>
            <strong>{currentEvent.title}</strong>
            <p>{currentEvent.highlight}</p>
          </figcaption>
        </figure>
      </div>
    );
  }

  return (
    <section className="events-section section-pad" id="du-an">
      <div className="page-wrap">
        {/* Section heading */}
        <div className="events-top-row" data-scroll-reveal="up">
          <div>
            <h2 className="section-title">Dấu Ấn Nghệ Thuật Ánh Sáng<br />Tại Các Sự Kiện Tiêu Biểu</h2>
          </div>
          <a className="button button-gold events-top-cta" href="#bao-gia">
            Tư Vấn Kịch Bản Sự Kiện <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>

        <p className="events-intro" data-scroll-reveal="up">
          Dịch vụ tư vấn, thiết kế kịch bản ánh sáng và phối hợp trình diễn pháo hoa an toàn tại các sự kiện tiêu biểu của <strong>Đại học Huế</strong>.
        </p>

        <div className="events-layout">
          {/* Left column: Event list */}
          <div className="events-copy" data-scroll-reveal="left">
            <ol className="event-list">
              {events.map((event, idx) => {
                const isSelected = selectedEventIndex === idx;
                const isExpanded = expandedEventIndex === idx;
                const mobileLabel = mobileEventLabels[idx];
                return (
                  <li className="event-list-entry" key={`${event.date}-${event.title}`}>
                    <button
                      className={`event-item-interactive ${isSelected ? "selected" : ""} ${isExpanded ? "expanded" : ""}`}
                      onClick={() => selectEvent(idx)}
                      type="button"
                      aria-pressed={isSelected}
                      aria-expanded={isExpanded}
                    >
                      <div className={`event-item-left ${event.date ? "" : "no-date"}`}>
                        {event.date && (
                          <time>
                            <Calendar aria-hidden="true" size={13} />
                            {event.date}
                          </time>
                        )}
                        <div className="event-info">
                          <strong>
                            <span className="event-info-desktop">{event.title}</span>
                            <span className="event-info-mobile">{mobileLabel?.title ?? event.title}</span>
                          </strong>
                          <span>
                            <MapPin aria-hidden="true" size={12} />
                            <span className="event-info-desktop">{event.venue}</span>
                            <span className="event-info-mobile">{mobileLabel?.venue ?? event.venue}</span>
                          </span>
                        </div>
                      </div>
                      <span className="event-badge-check">
                        <CheckCircle aria-hidden="true" size={16} />
                      </span>
                    </button>
                    {isExpanded && renderPhotoShowcase("event-photo-showcase-inline")}
                  </li>
                );
              })}
            </ol>

            {/* Mini photo strip thumbnails */}
            <div
              className="event-thumbs-row"
              key={`thumbs-${selectedEventIndex}`}
              aria-label="Ảnh minh họa sự kiện"
            >
              {gallery.map((src, i) => (
                <button
                  key={src}
                  className={`event-thumb-btn ${galleryIndex === i ? "active" : ""}`}
                  onClick={() => setGalleryIndex(i)}
                  type="button"
                  aria-label={`Ảnh ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Ảnh sự kiện ${i + 1}`}
                    fill
                    sizes="80px"
                    className="event-thumb-img"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right column: Active Event Showcase Photo with gallery nav */}
          {renderPhotoShowcase("event-photo-showcase-desktop")}
        </div>
      </div>
    </section>
  );
}
