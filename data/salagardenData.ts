export type ProductType = "phun-vien" | "nhap-nhay" | "phun-hoa";

export type CatalogItem = {
  slug: string;
  name: string;
  category: "product" | "service";
  productType?: ProductType;
  description: string;
  image: string;
  imageAlt: string;
  cardNote: string;
  tags: string[];
  specifications: { label: string; value: string }[];
  highlights: string[];
  legalNotes: string[];
  price?: string;
};

export const retailPrices = [
  { name: "Phun Viên", price: "390.000đ" },
  { name: "Nhấp Nháy", price: "390.000đ" },
  { name: "VIP 50", price: "900.000đ" },
  { name: "VIP 75", price: "1.400.000đ" },
  { name: "VIP 100", price: "1.800.000đ" },
  { name: "100 Liền Khối", price: "4.200.000đ" },
  { name: "Giàn 368", price: "42.000.000đ" },
];

export const company = {
  name: "CÔNG TY TNHH TỔ CHỨC SỰ KIỆN PHÁO HOA BQP SALAGARDEN",
  shortName: "CỬA HÀNG PHÁO HOA Z121",
  phone: "0395 952 325",
  phoneLink: "0395952325",
  zaloLink: "https://zalo.me/0395952325",
  email: "canhosalagarden@gmail.com",
  taxCode: "0402356447",
  representative: "Bà Bùi Thị Lý",
  role: "Giám Đốc",
  roleAffiliation: "Hội viên chính thức Hội Doanh nhân trẻ TP. Đà Nẵng (YBA Danang)",
  capital: "800.000.000 VNĐ",
  headOffice: "405 Lê Văn Hiến, P. Ngũ Hành Sơn, TP. Đà Nẵng",
  registration: "Sở Tài Chính TP. Đà Nẵng cấp phép ngày 11/09/2026",
  motto: "UY TÍN – CHẤT LƯỢNG – TẬN TÂM",
  philosophy: "Chất lượng tạo nên thương hiệu • Uy tín tạo nên thành công",
  warehouseArea: "500 m²",
  deliveryScope: "TP. Huế, TP. Đà Nẵng và toàn quốc theo thỏa thuận",
};

