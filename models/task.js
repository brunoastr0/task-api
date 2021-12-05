const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: [true, "must provide a name"], trim: true },
  completed: { type: Boolean, default: false },
  description: {type: String,required:[true,"description cannot be empty"]},
  deadline : {type:Date}
});

module.exports = mongoose.model("Task", TaskSchema);
