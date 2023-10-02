import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ContactsAPI from '../utils/API/Contacts.api';

const initialState = {
  contacts: [],
  status: 'idle',
  loading: false,
  error: null,
};

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContactsByUid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContactsByUid.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.contacts = action.payload;
    });
    builder.addCase(fetchContactsByUid.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
    builder.addCase(newContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(newContact.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.contacts = action.payload;
    });
    builder.addCase(newContact.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const fetchContactsByUid = createAsyncThunk('contacts/fetchContacts', async (_id, thunkAPI) => {
  const response = await ContactsAPI.getContactById(_id);
  if (!response.success) {
    return thunkAPI.rejectWithValue(response.message);
  }
  return response.data;
});

export const newContact = createAsyncThunk('contacts/newContact', async (data, thunkAPI) => {
  const response = await ContactsAPI.createContact(data);
  if (!response.success) {
    return thunkAPI.rejectWithValue(response.message);
  }
  return response.data;
});

export default ContactsSlice.reducer;
