import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthAPI from '../utils/API/Auth.api';

const initialState = {
  _id: null,
  email: '',
  fullName: '',
  phoneNumber: '',
  token: '',
  status: 'idle',
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    //login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.phoneNumber = action.payload.phoneNumber;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
    //register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.phoneNumber = action.payload.phoneNumber;
      state.token = action.payload.token;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const login = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
  const response = await AuthAPI.login(payload);
  if (response.success) {
    return response.data;
  } else {
    return thunkAPI.rejectWithValue(response.message);
  }
});

export const register = createAsyncThunk('auth/register', async (payload, thunkAPI) => {
  const response = await AuthAPI.register(payload);
  if (response.success) {
    return response.data;
  } else {
    return thunkAPI.rejectWithValue(response.message);
  }
});

export default authSlice.reducer;
