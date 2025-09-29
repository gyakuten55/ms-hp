import { createEmailTransporter } from './email';

export async function testEmailConnection() {
  try {
    console.log('Starting email connection test...');

    // Check environment variables
    const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'EMAIL_FROM'];
    const missingVars = requiredVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
      console.error('❌ Missing environment variables:', missingVars);
      return false;
    }

    console.log('✅ All required environment variables are present');

    // Test SMTP configuration
    console.log('Testing SMTP configuration...');
    console.log(`Host: ${process.env.SMTP_HOST}`);
    console.log(`Port: ${process.env.SMTP_PORT}`);
    console.log(`User: ${process.env.SMTP_USER}`);
    console.log(`From: ${process.env.EMAIL_FROM}`);

    // Create transporter and verify connection
    const transporter = createEmailTransporter();
    console.log('Testing SMTP connection...');

    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!');

    return true;
  } catch (error) {
    console.error('❌ Email connection test failed:');
    if (error instanceof Error) {
      console.error('Error:', error.message);
      console.error('Stack:', error.stack);
    } else {
      console.error('Unknown error:', error);
    }
    return false;
  }
}

export async function sendTestEmail(to: string) {
  try {
    console.log(`Sending test email to ${to}...`);

    const transporter = createEmailTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM!,
      to: to,
      subject: 'MS-Wip Email Test',
      html: `
        <h2>Email Test Successful</h2>
        <p>This is a test email from MS-Wip website.</p>
        <p>If you receive this email, the email configuration is working correctly.</p>
        <p>Sent at: ${new Date().toISOString()}</p>
      `,
      text: `Email Test Successful

This is a test email from MS-Wip website.
If you receive this email, the email configuration is working correctly.

Sent at: ${new Date().toISOString()}`
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);
    return true;
  } catch (error) {
    console.error('❌ Failed to send test email:');
    if (error instanceof Error) {
      console.error('Error:', error.message);
      console.error('Stack:', error.stack);
    } else {
      console.error('Unknown error:', error);
    }
    return false;
  }
}