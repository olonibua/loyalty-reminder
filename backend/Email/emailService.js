const nodemailer = require("nodemailer");

async function sendReminderEmail(to, subject, text) {
  // Create a test account on Ethereal
  let testAccount = await nodemailer.createTestAccount();

  // Create a transporter using the Ethereal test account
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const mailOptions = {
    from: '"Demo Service" <demo@example.com>',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error("Error sending email:", error);
    }
    console.log("Email sent:", info.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  });
}

module.exports = sendReminderEmail;
