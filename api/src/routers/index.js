import express from 'express';
import AuthRouter from './Auth.router';
import ContactsRouter from './Contacts.router';
import EventsRouter from './Events.router';
import PaymentRouter from './Payment.router';
import TaskRouter from './Task.router';
import UploadRouter from './Upload.router';
import mailRouter from './Mail.router';

const Router = express.Router();

Router.use('/auth', AuthRouter);
Router.use('/uploads', UploadRouter);
Router.use('/payments', PaymentRouter);
Router.use('/contacts', ContactsRouter);
Router.use('/events', EventsRouter);
Router.use('/tasks', TaskRouter);
Router.use('/mail', mailRouter);

export default Router;
