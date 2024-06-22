const sendReminderEmail = require("./emailService");

sendReminderEmail(
  "recipient-email@example.com",
  "Test Subject",
  "Test email body"
);
