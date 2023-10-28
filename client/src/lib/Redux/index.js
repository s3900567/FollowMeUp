import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../../services/Auth.services';
import paymentSlice from '../../services/Payment.services';
import ContactsSlice from '../../services/Contacts.services';
import EventsSlice from '../../services/Events.services';
import TasksSlice from '../../services/Tasks.services';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    payment: paymentSlice,
    contacts: ContactsSlice,
    events: EventsSlice,
    tasks: TasksSlice,
  },
});
