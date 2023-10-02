import mongoose from 'mongoose';
import Schema from '../utils/MongoDB';

const ContactsSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      ref: 'Auth',
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    lastContacted: {
      type: Date,
    },
    occupation: {
      type: String,
    },
    moreInfo: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
    collection: 'Contacts',
  },
);

const ContactsModel = mongoose.model('Contacts', ContactsSchema);
export default ContactsModel;
