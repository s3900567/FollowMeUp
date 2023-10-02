import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PaymentAPI from '../utils/API/Payment.api';

const initialState = {
  status: 'idle',
  loading: false,
  error: null,
  clientSecret: '',
  publishableKey: '',
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  extraReducers: (builder) => {
    //getConfig
    builder.addCase(getConfig.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getConfig.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.clientSecret = action.payload.clientSecret;
      state.publishableKey = action.payload.publishableKey;
    });
    builder.addCase(getConfig.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const getConfig = createAsyncThunk('payment/getConfig', async (_, thunkAPI) => {
  const response = await PaymentAPI.getConfig();
  if (response.success) {
    return response.data;
  } else {
    return thunkAPI.rejectWithValue(response.message);
  }
});

export default paymentSlice.reducer;
