const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

// GET ALL TASKS
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
// CREATE NEW TASK
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
// GET A SINGLE TASK
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `Task ID : ${taskID} is not found` });
  }
  res.status(200).json({ task });
});
// DELETE TASK
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `Task ID : ${taskID} is not found` });
  }
  res.status(200).json({ msg: `Task ID : ${taskID} has been deleted` });
});
// UPDATE TASK
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `Task ID : ${taskID} is not found` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
