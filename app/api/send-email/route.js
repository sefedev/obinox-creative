import nodemailer from "nodemailer";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req) {
  console.log("working!");

  try {
    const formData = await req.formData();

    // const files = formData.getAll("files");
    const name = formData.get("name");
    const number = formData.get("number");
    const gender = formData.get("gender");
    const email = formData.get("email");
    const details = formData.get("details");
    const service = formData.get("service");

    // let attachments = [];

    // if (files.length > 0) {
    //   for (const file of files) {
    //     console.log(file);
    //     console.log(Object.keys(file));
    //     const buffer = Buffer.from(await file.arrayBuffer());

    //     const tempFile = `${path.resolve(".")}/${file.name}`;

    //     fs.writeFile(tempFile, buffer);

    //     attachments.push({
    //       filename: file.name,
    //       path: tempFile,
    //       contentType: file.mimetype,
    //     });
    //   }
    // }

    // Create a transporter object using your email service credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or your email service (e.g., 'SendGrid', 'Mailgun')
      auth: {
        user: process.env.GMAIL_USER, // Your email address
        pass: process.env.GMAIL_PASSWORD, // Your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Recipient email address
      replyTo: email,
      subject: "New Message for Obinox Creative",
      html: `
          <p><strong>Services:</strong> ${service}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${number}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${details}</p>
        `,
      // attachments: attachments,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // for (const file of attachments) fs.unlink(file.path);

    return NextResponse.json({ message: "Email sent successfully!" });
    // });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" });
  }
}
