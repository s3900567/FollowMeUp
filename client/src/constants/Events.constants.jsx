import { Button, Space } from 'antd';
import { HiOutlineMail } from 'react-icons/hi';
import MailAPI from '../utils/API/Mail.api';

const NEW_EVENT_RULE = {
  name: [
    {
      required: true,
      message: 'Please input the event name!',
    },
  ],
  date: [
    {
      required: true,
      message: 'Please input the event date!',
    },
  ],
  time: [
    {
      required: true,
      message: 'Please input the event time!',
    },
  ],
};

const TABLE_CONTACTS_COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'fullName',
    key: 'fullName',
    width: '30%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: '30%',
  },
  {
    title: 'Phone',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    width: '30%',
  },
  {
    title: 'Action',
    key: 'action',
    width: '10%',
    render: (_, record) => (
      <Button onClick={() => sendMail(record)}>
        <HiOutlineMail size={20} className='inline' />
      </Button>
    ),
  },
];

export { NEW_EVENT_RULE, TABLE_CONTACTS_COLUMNS };
