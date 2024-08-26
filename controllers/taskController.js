import Task from "../models/taskModel.js";
import ErrorHandler from "../utils/errorHandler.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    await Task.create({ title, description, user: req.user });

    res.status(200).json({ success: true, message: "Task Created" });
  } catch (error) {
    next(error);
  }
};

export const getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user });

    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    next(error);
  }
};

export const updateMyTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.taskID);

    if (!task) {
      return next(new ErrorHandler("Task is unavailable", 404));
    }

    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json({ success: true, message: "Task Updated" });
  } catch (error) {
    next(error);
  }
};

export const deleteMyTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.taskID);

    if (!task) {
      return next(new ErrorHandler("Task is unavailable", 404));
    }

    await task.deleteOne(task);

    res.status(200).json({ success: true, message: "Task Deleted" });
  } catch (error) {
    next(error);
  }
};
