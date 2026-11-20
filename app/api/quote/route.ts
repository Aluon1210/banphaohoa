import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().replace(/\s+/g, " ").slice(0, maxLength)
    : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = cleanText(body.name, 100);
    const phone = cleanText(body.phone, 30);
    const product = cleanText(body.product, 200);
    const note = cleanText(body.note, 1500);

    if (!name || !phone || !product) {
      return NextResponse.json(
        { success: false, message: "Vui lòng nhập họ tên, số điện thoại và chọn sản phẩm/dịch vụ." },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, QUOTE_EMAIL_TO } =
      process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !QUOTE_EMAIL_TO) {
      console.error("Quote email SMTP configuration is incomplete.");
      return NextResponse.json(
        { success: false, message: "Hệ thống email chưa được cấu hình đầy đủ." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE !== "false",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Báo giá BQP Pháo hoa" <${SMTP_USER}>`,
      to: QUOTE_EMAIL_TO,
      replyTo: undefined,
      subject: `Báo giá BQP Pháo hoa - ${name} - ${phone}`,
      text: [
        "YÊU CẦU BÁO GIÁ BQP PHÁO HOA",
        "",
        `Họ và tên: ${name}`,
        `Số điện thoại/Zalo: ${phone}`,
        `Sản phẩm/dịch vụ: ${product || "Chưa chọn"}`,
        `Ghi chú: ${note || "Không có"}`,
      ].join("\n"),
      html: `
        <h2>Yêu cầu báo giá BQP Pháo hoa</h2>
        <p><strong>Họ và tên:</strong> ${escapeHtml(name)}</p>
        <p><strong>Số điện thoại/Zalo:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Sản phẩm/dịch vụ:</strong> ${escapeHtml(product || "Chưa chọn")}</p>
        <p><strong>Ghi chú:</strong><br>${escapeHtml(note || "Không có").replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Yêu cầu báo giá đã được gửi thành công.",
    });
  } catch (error) {
    console.error("Failed to send quote email:", error);
    return NextResponse.json(
      { success: false, message: "Không thể gửi email lúc này. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
