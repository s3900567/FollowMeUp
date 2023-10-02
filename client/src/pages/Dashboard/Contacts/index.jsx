import { Button, Input, Table } from 'antd';
import dayjs from 'dayjs';
import { FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TABLE_COLUMNS } from '../../../constants/ContactsPage.constants';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsByUid } from '../../../services/Contacts.services';

const dataTable = [
  {
    key: '1',
    name: 'John Brown',
    email: 'demo@dev.com',
    phone: '1234567890',
    lastContacted: dayjs(Date.now()).format('DD/MM/YYYY'),
    tags: ['tag1', 'tag2'],
    createDate: dayjs(Date.now()).format('DD/MM/YYYY'),
  },
  {
    key: '2',
    name: 'John Brown',
    email: 'demo@dev.com',
    phone: '1234567890',
    lastContacted: dayjs(Date.now()).format('DD/MM/YYYY'),
    tags: ['tag1', 'tag2'],
    createDate: dayjs(Date.now()).format('DD/MM/YYYY'),
  },
  {
    key: '3',
    name: 'John Brown',
    email: 'demo@dev.com',
    phone: '1234567890',
    lastContacted: dayjs(Date.now()).format('DD/MM/YYYY'),
    tags: ['tag1', 'tag2'],
    createDate: dayjs(Date.now()).format('DD/MM/YYYY'),
  },
];

export default function ContactsPage() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const contacts = useSelector((state) => state.contacts.contacts);
  useLayoutEffect(() => {
    if (auth._id) {
      dispatch(fetchContactsByUid(auth._id));
    }
  }, [auth._id]);
  return (
    <main>
      <div className='flex items-center justify-between'>
        <Input.Search size='large' placeholder='Search ...' className='w-80' />
        <Link to='./new'>
          <Button size='large' icon={<FiUserPlus className='mb-1 inline text-gray-500' size={16} />}>
            Add new contact
          </Button>
        </Link>
      </div>
      {contacts.length > 0 && <Table className='mt-10' dataSource={contacts} columns={TABLE_COLUMNS} />}
    </main>
  );
}
