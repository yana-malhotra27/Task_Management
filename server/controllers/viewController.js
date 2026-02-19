const Task = require('../models/Task');

// Dashboard
exports.dashboard = async (req, res) => {
  const tasks = await Task.find();
  res.render('index', { tasks });
};

// Show Add Page
exports.showAdd = (req, res) => {
  res.render('add');
};

// Create Task (From Form)
exports.createTask = async (req, res) => {
  await Task.create(req.body);
  res.redirect('/');
};

// Show Edit Page
exports.showEdit = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.render('edit', { task });
};

// Update Task
exports.updateTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
};

// Delete Task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
