const API_ENDPOINTS = {
  //auth
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  LOG_WITH_JWT: 'auth/loginWithJWT',
  GET_ALL_USERS: 'auth/getAllUsers',
  CHANGE_INFO: 'auth/changeInfo',
  //payment
  CREATE_PAYMENT: 'payments/config',
  //contacts
  CREATE_CONTACT: 'contacts/new',
  GET_ALL_CONTACTS: 'contacts/getAll',
  GET_CONTACT_BY_ID: 'contacts/getByUserId',
  GET_ALL_TAGS_BY_ID: 'contacts/getAllTagsByUserId',
  UPDATE_CONTACT: 'contacts/edit',
  //events
  CREATE_EVENT: 'events/create',
  GET_EVENTS_IN_DATE_RANGE_BY_ID: 'events/getInDateRangeById',
  DELETE_EVENT: 'events/delete',
  //tasks
  CREATE_TASK: 'tasks/create',
  GET_ALL_TASKS: 'tasks/getAll',
  UPDATE_TASK: 'tasks/update',
  DELETE_TASK: 'tasks/delete',
  //Mail
  SEND_MAIL: 'mail/send',
};

export { API_ENDPOINTS };
