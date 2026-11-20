"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, CheckCircle, ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { events } from "@/data/salagardenData";

// Extended gallery images per event (from PDF scan)
const eventGalleries: Record<number, string[]> = {
  0: ["/images/pdf-p10-2.png", "/images/pdf-p10-3.png", "/images/pdf-p10-4.png", "/images/pdf-p10-5.png"],
  1: ["/images/pdf-p9-17.png", "/images/pdf-p9-18.png", "/images/pdf-p9-19.png", "/images/pdf-p9-20.png"],
  2: ["/images/pdf-p9-20.png", "/images/pdf-p9-21.png", "/images/pdf-p9-22.png", "/images/pdf-p9-23.png"],
  3: ["/images/pdf-p8-4.png", "/images/pdf-p8-5.png", "/images/pdf-p8-6.png", "/images/pdf-p8-7.png"],
  4: ["/images/pdf-p11-1.png", "/images/pdf-p9-1.png", "/images/pdf-p9-2.png", "/images/pdf-p9-3.png"],
};

export function EventsSection() {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const currentEvent = events[selectedEventIndex];
  const gallery = eventGalleries[selectedEventIndex] ?? [currentEvent.image];
  const currentImage = gallery[galleryIndex] ?? gallery[0];

  function selectEvent(idx: number) {
    setSelectedEventIndex(idx);
    setGalleryIndex(0);
  }

  function prevPhoto() {
    setGalleryIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }

  function nextPhoto() {
    setGalleryIndex((i) => (i + 1) % gallery.length);
  }

  return (
    <section className="events-section section-pad" id="du-an">
      <div className="page-wrap">
        {/* Section heading */}
        <div className="events-top-row" data-scroll-reveal="up">
          <div>
            <h2>Dấu Ấn Nghệ Thuật Ánh Sáng<br />Tại Các Sự Kiện Tiêu Biểu</h2>
          </div>
          <a className="button button-gold events-top-cta" href="#bao-gia">
            Tư Vấn Kịch Bản Sự Kiện <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>

        <p className="events-intro" data-scroll-reveal="up">
          BQP SALAGARDEN vinh dự là đối tác thiết kế kịch bản ánh sáng và trực tiếp vận hành bắn pháo hoa an toàn cho các chương trình văn hóa lớn của các trường thành viên thuộc <strong>Đại học Huế</strong>.
        </p>

        <div className="events-layout">
          {/* Left column: Event list */}
          <div className="events-copy" data-scroll-reveal="left">
            <ol className="event-list">
              {events.map((event, idx) => {
                const isSelected = selectedEventIndex === idx;
                return (
                  <li
                    className={`event-item-interactive ${isSelected ? "selected" : ""}`}
                    key={`${event.date}-${event.title}`}
                    onClick={() => selectEvent(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && selectEvent(idx)}
                    aria-pressed={isSelected}
                  >
                    <div className="event-item-left">
                      <time>
                        <Calendar aria-hidden="true" size={13} />
                        {event.date}
                      </time>
                      <div className="event-info">
                        <strong>{event.title}</strong>
                        <span>
                          <MapPin aria-hidden="true" size={12} /> {event.venue}
                        </span>
                      </div>
                    </div>
                    <span className="event-badge-check">
                      <CheckCircle aria-hidden="true" size={16} />
                    </span>
                  </li>
                );
              })}
            </ol>

            {/* Mini photo strip thumbnails */}
            <div className="event-thumbs-row" aria-label="Ảnh minh họa sự kiện">
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
          <div className="event-photo-showcase" data-scroll-reveal="right">
            <figure className="event-photo">
              <Image
                alt={currentEvent.title}
                className="event-photo-image"
                fill
                key={currentImage}
                sizes="(max-width: 760px) 100vw, 45vw"
                src={currentImage}
              />
              <div className="event-photo-overlay" />

              {/* Gallery navigation arrows */}
              {gallery.length > 1 && (
                <>
                  <button className="event-nav-btn event-nav-prev" onClick={prevPhoto} type="button" aria-label="Ảnh trước">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="event-nav-btn event-nav-next" onClick={nextPhoto} type="button" aria-label="Ảnh tiếp">
                    <ChevronRight size={20} />
                  </button>
                  <div className="event-photo-counter">
                    {galleryIndex + 1} / {gallery.length}
                  </div>
                </>
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
        </div>
      </div>
    </section>
  );
}
