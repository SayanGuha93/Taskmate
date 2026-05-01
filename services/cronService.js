const cron = require("node-cron");
const Reminder = require("../models/Reminder");
const Task = require("../models/Task");
const User = require("../models/User");
const { sendEmail } = require("./emailService");

cron.schedule("* * * * *", async () => {
  const reminders = await Reminder.find({
    reminderTime: { $lte: new Date() },
    isSent: false
  }).populate({
    path: "taskId",
    populate: { path: "userId" }
  });

  for (let r of reminders) {
    const user = r.taskId.userId;

    await sendEmail(
      user.email,
      "Task Reminder",
      `Reminder: ${r.taskId.title}`
    );

    r.isSent = true;
    await r.save();
  }
});