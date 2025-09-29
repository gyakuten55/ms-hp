import { NextRequest, NextResponse } from 'next/server';
import { testEmailConnection, sendTestEmail } from '@/lib/email-test';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sendTest = searchParams.get('send');
    const testEmail = searchParams.get('email') || process.env.EMAIL_TO || 'info@ms-wip.com';

    console.log('Starting email configuration test...');

    // Test connection first
    const connectionOk = await testEmailConnection();
    if (!connectionOk) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email connection test failed. Check server logs for details.',
          connection: false
        },
        { status: 500 }
      );
    }

    // Optionally send a test email
    if (sendTest === 'true') {
      const emailSent = await sendTestEmail(testEmail);
      if (!emailSent) {
        return NextResponse.json(
          {
            success: false,
            message: 'Email connection OK but test email failed. Check server logs for details.',
            connection: true,
            testEmail: false
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: `Email configuration test successful! Test email sent to ${testEmail}`,
        connection: true,
        testEmail: true,
        timestamp: new Date().toISOString()
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Email connection test successful!',
      connection: true,
      testEmail: null,
      timestamp: new Date().toISOString(),
      hint: 'Add ?send=true&email=your@email.com to send a test email'
    });

  } catch (error) {
    console.error('Email test API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Email test failed with unexpected error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}