// const nodemailer = require('nodemailer');

// const sendEmail = async (options)  => {
//   // Create reusable transporter object using the default SMTP transport
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: "api",
//       pass: process.env.SMTP_PASSWORD
//     }
//   })

//   const message = {
//     from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
//     to: options.email,
//     subject: options.subject,
//     text: options.message
//   }

//   const info = await transporter.sendMail(message);
//   console.log('Message sent: %s', info.messageId);
// }

// module.exports = sendEmail;
const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL, // ✅ apismtp@mailtrap.io
      pass: process.env.SMTP_PASSWORD, // ✅ 2c0a6ac91c366ecaabfbac9f4dc1cd6d
    },
  });

  const message = {
    from: `"${process.env.FROM_NAME}" <${process.env.SMTP_EMAIL}>`, // ✅ must match Mailtrap login
    to: options.email,
    subject: options.subject,
    text: options.message,
    replyTo: "alaooluwatobi51@gmail.com", // optional
  };

  const info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;

