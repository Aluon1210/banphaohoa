"use client";

import { useState } from "react";
import { BadgeCheck, FileCheck2, ShieldCheck, Sparkles, Truck } from "lucide-react";
import type { CatalogItem } from "@/data/salagardenData";
import { company } from "@/data/salagardenData";

type ProductInformationProps = {
  item: CatalogItem;
};

const defaultSafetySteps = [
  "Bước 1: Đọc nhãn, hướng dẫn và cảnh báo của đúng sản phẩm trước khi sử dụng.",
  "Bước 2: Chỉ sử dụng khi pháp luật cho phép và đáp ứng điều kiện, khoảng cách an toàn ghi trên nhãn.",
  "Bước 3: Giữ người xem, trẻ em và vật dễ cháy ngoài vùng an toàn theo hướng dẫn trên nhãn.",
  "Bước 4: Không tự ý tháo lắp hoặc sửa đổi; nếu sản phẩm hay bao bì hư hỏng, không sử dụng và liên hệ điểm bán.",
];

const serviceSafetySteps = [
  "Bước 1: Trao đổi quy mô, địa điểm và thời gian dự kiến với đơn vị tư vấn.",
  "Bước 2: Chỉ triển khai sau khi các yêu cầu pháp lý và phương án an toàn được xác nhận.",
  "Bước 3: Ban tổ chức thông báo khu vực giới hạn và hướng dẫn người tham dự tại địa điểm.",
  "Bước 4: Việc vận hành do nhân sự chuyên trách thực hiện; khách tham dự không tiếp cận thiết bị.",
];

