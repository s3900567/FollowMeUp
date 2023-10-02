const API_ENDPOINTS = {
  //auth
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  LOG_WITH_JWT: 'auth/loginWithJWT',
  GET_ALL_USERS: 'auth/getAllUsers',
  //payment
  CREATE_PAYMENT: 'payments/config',
  //contacts
  CREATE_CONTACT: 'contacts/new',
  GET_ALL_CONTACTS: 'contacts/getAll',
  GET_CONTACT_BY_ID: 'contacts/getByUserId',
};

export { API_ENDPOINTS };
