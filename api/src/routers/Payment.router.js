import PaymentController from '../controllers/Payment.controller';
import { Router } from 'express';

const PaymentRouter = Router();

PaymentRouter.get('/config', PaymentController.getConfig);

export default PaymentRouter;
