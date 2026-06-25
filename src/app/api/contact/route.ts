import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const smtpTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? 'mail.office102llc.com',
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: true,
  auth: {
    user: process.env.SMTP_USER ?? 'Info@office102llc.com',
    pass: process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL ?? 'Info@office102llc.com';

  /* ── Notify the firm via SMTP (direct delivery, no spam risk) ── */
  try {
    await smtpTransport.sendMail({
      from: `"Office 102 Website" <${process.env.SMTP_USER ?? 'Info@office102llc.com'}>`,
      to,
      replyTo: email,
      subject: `[Office 102] New Contact from ${name}`,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}\nSubject: ${subject}\nMessage:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#e74c0a;padding:24px;text-align:center;">
            <h1 style="color:white;margin:0;font-size:20px;letter-spacing:1px;">OFFICE 102 LLC</h1>
            <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:12px;">New Contact Form Submission</p>
          </div>
          <div style="padding:32px;background:#f9fafb;border:1px solid #e5e7eb;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;width:120px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#111827;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#111827;"><a href="mailto:${email}" style="color:#e74c0a;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#111827;">${phone}</td></tr>` : ''}
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">Subject</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#111827;">${subject}</td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;font-size:13px;vertical-align:top;">Message</td><td style="padding:10px 0;color:#374151;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td></tr>
            </table>
          </div>
          <div style="padding:16px 32px;background:#fff;border:1px solid #e5e7eb;border-top:none;text-align:right;">
            <a href="mailto:${email}" style="background:#e74c0a;color:#fff;padding:10px 20px;text-decoration:none;font-weight:bold;font-size:13px;">Reply to ${name}</a>
          </div>
        </div>
      `,
    });
  } catch (smtpErr: any) {
    console.error('[contact/route] SMTP error:', smtpErr?.message);
    return NextResponse.json({ error: 'Failed to send notification.' }, { status: 500 });
  }

  /* ── Auto-reply to client via Resend ── */
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'Office 102 LLC <no-reply@office102llc.com>',
      to: email,
      subject: 'We received your message — Office 102 LLC',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#e74c0a;padding:24px;text-align:center;">
            <h1 style="color:white;margin:0;font-size:20px;letter-spacing:1px;">OFFICE 102 LLC</h1>
          </div>
          <div style="padding:32px;background:#f9fafb;border:1px solid #e5e7eb;">
            <h2 style="color:#111827;margin-top:0;">Thank you, ${name}!</h2>
            <p style="color:#374151;line-height:1.7;">We have received your message and our team will get back to you as soon as possible.</p>
            <p style="color:#374151;line-height:1.7;">If you have any urgent queries, feel free to call us at <strong>+1 (571) 516-6723</strong>.</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
            <p style="color:#9ca3af;font-size:12px;margin:0;">Office 102 LLC — Your trusted partner.</p>
          </div>
        </div>
      `,
    });
  } catch (resendErr) {
    console.error('[contact/route] Resend auto-reply error:', resendErr);
    // Non-fatal — firm already notified via SMTP
  }

  /* ── Save lead to dashboard ── */
  try {
    await fetch(`${process.env.DASHBOARD_URL}/api/public/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-secret': process.env.CONTACT_API_SECRET ?? '',
      },
      body: JSON.stringify({ name, email, phone: phone ?? null, source: 'Office102' }),
    });
  } catch {
    // Non-fatal
  }

  return NextResponse.json({ success: true });
}
