import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import EventsAPI from '../utils/API/Events.api';
import { notification } from 'antd';

const initialState = {
  events: [],
  status: 'idle',
  loading: false,
  error: null,
};

export const EventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    // builder.addCase(createEvent.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(createEvent.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.status = 'success';
    //   state.events = state.events.length > 0 ? [...state.events, action.payload] : [action.payload];
    // });
    // builder.addCase(createEvent.rejected, (state, action) => {
    //   state.loading = false;
    //   state.status = 'failed';
    //   state.error = action.payload;
    // });
    builder.addCase(getEventsInDateRangeByUserId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEventsInDateRangeByUserId.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.events = action.payload;
    });
    builder.addCase(getEventsInDateRangeByUserId.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const createEvent = createAsyncThunk('events/createEvent', async (data, thunkAPI) => {
  const response = await EventsAPI.createEvent(data);
  if (!response.success) {
    notification.error({
      message: 'Error',
      description: response.message,
    });
    return thunkAPI.rejectWithValue(response.message);
  }
  notification.success({
    message: 'Success',
    description: 'Event created successfully',
  });
  return response.data;
});

export const getEventsInDateRangeByUserId = createAsyncThunk(
  'events/getEventsInDateRangeByUserId',
  async (data, thunkAPI) => {
    const response = await EventsAPI.getInDateRangeById(data);
    if (!response.success) {
      return thunkAPI.rejectWithValue(response.message);
    }
    return response.data;
  },
);

export const deleteEvent = createAsyncThunk('events/deleteEvent', async (data, thunkAPI) => {
  const response = await EventsAPI.deleteEvent(data);
  if (!response.success) {
    notification.error({
      message: 'Error',
      description: response.message,
    });
    return thunkAPI.rejectWithValue(response.message);
  }
  notification.success({
    message: 'Success',
    description: 'Event deleted successfully',
  });
  return response.data;
});

export default EventsSlice.reducer;
