import nodemailer from "nodemailer";

export default async function POST(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      // SENDS EMAIL
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_TO,
        subject: `New message from ${name}`,
        text: message,
        html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
      });

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
