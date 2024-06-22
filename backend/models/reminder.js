// models/reminder.js
const reminders = [
  {
    serviceId: "1",
    returnPeriodQuantity: 30,
    returnPeriodType: "days",
    reminderLeadTimeQuantity: 7,
    reminderLeadTimeType: "days",
    reminderTiming: "before",
    reminderMessage: "Reminder message for service 1",
  },
  {
    serviceId: "2",
    returnPeriodQuantity: 60,
    returnPeriodType: "days",
    reminderLeadTimeQuantity: 14,
    reminderLeadTimeType: "days",
    reminderTiming: "before",
    reminderMessage: "Reminder message for service 2",
  },
];

module.exports = reminders;
