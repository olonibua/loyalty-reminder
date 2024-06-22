// routes/reminderRoutes.js
const express = require("express");
const router = express.Router();
const reminders = require("../models/reminder");
const sendReminderEmail = require("../Email/emailService");

// POST route to add a new reminder
router.post("/api/services/:serviceId/reminders", (req, res) => {
  const { serviceId } = req.params;
  const {
    returnPeriodQuantity,
    returnPeriodType,
    reminderLeadTimeQuantity,
    reminderLeadTimeType,
    reminderTiming,
    reminderMessage,
    userEmail,
  } = req.body;

  reminders.push({
    serviceId,
    returnPeriodQuantity,
    returnPeriodType,
    reminderLeadTimeQuantity,
    reminderLeadTimeType,
    reminderTiming,
    reminderMessage,
    userEmail, // Save userEmail with reminder
  });

  // Send reminder email
  const emailSubject = "New Reminder Created";
  const emailText = `Reminder Details:
  - Return Period: ${returnPeriodQuantity} ${returnPeriodType}
  - Lead Time: ${reminderLeadTimeQuantity} ${reminderLeadTimeType}
  - Timing: ${reminderTiming}
  - Message: ${reminderMessage}`;

  sendReminderEmail(userEmail, emailSubject, emailText);

  res
    .status(201)
    .json({ message: "Reminder configuration saved successfully" });
});

// GET route to fetch reminders by serviceId
router.get("/api/services/:serviceId/reminders", (req, res) => {
  const { serviceId } = req.params;
  const serviceReminders = reminders.filter(
    (reminder) => reminder.serviceId === serviceId
  );
  res.json(serviceReminders);
});

module.exports = router;
