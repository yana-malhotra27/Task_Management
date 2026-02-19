const Task = require('../models/Task');

// GET ALL
exports.getAll = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// GET ONE
exports.getOne = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

// CREATE
exports.create = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

// UPDATE
exports.update = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};

// DELETE
exports.remove = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
