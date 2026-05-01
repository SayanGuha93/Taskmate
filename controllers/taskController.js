const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      userId: req.user.id
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updates = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, // ownership check
      updates,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id // ownership check added
    });

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};