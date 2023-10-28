import { Router } from 'express';
import EventsController from '../controllers/Events.controller';
const EventsRouter = Router();

EventsRouter.post('/create', EventsController.createEvent);
EventsRouter.post('/getInDateRangeById', EventsController.getEventsInDateRangeByUserId);
EventsRouter.delete('/delete', EventsController.deleteEvent);

export default EventsRouter;
