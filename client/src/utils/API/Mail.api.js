import { API_ENDPOINTS } from '../../constants/API_ENDPOINT.constants';
import AxiosClient from '.';

const MailAPI = {
  sendMail: async (data) => {
    return await AxiosClient.post(API_ENDPOINTS.SEND_MAIL, data);
  },
};

export default MailAPI;
