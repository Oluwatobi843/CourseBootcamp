// testMail.js
require("dotenv").config({ path: __dirname + "/config/config.env" });
const nodemailer = require("nodemailer");

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // use SSL (465)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: "alaooluwatobi97@gmail.com", // send to yourself first
      subject: "🚀 Gmail SMTP Test",
      text: "This is a test email sent using Gmail SMTP and Nodemailer.",
    });

    console.log("✅ Email sent:", info.messageId);
  } catch (err) {
    console.error("❌ Error:", err);
  }
})();
