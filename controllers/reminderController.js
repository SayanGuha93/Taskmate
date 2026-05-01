const Reminder = require("../models/Reminder");

exports.createReminder = async (req, res) => {
  try {
    const reminder = await Reminder.create(req.body);
    res.json(reminder);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};