export const products: CatalogItem[] = [
  {
    slug: "gian-phun-vien-100-vip",
    name: "Giàn Phun Viên 100 VIP",
    category: "product",
    productType: "phun-vien",
    description:
      "Giàn phun viên 100 ống phóng với hiệu ứng tầm cao rực rỡ, đóng gói trong hộp quà đỏ sang trọng. Phù hợp cho dịp sum họp gia đình, Tết và khai trương.",
    image: "/images/pdf-p7-9.png",
    imageAlt: "Hộp quà pháo hoa Z121 màu đỏ 100 VIP từ hồ sơ năng lực SALAGARDEN",
    cardNote: "100 Ống Phóng · Hộp Quà Đỏ VIP",
    price: "1.800.000đ",
    tags: ["100 Ống Phóng", "Hộp Quà Đỏ VIP"],
    specifications: [
      { label: "Nhà sản xuất", value: "Nhà máy Z121 – Bộ Quốc phòng (GAET)" },
      { label: "Quy cách đóng gói", value: "Giàn 100 ống phóng trong hộp quà đỏ VIP thượng hạng" },
      { label: "Thời gian cháy", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tầm cao phóng", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tính pháp lý", value: "Tuân thủ quy định hiện hành và hướng dẫn trên nhãn" },
      { label: "Chứng từ đi kèm", value: "Tem chống giả QR Z121 điện tử & Hóa đơn GTGT hợp pháp" },
      { label: "Hướng dẫn an toàn", value: "Xem thông tin và khoảng cách an toàn trên nhãn" },
    ],
    highlights: [
      "Quy cách 100 ống phóng với hiệu ứng tầm cao rực rỡ.",
      "Hộp quà đỏ sang trọng, phù hợp làm quà tặng dịp lễ Tết.",
      "Đối chiếu tem QR Z121 và chứng từ tại điểm bán.",
    ],
    legalNotes: [
      "Đối chiếu thông tin sản phẩm, nhãn và chứng từ tại điểm bán trước khi mua.",
      "Việc mua và sử dụng cần tuân thủ Nghị định 137/2020/NĐ-CP và quy định hiện hành.",
      "Thông tin doanh nghiệp: MST 0402356447.",
    ],
  },
  {
    slug: "gian-phun-vien-75-vip",
    name: "Giàn Phun Viên 75 VIP",
    category: "product",
    productType: "phun-vien",
    description:
      "Giàn phun viên 75 ống phóng tạo chùm tia vàng kim và đa sắc, phù hợp cho dịp lễ Tết, tiệc mừng và những khoảnh khắc sum vầy.",
    image: "/images/pdf-p7-4.png",
    imageAlt: "Giàn phun viên VIP 75 ống phóng chính hãng Z121 trong hồ sơ sản phẩm",
    cardNote: "75 Ống Phóng · Vàng Kim & Đa Sắc",
    price: "1.400.000đ",
    tags: ["75 Ống Phóng", "Vàng Kim & Đa Sắc"],
    specifications: [
      { label: "Nhà sản xuất", value: "Nhà máy Z121 – Bộ Quốc phòng (GAET)" },
      { label: "Quy cách đóng gói", value: "Giàn 75 ống phóng tiêu chuẩn quân đội Z121" },
      { label: "Thời gian cháy", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tầm cao phóng", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tính pháp lý", value: "Tuân thủ quy định hiện hành và hướng dẫn trên nhãn" },
      { label: "Chứng từ đi kèm", value: "Tem chống giả QR Z121 điện tử & Hóa đơn GTGT" },
      { label: "Hướng dẫn an toàn", value: "Xem thông tin và khoảng cách an toàn trên nhãn" },
    ],
    highlights: [
      "Chùm tia vàng kim kết hợp hiệu ứng đa sắc.",
      "Quy cách 75 ống phóng cho dịp lễ Tết và tiệc mừng.",
      "Đối chiếu tem QR Z121 và chứng từ tại điểm bán.",
    ],
    legalNotes: [
      "Đối chiếu thông tin sản phẩm, nhãn và chứng từ tại điểm bán trước khi mua.",
      "Việc mua và sử dụng cần tuân thủ Nghị định 137/2020/NĐ-CP và quy định hiện hành.",
      "Thông tin doanh nghiệp: MST 0402356447.",
    ],
  },
  {
    slug: "gian-phun-vien-50-vip",
    name: "Giàn Phun Viên 50 VIP",
    category: "product",
    productType: "phun-vien",
    description:
      "50 ống phóng với hiệu ứng bung chùm liên tục, tạo không khí hân hoan, ấm áp cho các bữa tiệc gia đình, ngày Tết cổ truyền, liên hoan tân gia và mừng khai trương hồng phát.",
    image: "/images/pdf-p7-8.png",
    imageAlt: "Giàn phun viên VIP 50 ống phóng Z121 từ hồ sơ năng lực SALAGARDEN",
    cardNote: "50 Ống Phóng · Chùm Sáng Liên Tục",
    price: "900.000đ",
    tags: ["50 Ống Phóng", "Bung Chùm Liên Tục"],
    specifications: [
      { label: "Nhà sản xuất", value: "Nhà máy Z121 – Bộ Quốc phòng (GAET)" },
      { label: "Quy cách đóng gói", value: "Giàn 50 ống phóng gọn gàng, chắc chắn" },
      { label: "Thời gian cháy", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tầm cao phóng", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tính pháp lý", value: "Hợp pháp theo Nghị định 137/2020/NĐ-CP" },
      { label: "Chứng từ đi kèm", value: "Tem chống giả QR Z121 & Hóa đơn GTGT đầy đủ" },
    ],
    highlights: [
      "Quy cách 50 ống phóng, phù hợp cho các dịp sum họp gia đình và khai trương.",
      "Hiệu ứng bung chùm liên tục theo thông tin sản phẩm.",
      "Đối chiếu nhãn sản phẩm để biết chi tiết về hiệu ứng và cách sử dụng.",
    ],
    legalNotes: [
      "Đối chiếu thông tin sản phẩm, nhãn và chứng từ tại điểm bán trước khi mua.",
      "Việc mua và sử dụng cần tuân thủ Nghị định 137/2020/NĐ-CP và quy định hiện hành.",
      "Thông tin doanh nghiệp: MST 0402356447.",
    ],
  },
  {
    slug: "gian-phun-vien-zpyro",
    name: "Giàn Phun Viên ZPYRO",
    category: "product",
    productType: "phun-vien",
    description:
      "Giàn phun viên ZPYRO của Nhà máy Z121. Vui lòng đối chiếu nhãn sản phẩm để biết quy cách và hướng dẫn sử dụng.",
    image: "/images/pdf-p7-6.png",
    imageAlt: "Sản phẩm giàn phun viên ZPYRO của Nhà máy Z121",
    cardNote: "ZPYRO Fountain · Phun Viên",
    price: "390.000đ",
    tags: ["ZPYRO", "Phun Viên"],
    specifications: [
      { label: "Nhà sản xuất", value: "Nhà máy Z121 – Bộ Quốc phòng (Dòng ZPYRO)" },
      { label: "Dòng sản phẩm", value: "ZPYRO Fountain – Phun Viên" },
      { label: "Thời gian cháy", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tầm cao phóng", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tính pháp lý", value: "Tuân thủ quy định hiện hành và hướng dẫn trên nhãn" },
      { label: "Hướng dẫn an toàn", value: "Xem thông tin và khoảng cách an toàn trên nhãn" },
    ],
    highlights: [
      "Sản phẩm thuộc dòng ZPYRO của Nhà máy Z121.",
      "Đối chiếu quy cách, hiệu ứng và hướng dẫn trên nhãn sản phẩm.",
      "Kiểm tra tem, nhãn và chứng từ tại điểm bán.",
    ],
    legalNotes: [
      "Đối chiếu thông tin sản phẩm, nhãn và chứng từ tại điểm bán trước khi mua.",
      "Việc mua và sử dụng cần tuân thủ Nghị định 137/2020/NĐ-CP và quy định hiện hành.",
      "Thông tin doanh nghiệp: MST 0402356447.",
    ],
  },
  {
    slug: "gian-phun-vien-nhap-nhay",
    name: "Giàn Nhấp Nháy ZPYRO",
    category: "product",
    productType: "nhap-nhay",
    description:
      "Sản phẩm ZPYRO của Nhà máy Z121 với hiệu ứng nhấp nháy lấp lánh, tạo điểm nhấn cho không gian sự kiện.",
    image: "/images/pdf-p7-7.png",
    imageAlt: "Sản phẩm giàn phun viên nhấp nháy ZPYRO của Nhà máy Z121",
    cardNote: "ZPYRO · Hiệu Ứng Nhấp Nháy Ánh Sao",
    price: "390.000đ",
    tags: ["ZPYRO", "Hiệu Ứng Nhấp Nháy"],
    specifications: [
      { label: "Nhà sản xuất", value: "Nhà máy Z121 – Bộ Quốc phòng (Dòng ZPYRO)" },
      { label: "Dòng sản phẩm", value: "ZPYRO Strobe Nhấp Nháy Cao Cấp" },
      { label: "Thời gian cháy", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tầm cao phóng", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tính pháp lý", value: "Tuân thủ quy định hiện hành và hướng dẫn trên nhãn" },
      { label: "Hướng dẫn an toàn", value: "Xem thông tin và khoảng cách an toàn trên nhãn" },
    ],
    highlights: [
      "Hiệu ứng nhấp nháy lấp lánh theo thông tin sản phẩm.",
      "Sản phẩm thuộc dòng ZPYRO của Nhà máy Z121.",
      "Đối chiếu tem, nhãn và chứng từ tại điểm bán.",
    ],
    legalNotes: [
      "Đối chiếu thông tin sản phẩm, nhãn và chứng từ tại điểm bán trước khi mua.",
      "Việc mua và sử dụng cần tuân thủ Nghị định 137/2020/NĐ-CP và quy định hiện hành.",
      "Thông tin doanh nghiệp: MST 0402356447.",
    ],
  },
  {
    slug: "gian-phun-hoa",
    name: "Giàn Phun Hoa (ZPYRO Fountain)",
    category: "product",
    productType: "phun-hoa",
    description:
      "Giàn phun hoa ZPYRO Fountain tạo tia sáng bạc và vàng ở tầm gần, phù hợp làm điểm nhấn cho sân khấu, tiệc cưới và sự kiện.",
    image: "/images/pdf-p7-5.png",
    imageAlt: "Sản phẩm giàn phun hoa ZPYRO Fountain trong ảnh hồ sơ năng lực SALAGARDEN",
    cardNote: "ZPYRO Fountain · Đài Hoa Sân Khấu",
    price: "390.000đ",
    tags: ["Đài Phun Hoa", "Tia Sáng Bạc & Vàng"],
    specifications: [
      { label: "Nhà sản xuất", value: "Nhà máy Z121 – Bộ Quốc phòng (Dòng ZPYRO)" },
      { label: "Dòng sản phẩm", value: "ZPYRO Fountain (Đài Phun Hoa Sân Khấu)" },
      { label: "Thời gian cháy", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tầm cao phun", value: "Đối chiếu nhãn sản phẩm Z121" },
      { label: "Tính pháp lý", value: "Tuân thủ quy định hiện hành và hướng dẫn trên nhãn" },
      { label: "Phạm vi sử dụng", value: "Sân khấu ngoài trời, lối đi tiệc cưới, sinh nhật, lễ cắt băng" },
    ],
    highlights: [
      "Tia sáng bạc và vàng tạo hiệu ứng đài phun hoa tầm gần.",
      "Có thể dùng làm điểm nhấn cho sân khấu và tiệc cưới theo điều kiện địa điểm.",
      "Đối chiếu nhãn sản phẩm để biết chi tiết về hiệu ứng và cách sử dụng.",
    ],
    legalNotes: [
      "Đối chiếu thông tin sản phẩm, nhãn và chứng từ tại điểm bán trước khi mua.",
      "Việc mua và sử dụng cần tuân thủ Nghị định 137/2020/NĐ-CP và quy định hiện hành.",
      "Thông tin doanh nghiệp: MST 0402356447.",
    ],
  },
  {
    slug: "trinh-dien-su-kien",
    name: "Gói Tư Vấn & Trình Diễn Pháo Hoa Sự Kiện",
    category: "service",
    description:
      "Dịch vụ khảo sát thực địa, tư vấn kịch bản trình diễn theo ngân sách và phối hợp vận hành an toàn cho lễ hội, sự kiện doanh nghiệp và chương trình cộng đồng.",
    image: "/images/pdf-p10-2.png",
    imageAlt: "Màn trình diễn pháo hoa tại sự kiện Đại học Nghệ thuật, Đại học Huế",
    cardNote: "Khảo Sát · Kịch Bản · Vận Hành An Toàn",
    tags: ["Khảo Sát Thực Địa", "Kịch Bản Theo Ngân Sách", "Kỹ Thuật Viên PCCC", "Toàn Quốc"],
    specifications: [
      { label: "Hình thức cung cấp", value: "Khảo sát thực địa và tư vấn kịch bản trọn gói theo nhu cầu" },
      { label: "Kịch bản ánh sáng", value: "Thiết kế riêng biệt theo không gian, chủ đề và ngân sách sự kiện" },
      { label: "Phạm vi ứng dụng", value: "Festival văn hóa, lễ kỷ niệm, gala doanh nghiệp, ngày hội trường đại học" },
      { label: "Đội ngũ kỹ thuật", value: "Kỹ thuật viên phối hợp vận hành theo phương án an toàn" },
      { label: "Địa bàn phục vụ", value: "TP. Huế, TP. Đà Nẵng và tất cả các tỉnh thành trên toàn quốc" },
    ],
    highlights: [
      "Khảo sát thực địa và trao đổi quy mô, không gian, ngân sách sự kiện.",
      "Xây dựng kịch bản trình diễn phù hợp với mục tiêu chương trình.",
      "Phối hợp với ban tổ chức về yêu cầu pháp lý và phương án an toàn.",
    ],
    legalNotes: [
      "SALAGARDEN có đầy đủ tư cách pháp nhân (MST: 0402356447, Vốn điều lệ 800.000.000 VNĐ) ký kết hợp đồng kinh tế.",
      "Phương án triển khai cần được xác nhận theo yêu cầu pháp lý và điều kiện thực tế của sự kiện.",
    ],
  },
];

export const events = [
  {
    date: "15/11/2026",
    title: "Ngày Hội Chào Đón Tân Sinh Viên 2026",
    venue: "Trường Đại học Nghệ thuật – Đại học Huế",
    highlight: "Màn trình diễn pháo hoa khép lại Ngày Hội Chào Đón Tân Sinh Viên 2026.",
    image: "/media/info/arts-university-2026.jpg",
  },
  {
    date: "26/09/2026",
    title: "Sự Kiện Chào Đón Tân Sinh Viên Trường Đại Học Nông Lâm",
    venue: "Trường Đại học Nông Lâm – Đại học Huế",
    highlight: "Hiệu ứng chùm tia đa sắc hòa cùng âm nhạc sôi động, tiếp lửa nhiệt huyết tuổi trẻ.",
    image: "/media/info/nonglam-event-1.jpg",
  },
  {
    date: "21/03/2026",
    title: "Sự Kiện Chào Đón Tân Sinh Viên Đại Học Khoa Học",
    venue: "Trường Đại học Khoa học – Đại học Huế",
    highlight: "Màn trình diễn pháo hoa rực rỡ chào mừng ngày hội tân sinh viên tại Đại học Khoa học.",
    image: "/media/info/science-event-2026.jpg",
  },
  {
    date: "23/10/2025",
    title: "Ngày Hội Chào Đón Tân Sinh Viên K23",
    venue: "Trường Đại học Ngoại ngữ – Đại học Huế",
    highlight: "Khoảnh khắc khai màn rực rỡ với dòng pháo hoa ZPYRO ánh sao lung linh huyền ảo.",
    image: "/media/info/foreign-language-certificate.jpg",
  },
  {
    date: "19/10/2025",
    title: "Chào Đón TSV K49 & Học Sinh Khối 10",
    venue: "Trường THPT Chuyên Khoa học Huế",
    highlight: "Món quà tinh thần ý nghĩa tiếp sức cho các thế hệ học sinh sinh viên xuất sắc bước vào năm học mới.",
    image: "/media/info/nonglam-event-2025-2.jpg",
  },
];

export const stores = [
  {
    number: "01",
    name: "Cửa hàng Pháo hoa Số 3",
    address: "CM2-22 Lê Đức Anh, KĐT EcoGarden, TP. Huế",
    type: "Cửa hàng Pháo hoa tại TP. Huế",
    mapLink: "https://maps.google.com/?q=EcoGarden+Hue",
    image: "/media/hue/hue-1.jpg",
  },
  {
    number: "02",
    name: "Cửa hàng Pháo hoa Số 50",
    address: "405 Lê Văn Hiến, P. Ngũ Hành Sơn, TP. Đà Nẵng",
    type: "Cửa hàng Pháo hoa tại TP. Đà Nẵng",
    mapLink: "https://maps.google.com/?q=405+Le+Van+Hien+Da+Nang",
    image: "/media/danang/danang-4.jpg",
  },
];

export const coreValues = [
  {
    title: "UY TÍN",
    subtitle: "Cam kết vững chắc",
    description: "Giữ vững chữ Tín, xây dựng niềm tin và quan hệ hợp tác lâu dài với khách hàng, đối tác.",
    icon: "ShieldCheck",
  },
  {
    title: "CHẤT LƯỢNG",
    subtitle: "Chính hãng Bộ Quốc phòng",
    description: "100% sản phẩm pháo hoa xuất xưởng từ Nhà máy Z121 – GAET, đạt kiểm định an toàn kỹ thuật nghiêm ngặt.",
    icon: "Award",
  },
  {
    title: "TẬN TÂM",
    subtitle: "Đồng hành trọn vẹn",
    description: "Lắng nghe nhu cầu, tư vấn giải pháp theo ngân sách và đồng hành cùng khách hàng.",
    icon: "HeartHandshake",
  },
  {
    title: "AN TOÀN",
    subtitle: "Trách nhiệm tối cao",
    description: "Đề cao an toàn PCCC tuyệt đối, tuân thủ nghiêm ngặt Nghị định 137/2020/NĐ-CP và pháp luật Việt Nam.",
    icon: "Flame",
  },
];
