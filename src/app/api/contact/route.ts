import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, formatContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.inquiryType || !body.message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: '正しいメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // Format email content
    const emailContent = formatContactEmail({
      name: body.name,
      email: body.email,
      company: body.company,
      position: body.position,
      phone: body.phone,
      inquiryType: body.inquiryType,
      website: body.website,
      message: body.message,
    });

    // Send email to company
    await sendEmail({
      to: process.env.EMAIL_TO!,
      subject: `【MS-Wip】新しいお問い合わせ - ${body.name}様`,
      html: emailContent.html,
      text: emailContent.text,
    });

    // Send confirmation email to customer
    const confirmationHtml = `
      <h2>${body.name}様</h2>

      <p>この度は、MS-Wipにお問い合わせをいただき、誠にありがとうございます。</p>

      <p>お送りいただいたお問い合わせ内容を確認させていただき、<br>
      1営業日以内にご返信させていただきます。</p>

      <h3>お問い合わせ内容</h3>
      <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">お名前</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">メールアドレス</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.email}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">ご相談内容種別</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${getInquiryTypeLabel(body.inquiryType)}</td>
        </tr>
      </table>

      <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; white-space: pre-wrap;">${body.message}</div>

      <p>お急ぎの場合は、お電話でもお問い合わせを承っております。</p>
      <p><strong>電話番号: 048-400-0407</strong><br>
      営業時間: 平日 9:00～18:00</p>

      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        MS-Wip<br>
        Email: info@ms-wip.com<br>
        Phone: 048-400-0407
      </p>
    `;

    const confirmationText = `
${body.name}様

この度は、MS-Wipにお問い合わせをいただき、誠にありがとうございます。

お送りいただいたお問い合わせ内容を確認させていただき、
1営業日以内にご返信させていただきます。

お急ぎの場合は、お電話でもお問い合わせを承っております。
電話番号: 048-400-0407
営業時間: 平日 9:00～18:00

---
MS-Wip
Email: info@ms-wip.com
Phone: 048-400-0407
    `;

    await sendEmail({
      to: body.email,
      subject: '【MS-Wip】お問い合わせありがとうございます',
      html: confirmationHtml,
      text: confirmationText,
    });

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。ありがとうございます。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'メールの送信に失敗しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    );
  }
}

function getInquiryTypeLabel(type: string): string {
  switch (type) {
    case 'estimate':
      return 'お見積りの依頼';
    case 'service':
      return 'サービス内容の相談';
    case 'schedule':
      return '清掃スケジュールの相談';
    case 'other':
      return 'その他のお問い合わせ';
    default:
      return type;
  }
}