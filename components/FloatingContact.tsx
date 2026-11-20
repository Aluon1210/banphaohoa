"use client";

import { MessageSquare, Phone } from "lucide-react";
import { company } from "@/data/salagardenData";

export function FloatingContact() {
  return (
    <div className="floating-contact-group">
      <a
        aria-label="Nhắn tin Zalo"
        className="floating-btn floating-zalo"
        href={company.zaloLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="floating-tooltip">Chat Zalo</span>
        <MessageSquare aria-hidden="true" size={22} />
      </a>

      <a
        aria-label={`Gọi Hotline ${company.phone}`}
        className="floating-btn floating-phone"
        href={`tel:${company.phoneLink}`}
      >
        <span className="floating-tooltip">Hotline: {company.phone}</span>
        <span className="floating-pulse" />
        <Phone aria-hidden="true" size={22} />
      </a>
    </div>
  );
}
