import nodemailer from 'nodemailer';

export async function sendEmail({ to, subject, html }) {
  // Configure using env or create Ethereal test account automatically
  let transporter;
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  } else {
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });
  }

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'no-reply@edureach.local',
    to,
    subject,
    html,
  });

  // Include preview URL for Ethereal accounts
  const previewUrl = nodemailer.getTestMessageUrl(info);
  return { ...info, previewUrl };
}
