const mongoose = require("mongoose");
const { timeStamp } = require("node:console");

const reminderSchema = new mongoose.Schema({
    taskId: {type: mongoose.Schema.Types.ObjectId, ref: "Task"},
    reminderTime: Date,
    isSent: { type: Boolean, default: false}
    },
    {timestamp:true}
);

module.exports = mongoose.model("Reminder",reminderSchema);