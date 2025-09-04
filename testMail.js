// Load environment variables from config.env
require("dotenv").config({ path: __dirname + "/config/config.env" });

console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL);

const nodemailer = require("nodemailer");

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.SMTP_EMAIL}>`,
      to: "your@email.com", // replace with your real email
      subject: "Mailtrap Test",
      text: "Hello from Mailtrap",
    });

    console.log("✅ Email sent:", info.messageId);
  } catch (err) {
    console.error("❌ Error:", err);
  }
})();
