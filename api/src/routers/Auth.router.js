import express from 'express';
import AuthController from '../controllers/Auth.controller';
const AuthRouter = express.Router();

AuthRouter.post('/login', AuthController.login);
AuthRouter.post('/register', AuthController.register);
AuthRouter.get('/loginWithJWT', AuthController.loginWithJWT);
AuthRouter.get('/getAllUsers', AuthController.getAllUsers);
AuthRouter.get('/changeInfo', AuthController.changeInfo);

export default AuthRouter;
