import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, formatDocumentRequestEmail } from '@/lib/email';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is available
    if (!supabase) {
      return NextResponse.json(
        { error: 'データベースサービスが利用できません。お問い合わせフォームをご利用ください。' },
        { status: 503 }
      );
    }

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

    // Get client IP for logging
    const clientIP = request.headers.get('x-forwarded-for') ||
                    request.headers.get('x-real-ip') ||
                    'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Save to database
    const { data: requestData, error: requestError } = await supabase
      .from('document_requests')
      .insert({
        name: body.name,
        company: body.company || null,
        phone: body.phone || null,
        email: body.email,
        message: body.message || null,
        status: 'pending',
        ip_address: clientIP,
        user_agent: userAgent
      })
      .select()
      .single();

    if (requestError) {
      console.error('Database error:', requestError);
      return NextResponse.json(
        { error: 'データベースエラーが発生しました' },
        { status: 500 }
      );
    }

    // Get service details for selected services
    const { data: servicesData, error: servicesError } = await supabase
      .from('services')
      .select('*')
      .in('service_id', body.selectedServices);

    if (servicesError) {
      console.error('Services fetch error:', servicesError);
      return NextResponse.json(
        { error: 'サービス情報の取得に失敗しました' },
        { status: 500 }
      );
    }

    // Save service associations
    const serviceInserts = servicesData?.map(service => ({
      request_id: requestData.id,
      service_id: service.id
    })) || [];

    if (serviceInserts.length > 0) {
      const { error: junctionError } = await supabase
        .from('requested_services')
        .insert(serviceInserts);

      if (junctionError) {
        console.error('Junction table error:', junctionError);
      }
    }

    // Format services for email
    const emailServices = servicesData?.map(service => ({
      name: service.name,
      description: service.description
    })) || [];

    // Format email content
    const emailContent = formatDocumentRequestEmail({
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone,
      message: body.message,
      services: emailServices,
    });

    // Send email to company
    await sendEmail({
      to: process.env.EMAIL_TO!,
      subject: `【MS-Wip】新しい資料請求 - ${body.name}様`,
      html: emailContent.html,
      text: emailContent.text,
    });

    // Send confirmation email to customer
    const confirmationHtml = `
      <h2>${body.name}様</h2>

      <p>この度は、MS-Wipの資料請求をいただき、誠にありがとうございます。</p>

      <p>以下のサービス資料をご請求いただきました：</p>
      <ul>
        ${emailServices.map(service => `<li><strong>${service.name}</strong></li>`).join('')}
      </ul>

      <p>資料をご準備の上、1営業日以内にメールにてお送りいたします。</p>

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

    const confirmationText = `
${body.name}様

この度は、MS-Wipの資料請求をいただき、誠にありがとうございます。

以下のサービス資料をご請求いただきました：
${emailServices.map(service => `- ${service.name}`).join('\n')}

資料をご準備の上、1営業日以内にメールにてお送りいたします。

ご不明な点やお急ぎのご相談がございましたら、お電話でもお問い合わせを承っております。
電話番号: 048-400-0407
営業時間: 平日 9:00～18:00

---
MS-Wip
Email: info@ms-wip.com
Phone: 048-400-0407
    `;

    await sendEmail({
      to: body.email,
      subject: '【MS-Wip】資料請求ありがとうございます',
      html: confirmationHtml,
      text: confirmationText,
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