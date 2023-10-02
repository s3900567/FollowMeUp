import { success, error } from '../utils/Response';
import ContactsModel from '../models/Contacts.model';

const ContactsController = {
  newContact: async (req, res) => {
    const { fullName, phoneNumber, email, lastContacted, tags, userId, occupation, moreInfo } = req.body;
    const newContact = new ContactsModel({
      userId,
      fullName,
      phoneNumber,
      email,
      lastContacted,
      tags,
      occupation,
      moreInfo,
    });
    await newContact.save();
    return success(res, newContact, 'New contact created successfully');
  },
  getContacts: async (req, res) => {
    const contacts = await ContactsModel.find().populate('userId');
    return success(res, contacts, 'Contacts retrieved successfully');
  },
  getContactsByUserId: async (req, res) => {
    const { _id } = req.query;
    const contacts = await ContactsModel.find({ userId: _id }).populate('userId');
    return success(res, contacts, 'Contacts retrieved successfully');
  },
};

export default ContactsController;
