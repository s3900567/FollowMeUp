import { Tag } from 'antd';

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
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Last contacted',
    dataIndex: 'lastContacted',
    key: 'lastContacted',
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
    dataIndex: 'createDate',
    key: 'createDate',
  },
];

export { TABLE_COLUMNS, TABS_CONTENT };
