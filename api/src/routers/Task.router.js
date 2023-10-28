import TaskController from '../controllers/Task.controllers';
import { Router } from 'express';

const TaskRouter = Router();

TaskRouter.post('/create', TaskController.create);
TaskRouter.post('/getAll', TaskController.getAll);
TaskRouter.put('/update', TaskController.update);
TaskRouter.delete('/delete', TaskController.delete);

export default TaskRouter;
