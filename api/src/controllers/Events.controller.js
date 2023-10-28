import EventsModel from '../models/Events.model';
import { success, error } from '../utils/Response';

const EventsController = {
  createEvent: async (req, res) => {
    try {
      const newEvent = await EventsModel.create(req.body);
      newEvent.save();
      return success(res, newEvent, 'Event created successfully');
    } catch (err) {
      return error(res, err, 'Event creation failed');
    }
  },

  getEventsInDateRangeByUserId: async (req, res) => {
    const { start, end, userId } = req.body;
    console.log(start, end, userId);
    const startDay = new Date(start);
    const endDay = new Date(end);
    startDay.setHours(0, 0, 0, 0);
    endDay.setHours(23, 59, 59, 999);
    try {
      const events = await EventsModel.find({
        date: {
          $gte: startDay,
          $lte: endDay,
        },
        userId,
      }).populate('contacts');
      return success(res, events, 'Events retrieved successfully');
    } catch (err) {
      return error(res, err, 'Events retrieval failed');
    }
  },

  deleteEvent: async (req, res) => {
    const { _id } = req.body;
    console.log(_id);
    try {
      const event = await EventsModel.findByIdAndDelete(_id);
      return success(res, event, 'Event deleted successfully');
    } catch (err) {
      return error(res, err, 'Event deletion failed');
    }
  },
};

export default EventsController;
