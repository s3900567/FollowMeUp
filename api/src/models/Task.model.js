import mongoose from 'mongoose';
import Schema from '../utils/MongoDB';

const TaskSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Auth',
    },
    title: {
      type: String,
    },
    finish: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: 'Tasks',
  },
);

const TaskModel = mongoose.model('Tasks', TaskSchema);
export default TaskModel;