export function ProductInformation({ item }: ProductInformationProps) {
  const [activeTab, setActiveTab] = useState(0);
  const isService = item.category === "service";
  const tabs = [
    "Đặc Điểm & Hiệu Ứng Ánh Sáng",
    "Hướng Dẫn An Toàn (4 Bước)",
    "Tính Pháp Lý & Nguồn Gốc Z121",
  ];

  return (
    <section className="product-information page-wrap">
      <div aria-label="Nội dung chi tiết sản phẩm" className="product-tabs" role="tablist">
        {tabs.map((tab, index) => (
          <button
            aria-controls={`product-panel-${index}`}
            aria-selected={activeTab === index}
            className={activeTab === index ? "product-tab active" : "product-tab"}
            id={`product-tab-${index}`}
            key={tab}
            onClick={() => setActiveTab(index)}
            role="tab"
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        aria-labelledby={`product-tab-${activeTab}`}
        className="product-tab-panel"
        id={`product-panel-${activeTab}`}
        role="tabpanel"
        tabIndex={0}
      >
        {/* Tab 1: Đặc điểm & Hiệu ứng ánh sáng */}
        {activeTab === 0 && (
          <div className="detail-copy">
            <div className="detail-heading-row">
              <Sparkles aria-hidden="true" className="detail-icon" size={24} />
              <div>
                <h2 className="section-title detail-section-title">{isService ? "Phương Án Trình Diễn Nghệ Thuật Đẳng Cấp" : `Đặc Điểm & Hiệu Ứng Của ${item.name}`}</h2>
                <p className="detail-subhead">
                  {isService
                    ? "Giải pháp chiếu sáng nghệ thuật tối ưu theo ngân sách và không gian thực địa"
                    : "Công nghệ sản xuất tiên tiến từ Nhà máy Z121 – Bộ Quốc phòng"}
                </p>
              </div>
            </div>
            <p className="detail-description">{item.description}</p>
            <div className="detail-highlights-box">
              <h3>Điểm Nổi Bật Vượt Trội:</h3>
              <ul className="detail-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Hướng dẫn sử dụng an toàn (4 bước PCCC) */}
        {activeTab === 1 && (
          <div className="detail-copy">
            <div className="detail-heading-row">
              <ShieldCheck aria-hidden="true" className="detail-icon" size={24} />
              <div>
                <h2 className="section-title detail-section-title">{isService ? "Các Bước Chuẩn Bị & Phối Hợp An Toàn" : "Bốn Bước Kiểm Tra An Toàn Trước Khi Sử Dụng"}</h2>
                <p className="detail-subhead">
                  Luôn đọc nhãn sản phẩm và tuân thủ các quy định hiện hành
                </p>
              </div>
            </div>
            <p className="detail-description">
              {isService
                ? "Kịch bản và yêu cầu an toàn được trao đổi theo quy mô, địa điểm và điều kiện pháp lý của từng sự kiện."
                : "Các bước dưới đây nhắc Quý khách đối chiếu với nhãn sản phẩm; hướng dẫn của nhà sản xuất luôn được ưu tiên."}
            </p>
            <ol className="safety-steps">
              {(isService ? serviceSafetySteps : defaultSafetySteps).map((step, index) => (
                <li key={step}>
                  <span className="step-badge">0{index + 1}</span>
                  <div className="step-text">{step}</div>
                </li>
              ))}
            </ol>
            <div className="safety-warning-box">
              <strong>LƯU Ý:</strong> Không sử dụng sản phẩm nếu không thể đáp ứng đầy đủ điều kiện và khoảng cách ghi trên nhãn. Với sản phẩm hư hỏng hoặc thông tin chưa rõ, hãy dừng lại và liên hệ điểm bán để được tư vấn.
            </div>
          </div>
        )}

        {/* Tab 3: Tính pháp lý & Chứng nhận Z121 */}
        {activeTab === 2 && (
          <div className="detail-copy">
            <div className="detail-heading-row">
              <BadgeCheck aria-hidden="true" className="detail-icon" size={24} />
              <div>
                <h2 className="section-title detail-section-title">Tính Pháp Lý & Nguồn Gốc Z121</h2>
                <p className="detail-subhead">
                  Thông tin doanh nghiệp và hướng dẫn kiểm tra tại điểm bán
                </p>
              </div>
            </div>
            <p className="detail-description">
              Quý khách vui lòng đối chiếu mã số, cơ quan cấp phép, người đại diện và tổ chức thành viên khi mua hoặc hợp tác với doanh nghiệp.
            </p>
            <ol className="safety-steps legal-information-list">
              <li>
                <span className="step-badge"><BadgeCheck aria-hidden="true" size={18} /></span>
                <div className="step-text">
                  <small>Mã số thuế / Doanh nghiệp</small>
                  <strong>{company.taxCode} — {company.name}</strong>
                </div>
              </li>
              <li>
                <span className="step-badge"><FileCheck2 aria-hidden="true" size={18} /></span>
                <div className="step-text">
                  <small>Cơ quan cấp phép</small>
                  <strong>{company.registration}</strong>
                </div>
              </li>
              <li>
                <span className="step-badge">03</span>
                <div className="step-text">
                  <small>Người đại diện pháp luật</small>
                  <strong>{company.representative} – {company.role}</strong>
                </div>
              </li>
              <li>
                <span className="step-badge">04</span>
                <div className="step-text">
                  <small>Tổ chức thành viên</small>
                  <strong>{company.roleAffiliation}</strong>
                </div>
              </li>
            </ol>

            <div className="decree-note">
              <h4>Nghị định 137/2020/NĐ-CP</h4>
              <p>
                Nghị định quy định về quản lý và sử dụng pháo. Điều kiện áp dụng phụ thuộc vào quy định hiện hành và thông tin của từng sản phẩm; vui lòng kiểm tra nhãn, chứng từ và trao đổi với điểm bán trước khi mua hoặc sử dụng.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function ProductTrustMarks({ service = false }: { service?: boolean }) {
  return (
    <div className="product-trust">
      <div>
        <BadgeCheck aria-hidden="true" size={20} />
        <span>{service ? "Đơn Vị Đăng Ký Hợp Pháp" : "Tem QR Z121 Bộ Quốc Phòng"}</span>
      </div>
      <div>
        <FileCheck2 aria-hidden="true" size={20} />
        <span>{service ? "Hợp Đồng & Hóa Đơn VAT" : "Hóa Đơn VAT Đầy Đủ"}</span>
      </div>
      <div>
        <Truck aria-hidden="true" size={20} />
        <span>{service ? "Tư Vấn Phạm Vi Toàn Quốc" : "Hỗ Trợ Giao Hàng Toàn Quốc"}</span>
      </div>
    </div>
  );
}
