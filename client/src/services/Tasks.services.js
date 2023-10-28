import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TasksAPI from '../utils/API/Tasks.api';
import { message } from 'antd';

const initialState = {
  tasks: [],
  status: 'idle',
  loading: false,
  error: null,
};

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.tasks = state.tasks.length > 0 ? [action.payload, ...state.tasks] : [action.payload];
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
    builder.addCase(getAllTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.tasks = action.payload;
    });
    builder.addCase(getAllTasks.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
    builder.addCase(updateTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.tasks = state.tasks.map((task) => {
        if (task._id === action.payload._id) {
          return action.payload;
        }
        return task;
      });
    });
    builder.addCase(updateTask.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const createTask = createAsyncThunk('tasks/createTask', async (data, thunkAPI) => {
  const response = await TasksAPI.createTask(data);
  if (!response.success) {
    message.error(response.message);
    return thunkAPI.rejectWithValue(response.message);
  }
  message.success('Task created successfully');
  return response.data;
});

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', async (data, thunkAPI) => {
  const response = await TasksAPI.getAllTasks(data);
  if (!response.success) {
    return thunkAPI.rejectWithValue(response.message);
  }
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (data, thunkAPI) => {
  const response = await TasksAPI.updateTask(data);
  if (!response.success) {
    return thunkAPI.rejectWithValue(response.message);
  }
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (_id, thunkAPI) => {
  const response = await TasksAPI.deleteTask({ _id });
  if (!response.success) {
    message.error(response.message);
    return thunkAPI.rejectWithValue(response.message);
  }
  message.success('Task deleted successfully');
  return _id;
});

export default TasksSlice.reducer;
