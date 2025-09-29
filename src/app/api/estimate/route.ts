import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.phone || !body.email) {
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

    // Get service type label
    const getServiceLabel = (serviceType: string): string => {
      switch (serviceType) {
        case 'mansion':
          return 'マンション・アパート清掃';
        case 'office':
          return 'オフィス清掃';
        case 'parking':
          return 'コインパーキング清掃';
        case 'garbage':
          return '早朝ゴミ出し代行';
        case 'laundry':
          return 'コインランドリー清掃';
        case 'convenience':
          return 'コンビニ清掃';
        case 'grease':
          return 'グリストラップ清掃';
        case 'arcade':
          return 'ゲームセンター清掃';
        case 'other':
          return 'その他';
        default:
          return serviceType || '未選択';
      }
    };

    // Format email content for company
    const companyEmailHtml = `
      <h2>新しい無料見積もり依頼が届きました</h2>

      <h3>お客様情報</h3>
      <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">お名前</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">電話番号</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.phone}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">メールアドレス</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.email}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">サービス種類</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${getServiceLabel(body.serviceType)}</td>
        </tr>
      </table>

      ${body.message ? `
      <h3>ご要望・詳細</h3>
      <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; white-space: pre-wrap;">${body.message}</div>
      ` : ''}

      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        このメールは MS-Wip ウェブサイトの無料見積もりフォームから自動送信されました。<br>
        送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
      </p>
    `;

    // Send email to company
    await sendEmail({
      to: process.env.EMAIL_TO!,
      subject: `【MS-Wip】新しい無料見積もり依頼 - ${body.name}様`,
      html: companyEmailHtml,
    });

    // Send confirmation email to customer
    const customerEmailHtml = `
      <h2>${body.name}様</h2>

      <p>この度は、MS-Wipの無料見積もりをご依頼いただき、誠にありがとうございます。</p>

      <p>お送りいただいた見積もり依頼内容を確認させていただき、<br>
      1営業日以内に詳細なお見積もりをお送りいたします。</p>

      <h3>ご依頼内容</h3>
      <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">お名前</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.name}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">電話番号</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${body.phone}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">サービス種類</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${getServiceLabel(body.serviceType)}</td>
        </tr>
      </table>

      ${body.message ? `
      <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; white-space: pre-wrap;">${body.message}</div>
      ` : ''}

      <h3>次のステップ</h3>
      <p>お見積もり作成のため、以下の流れで進めさせていただきます：</p>
      <ol>
        <li><strong>現地確認</strong> - 詳細な見積もりのための現地調査</li>
        <li><strong>お見積もり提出</strong> - 具体的な費用とプランのご提案</li>
        <li><strong>契約・開始</strong> - ご契約後、清掃サービスの開始</li>
      </ol>

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

    await sendEmail({
      to: body.email,
      subject: '【MS-Wip】無料見積もり依頼ありがとうございます',
      html: customerEmailHtml,
    });

    return NextResponse.json(
      { message: '無料見積もり依頼を受け付けました。ありがとうございます。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in estimate API:', error);

    // Provide more specific error messages based on error type
    let userMessage = 'メールの送信に失敗しました。しばらく時間をおいて再度お試しください。';
    let statusCode = 500;

    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });

      // Check for specific error types to provide better user feedback
      if (error.message.includes('Missing required environment variables')) {
        console.error('Server configuration error - missing environment variables');
        userMessage = 'サーバー設定エラーが発生しました。管理者にお問い合わせください。';
      } else if (error.message.includes('Invalid login') || error.message.includes('Authentication failed')) {
        console.error('SMTP authentication error');
        userMessage = 'メール認証エラーが発生しました。管理者にお問い合わせください。';
      } else if (error.message.includes('ECONNREFUSED') || error.message.includes('ENOTFOUND')) {
        console.error('SMTP connection error');
        userMessage = 'メールサーバーへの接続に失敗しました。ネットワーク接続を確認してください。';
      } else if (error.message.includes('Timeout')) {
        console.error('SMTP timeout error');
        userMessage = 'メール送信がタイムアウトしました。しばらく時間をおいて再度お試しください。';
      }
    }

    return NextResponse.json(
      {
        error: userMessage,
        timestamp: new Date().toISOString(),
        requestId: Math.random().toString(36).substr(2, 9) // Simple request ID for tracking
      },
      { status: statusCode }
    );
  }
}