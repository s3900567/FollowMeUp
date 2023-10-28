import mongoose from 'mongoose';
import Schema from '../utils/MongoDB';

const EventsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Auth',
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
    },
    start: {
      type: String,
    },
    end: {
      type: String,
    },
    color: {
      type: String,
    },
    contacts: [{ type: Schema.Types.ObjectId, ref: 'Contacts' }],
  },
  {
    timestamps: true,
    collection: 'Events',
  },
);

const EventsModel = mongoose.model('Events', EventsSchema);
export default EventsModel;
