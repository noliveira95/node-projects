// Import model
const Task = require("../models/Task");

// GET ALL TASKS
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// CREATE NEW TASK
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// GET A SINGLE TASK
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
// UPDATE TASK
const updateTask = (req, res) => {
  res.send("Updated task");
};
// DELETE TASK
const deleteTask = (req, res) => {
  res.send("Deleted task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
