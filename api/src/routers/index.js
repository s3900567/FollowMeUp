import express from 'express';
import UploadRouter from './Upload.router';
import AuthRouter from './Auth.router';
import PaymentRouter from './Payment.router';
import ContactsRouter from './Contacts.router';

const Router = express.Router();

Router.use('/auth', AuthRouter);
Router.use('/uploads', UploadRouter);
Router.use('/payments', PaymentRouter);
Router.use('/contacts', ContactsRouter);

export default Router;
