import nodemailer from "nodemailer";

export default async function handler(req, res) {
  console.log("REQ BODY", req.body);

  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.VITE_APP_USER_EMAIL_TO_SEND_EMAIL,
        pass: process.env.VITE_APP_GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.VITE_APP_USER_EMAIL_TO_SEND_EMAIL,
      subject: "New Contact Form Submission",
      text: `A new contact form submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
