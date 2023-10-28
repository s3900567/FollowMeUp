import TaskModel from '../models/Task.model';
import { success, error } from '../utils/Response';

const TaskController = {
  create: async (req, res) => {
    try {
      const { userId, title } = req.body;
      const task = await TaskModel.create({ userId, title });
      return success(res, task, 'Task created');
    } catch (err) {
      return error(res, err);
    }
  },
  getAll: async (req, res) => {
    try {
      const { userId } = req.body;
      const tasks = await TaskModel.find({ userId });
      return success(res, tasks, 'Tasks retrieved');
    } catch (err) {
      return error(res, err);
    }
  },
  update: async (req, res) => {
    try {
      const { _id, title, finish } = req.body;
      const task = await TaskModel.findOneAndUpdate({ _id }, { title, finish }, { new: true });
      return success(res, task, 'Task updated');
    } catch (err) {
      return error(res, err, 'Task not found');
    }
  },
  delete: async (req, res) => {
    try {
      const { _id } = req.body;
      await TaskModel.deleteOne({ _id });
      return success(res, null, 'Task deleted');
    } catch (err) {
      return error(res, err);
    }
  },
};

export default TaskController;
