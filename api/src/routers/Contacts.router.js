import { Router } from 'express';
import ContactsController from '../controllers/Contacts.controller';

const ContactsRouter = Router();

ContactsRouter.post('/new', ContactsController.newContact);
ContactsRouter.get('/getAll', ContactsController.getContacts);
ContactsRouter.get('/getByUserId', ContactsController.getContactsByUserId);

export default ContactsRouter;
