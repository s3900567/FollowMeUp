import { Button, Tag } from 'antd';
import dayjs from 'dayjs';
import { CiMail } from 'react-icons/ci';

const TABS_CONTENT = [
  {
    label: 'All contacts',
    key: 'all_contacts',
  },
  {
    label: 'My contacts',
    key: 'my_contacts',
  },
  {
    label: 'Unassigned contacts',
    key: 'unassigned_contacts',
  },
];

const TABLE_COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Last contacted',
    dataIndex: 'lastContacted',
    key: 'lastContacted',
    render: (date) => {
      return dayjs(date).format('DD/MM/YYYY');
    },
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: (_, { tags }) => {
      return tags.map((tag) => (
        <Tag key={tag} color='blue'>
          #{tag.toUpperCase()}
        </Tag>
      ));
    },
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (date) => {
      return dayjs(date).format('HH:mm DD/MM/YYYY');
    },
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <Button icon={<CiMail className='inline' />} />,
  },
];

export { TABLE_COLUMNS, TABS_CONTENT };
