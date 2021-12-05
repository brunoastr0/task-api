const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const createTask = async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    res.status(201).json({ tasks });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; //defining an alias for req.params.id
    const tasks = await Task.findOne({ _id: taskID });

    if (!tasks) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const tasks = await Task.findOneAndUpdate({ _id: taskID }, req.body,{
      new:true,
      runValidators:true
    });
    if (!tasks) {
      return res.status(200).json({ msg: `No task found with id: ${taskID}` });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; //defining an alias for req.params.id
    const tasks = await Task.findByIdAndDelete(taskID);
    if (!tasks) {
      return res.status(404).json({ msg: `No task found with id: ${taskID}` });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}; /**Exporting all the functions */
