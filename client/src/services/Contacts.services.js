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
  reducers: {
    filterName: (state, action) => {
      state.contacts = state.contacts.filter((contact) =>
        contact.fullName.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    filterPhone: (state, action) => {
      state.contacts = state.contacts.filter((contact) =>
        contact.phone.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    filterEmail: (state, action) => {
      state.contacts = state.contacts.filter((contact) =>
        contact.email.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    filterTags: (state, action) => {
      state.contacts = state.contacts.filter((contact) =>
        contact.tags.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
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
    builder.addCase(updateContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateContact.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.contacts = state.contacts.map((contact) => {
        if (contact._id === action.payload._id) {
          return action.payload;
        }
        return contact;
      });
    });
    builder.addCase(updateContact.rejected, (state, action) => {
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

export const updateContact = createAsyncThunk('contacts/updateContact', async (data, thunkAPI) => {
  const response = await ContactsAPI.updateContact(data._id, data);
  if (!response.success) {
    return thunkAPI.rejectWithValue(response.message);
  }
  return response.data;
});

export const { filterName, filterPhone, filterEmail, filterTags } = ContactsSlice.actions;

export default ContactsSlice.reducer;
