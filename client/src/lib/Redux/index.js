import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../services/Auth.services';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
