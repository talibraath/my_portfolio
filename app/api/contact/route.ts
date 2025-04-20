import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email HTML template
    const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; color: #1f1f1f; border: 1px solid #e0e0e0; border-radius: 10px;">
  
      <h2 style="color: #4ADEDE; margin-bottom: 8px;">📩 New Message via Portfolio</h2>
      <p style="font-size: 14px; color: #666; margin-top: 0;">Someone just reached out through your contact form.</p>
  
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;"/>
  
      <div style="line-height: 1.8; font-size: 15px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4ADEDE; text-decoration: none;">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
  
        <p><strong>Message:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #4ADEDE; border-radius: 6px; white-space: pre-wrap;">
          ${message}
        </div>
      </div>
  
      <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;"/>
  
      <p style="color: #999; font-size: 12px; margin: 0;">
        This message was submitted via the contact form on your portfolio website (<a href="https://talibhusain.me" style="color: #999; text-decoration: underline;">talibhusain.me</a>).
      </p>
    </div>
  `  

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: htmlContent,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { message: "Failed to send email. Please try again." },
      { status: 500 }
    )
  }
} 