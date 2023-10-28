import { Router } from 'express';
import ContactsController from '../controllers/Contacts.controller';

const ContactsRouter = Router();

ContactsRouter.post('/new', ContactsController.newContact);
ContactsRouter.get('/getAll', ContactsController.getContacts);
ContactsRouter.get('/getByUserId', ContactsController.getContactsByUserId);
ContactsRouter.get('/getAllTagsByUserId', ContactsController.getAllTagsContactsByUserId);
ContactsRouter.put('/edit', ContactsController.editContact);

export default ContactsRouter;
