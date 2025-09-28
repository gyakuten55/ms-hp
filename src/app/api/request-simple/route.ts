import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Service mapping to PDF files
const serviceFileMapping: Record<string, string> = {
  'mansion-cleaning': 'マンション清掃.pdf',
  'convenience-cleaning': 'コンビニ清掃.pdf',
  'arcade-cleaning': 'ゲームセンター清掃.pdf',
  'parking-cleaning': 'コインパーキング清掃.pdf',
  'grease-trap': 'グリストラップ清掃.pdf',
  'garbage-service': 'ゴミ出し代行.pdf'
};

const serviceNames: Record<string, string> = {
  'mansion-cleaning': 'マンション・アパート清掃',
  'convenience-cleaning': 'コンビニエンスストア清掃',
  'arcade-cleaning': 'アーケード・ゲームセンター清掃',
  'parking-cleaning': 'コインパーキング清掃',
  'grease-trap': 'グリストラップ清掃',
  'garbage-service': '早朝ゴミ出し代行'
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.selectedServices || body.selectedServices.length === 0) {
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

    // Get the selected services with file paths
    const selectedServices = body.selectedServices.map((serviceId: string) => ({
      id: serviceId,
      name: serviceNames[serviceId] || serviceId,
      fileName: serviceFileMapping[serviceId]
    })).filter((service: any) => service.fileName);

    // Prepare attachments
    const attachments = [];
    const publicDir = path.join(process.cwd(), 'public', 'bussiness_file');

    for (const service of selectedServices) {
      const filePath = path.join(publicDir, service.fileName);

      if (fs.existsSync(filePath)) {
        // Read file content as buffer for better compatibility
        const fileContent = fs.readFileSync(filePath);

        attachments.push({
          filename: service.fileName,
          content: fileContent,
          contentType: 'application/pdf',
          encoding: 'base64'
        });
      }
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: parseInt(process.env.SMTP_PORT!),
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASSWORD!,
      },
    });

    // Format email content for company
    const companyEmailHtml = `
      <h2>新しい資料請求が届きました</h2>

      <h3>お客様情報</h3>
      <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">お名前</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">メールアドレス</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.email}</td>
        </tr>
        ${body.company ? `
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">会社名</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.company}</td>
        </tr>
        ` : ''}
        ${body.phone ? `
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">電話番号</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.phone}</td>
        </tr>
        ` : ''}
      </table>

      <h3>請求された資料</h3>
      <ul style="margin-bottom: 20px;">
        ${selectedServices.map(service => `
          <li style="margin-bottom: 10px;">
            <strong>${service.name}</strong>
          </li>
        `).join('')}
      </ul>

      ${body.message ? `
      <h3>追加メッセージ</h3>
      <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; white-space: pre-wrap;">${body.message}</div>
      ` : ''}

      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        このメールは MS-Wip ウェブサイトの資料請求フォームから自動送信されました。<br>
        送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
      </p>
    `;

    // Send email to company with attachments
    await transporter.sendMail({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `【MS-Wip】新しい資料請求 - ${body.name}様`,
      html: companyEmailHtml,
      attachments: attachments,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    });

    // Send confirmation email to customer with attachments
    const customerEmailHtml = `
      <h2>${body.name}様</h2>

      <p>この度は、MS-Wipの資料請求をいただき、誠にありがとうございます。</p>

      <p>以下のサービス資料をPDFファイルにてお送りいたします：</p>
      <ul>
        ${selectedServices.map(service => `<li><strong>${service.name}</strong></li>`).join('')}
      </ul>

      <p><strong>添付ファイルをご確認ください。</strong>PDFファイルが正常に開けない場合は、お電話にてお問い合わせください。</p>

      <h3>次のステップ</h3>
      <p>資料をご確認いただき、ご不明な点やさらに詳しい情報をご希望の場合は、以下のサービスもご利用ください：</p>
      <ul>
        <li><strong>無料相談</strong> - サービス内容の詳細説明</li>
        <li><strong>お見積もり</strong> - 具体的な費用の算出</li>
        <li><strong>現地確認・デモ</strong> - 実際の作業内容のご提案</li>
      </ul>

      <p>ご不明な点やお急ぎのご相談がございましたら、お電話でもお問い合わせを承っております。</p>
      <p><strong>電話番号: 048-400-0407</strong><br>
      営業時間: 平日 9:00～18:00</p>

      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        MS-Wip<br>
        Email: info@ms-wip.com<br>
        Phone: 048-400-0407
      </p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM!,
      to: body.email,
      subject: '【MS-Wip】資料請求ありがとうございます',
      html: customerEmailHtml,
      attachments: attachments
    });

    return NextResponse.json(
      { message: '資料請求を受け付けました。ありがとうございます。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing document request:', error);
    return NextResponse.json(
      { error: 'リクエストの処理に失敗しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    );
  }
}