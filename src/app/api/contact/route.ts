import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL!;
const RESEND_FROM = process.env.RESEND_FROM!;

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  try {
    // Send notification to Office 102
    await resend.emails.send({
      from: RESEND_FROM,
      to: CONTACT_EMAIL,
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    // Send auto-reply to the user
    await resend.emails.send({
      from: RESEND_FROM,
      to: email,
      subject: 'We received your message — Office 102 LLC',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to us! We've received your message and our team will get back to you as soon as possible.</p>
        <p>Here's a copy of what you sent us:</p>
        <blockquote style="border-left: 3px solid #e74c0a; padding-left: 12px; color: #555;">
          <p><strong>Subject:</strong> ${subject}</p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        </blockquote>
        <p>If you have any urgent queries, feel free to call us at <strong>+1 (571) 516-6723</strong>.</p>
        <br/>
        <p>Best regards,<br/><strong>Office 102 LLC Team</strong></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
