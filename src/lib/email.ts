import nodemailer from 'nodemailer';

export const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT!),
    secure: true, // use TLS
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASSWORD!,
    },
  });
};

export const sendEmail = async (options: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) => {
  const transporter = createEmailTransporter();

  const mailOptions = {
    from: process.env.EMAIL_FROM!,
    to: options.to,
    subject: options.subject,
    html: options.html,
    text: options.text,
  };

  return await transporter.sendMail(mailOptions);
};

export const formatContactEmail = (data: {
  name: string;
  email: string;
  company?: string;
  position?: string;
  phone?: string;
  inquiryType: string;
  website?: string;
  message: string;
}) => {
  const html = `
    <h2>新しいお問い合わせが届きました</h2>

    <h3>お客様情報</h3>
    <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">お名前</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${data.name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">メールアドレス</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${data.email}</td>
      </tr>
      ${data.company ? `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">会社名</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${data.company}</td>
      </tr>
      ` : ''}
      ${data.position ? `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">役職</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${data.position}</td>
      </tr>
      ` : ''}
      ${data.phone ? `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">電話番号</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${data.phone}</td>
      </tr>
      ` : ''}
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">ご相談内容種別</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${getInquiryTypeLabel(data.inquiryType)}</td>
      </tr>
      ${data.website ? `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">サイトURL</td>
        <td style="border: 1px solid #ddd; padding: 8px;"><a href="${data.website}">${data.website}</a></td>
      </tr>
      ` : ''}
    </table>

    <h3>お問い合わせ内容</h3>
    <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; white-space: pre-wrap;">${data.message}</div>

    <hr style="margin: 20px 0;">
    <p style="color: #666; font-size: 12px;">
      このメールは MS-Wip ウェブサイトのお問い合わせフォームから自動送信されました。<br>
      送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
    </p>
  `;

  const text = `
新しいお問い合わせが届きました

お客様情報:
お名前: ${data.name}
メールアドレス: ${data.email}
${data.company ? `会社名: ${data.company}\n` : ''}
${data.position ? `役職: ${data.position}\n` : ''}
${data.phone ? `電話番号: ${data.phone}\n` : ''}
ご相談内容種別: ${getInquiryTypeLabel(data.inquiryType)}
${data.website ? `サイトURL: ${data.website}\n` : ''}

お問い合わせ内容:
${data.message}

---
このメールは MS-Wip ウェブサイトのお問い合わせフォームから自動送信されました。
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
  `;

  return { html, text };
};

export const formatDocumentRequestEmail = (data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  services: Array<{ name: string; description?: string }>;
}) => {
  const html = `
    <h2>新しい資料請求が届きました</h2>

    <h3>お客様情報</h3>
    <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">お名前</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${data.name}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">メールアドレス</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${data.email}</td>
      </tr>
      ${data.company ? `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">会社名</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${data.company}</td>
      </tr>
      ` : ''}
      ${data.phone ? `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">電話番号</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${data.phone}</td>
      </tr>
      ` : ''}
    </table>

    <h3>請求された資料</h3>
    <ul style="margin-bottom: 20px;">
      ${data.services.map(service => `
        <li style="margin-bottom: 10px;">
          <strong>${service.name}</strong>
          ${service.description ? `<br><span style="color: #666; font-size: 14px;">${service.description}</span>` : ''}
        </li>
      `).join('')}
    </ul>

    ${data.message ? `
    <h3>追加メッセージ</h3>
    <div style="border: 1px solid #ddd; padding: 15px; background-color: #f9f9f9; white-space: pre-wrap;">${data.message}</div>
    ` : ''}

    <hr style="margin: 20px 0;">
    <p style="color: #666; font-size: 12px;">
      このメールは MS-Wip ウェブサイトの資料請求フォームから自動送信されました。<br>
      送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
    </p>
  `;

  const text = `
新しい資料請求が届きました

お客様情報:
お名前: ${data.name}
メールアドレス: ${data.email}
${data.company ? `会社名: ${data.company}\n` : ''}
${data.phone ? `電話番号: ${data.phone}\n` : ''}

請求された資料:
${data.services.map(service => `- ${service.name}`).join('\n')}

${data.message ? `追加メッセージ:\n${data.message}\n` : ''}

---
このメールは MS-Wip ウェブサイトの資料請求フォームから自動送信されました。
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
  `;

  return { html, text };
};

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