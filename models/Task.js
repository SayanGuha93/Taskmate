const mongoose = require("mongoose");
const { timeStamp } = require("node:console");

const taskSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
    title: String,
    description: String,
    status: {type: String, default:"pending"},
    dueDate: Date
    },
    {timestamps:true}
);

module.exports = mongoose.model("Task",taskSchema);