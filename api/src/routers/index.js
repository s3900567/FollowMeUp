import express from 'express';
import UploadRouter from './Upload.router';
import AuthRouter from './Auth.router';

const Router = express.Router();

Router.use('/auth', AuthRouter);
Router.use('/uploads', UploadRouter);

export default Router;
