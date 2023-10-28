import MailController from '../controllers/Mail.controller';
import { Router } from 'express';

const mailRouter = Router();

mailRouter.post('/send', MailController.sendMail);

export default mailRouter;
