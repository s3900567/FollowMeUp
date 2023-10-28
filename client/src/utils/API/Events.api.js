import { API_ENDPOINTS } from '../../constants/API_ENDPOINT.constants';
import AxiosClient from '.';

const EventsAPI = {
  createEvent: async (data) => {
    return await AxiosClient.post(API_ENDPOINTS.CREATE_EVENT, data);
  },
  getInDateRangeById: async (data) => {
    return await AxiosClient.post(API_ENDPOINTS.GET_EVENTS_IN_DATE_RANGE_BY_ID, data);
  },
  deleteEvent: async (data) => {
    return await AxiosClient.delete(API_ENDPOINTS.DELETE_EVENT, { data });
  },
};

export default EventsAPI;
