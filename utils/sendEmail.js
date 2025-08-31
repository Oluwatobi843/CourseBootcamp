const nodemailer = require('nodemailer');

const sendEmail = async (options)  => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you dont have a real mail account for testing

    let testAccount = await nodemailer.createTestAccount();
}