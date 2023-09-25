import { Button, Input, Table, Tabs } from 'antd';
import { TABS_CONTENT, TABLE_COLUMNS } from '../../../constants/ContactsPage.constants';
import { useState } from 'react';
import dayjs from 'dayjs';
import { FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
  const [tabPane, setTabPane] = useState('all_contacts');
  return (
    <main>
      <Tabs defaultActiveKey={tabPane} type='card' size='large' items={TABS_CONTENT} onChange={(e) => setTabPane(e)} />
      <div className='flex items-center justify-between'>
        <Input.Search size='large' placeholder='Search ...' className='w-80' />
        <Link to='./new'>
          <Button size='large' icon={<FiUserPlus className='mb-1 inline text-gray-500' size={16} />}>
            Add new contact
          </Button>
        </Link>
      </div>
      <Table className='mt-10' dataSource={dataTable} columns={TABLE_COLUMNS} />
    </main>
  );
}
