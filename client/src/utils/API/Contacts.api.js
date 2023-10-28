import { API_ENDPOINTS } from '../../constants/API_ENDPOINT.constants';
import AxiosClient from '.';

const ContactsAPI = {
  createContact: async (data) => {
    return await AxiosClient.post(API_ENDPOINTS.CREATE_CONTACT, data);
  },
  getAllContacts: async () => {
    return await AxiosClient.get(API_ENDPOINTS.GET_ALL_CONTACTS);
  },
  getContactById: async (uid) => {
    return await AxiosClient.get(`${API_ENDPOINTS.GET_CONTACT_BY_ID}?_id=${uid}`);
  },
  getAllTagsById: async (uid) => {
    return await AxiosClient.get(`${API_ENDPOINTS.GET_ALL_TAGS_BY_ID}?_id=${uid}`);
  },
  updateContact: async (uid, data) => {
    return await AxiosClient.put(`${API_ENDPOINTS.UPDATE_CONTACT}?_id=${uid}`, data);
  },
};

export default ContactsAPI;
