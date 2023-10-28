import { Button, Empty, Form, Input, Modal, Space, Table, Tag } from 'antd';
import { useLayoutEffect, useRef, useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchContactsByUid } from '../../../services/Contacts.services';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { CiEdit } from 'react-icons/ci';
import dayjs from 'dayjs';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const auth = useSelector((state) => state.auth);
  const contacts = useSelector((state) => state.contacts.contacts);
  useLayoutEffect(() => {
    if (auth._id) {
      dispatch(fetchContactsByUid(auth._id));
    }
  }, [auth._id]);

  const TABLE_COLUMNS = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      ...getColumnSearchProps('fullName'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Phone',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      ...getColumnSearchProps('phoneNumber'),
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
      render: (_, data) => (
        <Button onClick={() => navigation(`./edit/${data._id}`)} icon={<CiEdit className='inline' />} />
      ),
    },
  ];

  return (
    <main>
      <div className='flex items-center justify-between'>
        <Link to='./new'>
          <Button size='large' icon={<FiUserPlus className='inline text-gray-500' size={16} />}>
            Add new contact
          </Button>
        </Link>
      </div>
      {contacts.length > 0 ? (
        <Table className='mt-10' dataSource={contacts} columns={TABLE_COLUMNS} />
      ) : (
        <Empty className='mt-10' />
      )}
    </main>
  );
}
