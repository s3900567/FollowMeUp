import AxiosClient from '.';
import { API_ENDPOINTS } from '../../constants/API_ENDPOINT.constants';

const PaymentAPI = {
  getConfig: async () => {
    return await AxiosClient.get(API_ENDPOINTS.CREATE_PAYMENT);
  },
};

export default PaymentAPI;
