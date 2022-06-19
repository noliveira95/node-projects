const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Must provide a name"],
    trim: true,
    minlength: [1, "Please enter a value"],
    maxlength: [20, "Name cannot exceed 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
