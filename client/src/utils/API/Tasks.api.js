import { API_ENDPOINTS } from '../../constants/API_ENDPOINT.constants';
import AxiosClient from '.';

const TasksAPI = {
  createTask: async (data) => {
    return await AxiosClient.post(API_ENDPOINTS.CREATE_TASK, data);
  },
  getAllTasks: async (data) => {
    return await AxiosClient.post(API_ENDPOINTS.GET_ALL_TASKS, data);
  },
  updateTask: async (data) => {
    return await AxiosClient.put(API_ENDPOINTS.UPDATE_TASK, data);
  },
  deleteTask: async (data) => {
    return await AxiosClient.delete(API_ENDPOINTS.DELETE_TASK, { data });
  },
};

export default TasksAPI;
