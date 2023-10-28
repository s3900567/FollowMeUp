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
  getAllTagsContactsByUserId: async (req, res) => {
    const { _id } = req.query;
    const contacts = await ContactsModel.find({ userId: _id });
    const tags = new Set();
    contacts.forEach((contact) => {
      contact.tags.forEach((tag) => {
        tags.add(tag);
      });
    });
    return success(res, [...tags], 'Tags retrieved successfully');
    // return success(res, contacts, 'Contacts retrieved successfully');
  },
  editContact: async (req, res) => {
    const { _id } = req.query;
    const { fullName, phoneNumber, email, lastContacted, tags, occupation, moreInfo } = req.body;
    
    const contact = await ContactsModel.findOneAndUpdate(
      { _id },
      { fullName, phoneNumber, email, lastContacted, tags, occupation, moreInfo },
      { new: true },
    );
    return success(res, contact, 'Contact updated successfully');
  },
};

export default ContactsController;
