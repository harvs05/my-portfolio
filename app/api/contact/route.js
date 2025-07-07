import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { firstname, lastname, email, phone, service, message } = body;

    // Basic validation
    if (!firstname || !lastname || !email || !service || !message) {
      return Response.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter using your Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
    from: `"${firstname} ${lastname}" <${process.env.EMAIL_USER}>`, // always authenticated user
    to: process.env.EMAIL_TO,
    replyTo: email, // 👈 add this line
    subject: `New Contact Message - ${service}`,
    html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `,
    });

    console.log("✅ Email sent");

    return Response.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    return Response.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({
    message: "This is the contact API endpoint. Please POST your message.",
  });
}
