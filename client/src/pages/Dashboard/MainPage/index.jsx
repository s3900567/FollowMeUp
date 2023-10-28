import { Avatar, Button, Col, Divider, Empty, Row, Space, Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import { useLayoutEffect, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchContactsByUid } from '../../../services/Contacts.services';
import { getEventsInDateRangeByUserId } from '../../../services/Events.services';
import { getAllTasks } from '../../../services/Tasks.services';
import ContactsAPI from '../../../utils/API/Contacts.api';

const { Text, Title } = Typography;

export default function MainDashboard() {
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const contacts = useSelector((state) => state.contacts.contacts);
  const { events } = useSelector((state) => state.events);
  const { tasks } = useSelector((state) => state.tasks);
  const auth = useSelector((state) => state.auth);
  const getAllTags = async () => {
    const res = await ContactsAPI.getAllTagsById(auth._id);
    setTags(res.data);
  };
  useLayoutEffect(() => {
    if (auth._id) {
      dispatch(fetchContactsByUid(auth._id));
      dispatch(
        getEventsInDateRangeByUserId({
          userId: auth._id,
          start: dayjs().startOf('isoWeek').format('YYYY-MM-DD'),
          end: dayjs().endOf('isoWeek').format('YYYY-MM-DD'),
        }),
      );
      dispatch(getAllTasks({ userId: auth._id }));
      getAllTags();
    }
  }, [auth]);
  return (
    <Row>
      <Col span={16} className='flex flex-col space-y-3'>
        <div className='flex space-x-3'>
          <div className='h-48 w-1/2 rounded-2xl bg-white p-4'>
            <div className='flex items-center justify-between'>
              <Title level={4}>Tasks</Title>
              <Link to='./tasks'>
                <Button type='' className='bg-blue-500 text-white hover:bg-blue-400'>
                  View all
                </Button>
              </Link>
            </div>
            <div className=''>
              {tasks.length === 0 && (
                <div className='w-full flex items-center justify-center'>
                  <Empty />
                </div>
              )}
              {tasks?.slice(0, 3).map((task, idx) => (
                <div key={task._id}>
                  <Text className={`text-base block ${task.finish && 'line-through'}`}>
                    {idx + 1}, {task.title}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <div className='h-48 w-1/2 rounded-2xl bg-white p-4'>
            <div className='flex items-center justify-between'>
              <Space size='large'>
                <Title level={4}>Tags</Title>
                <div className='h-3 w-32 rounded-full bg-blue-300'>
                  <div className='h-full rounded-full bg-blue-700' style={{ width: '60%' }} />
                </div>
              </Space>
              <Link to='./tasks'>
                <Button type='' className='bg-blue-500 text-white hover:bg-blue-400'>
                  Expand
                </Button>
              </Link>
            </div>
            {tags.length < 0 && <Empty />}
            <Space wrap size='small' className='mt-4'>
              {tags?.slice(0, 11).map((tag) => (
                <Tag key={tag} color='blue' className='mx-2 text-base'>
                  #{tag}
                </Tag>
              ))}
            </Space>
          </div>
        </div>

        {/* line 2 */}
        <div style={{ height: 400 }} className='w-full rounded-2xl bg-white p-4 overflow-auto'>
          <Title level={4}>Contacts</Title>
          <Text className='text-sm'>Last contacts</Text>
          <Divider className='my-1' />
          <div className='mt-2 flex flex-col space-y-4'>
            {contacts.length > 0 ? (
              contacts?.map((item) => (
                <div key={item._id} className='flex items-center justify-between'>
                  <Space>
                    <Avatar size='large'>{item.fullName.split(' ').at(-1)}</Avatar>
                    <div>
                      <Text className='block font-bold'>{item.fullName}</Text>
                    </div>
                  </Space>
                  <div className='flex space-x-6'>
                    {item.tags && (
                      <div className='flex items-end space-x-2'>
                        {item.tags.slice(0, 4).map((tag) => (
                          <Tag key={tag} color='blue'>
                            #{tag}
                          </Tag>
                        ))}
                      </div>
                    )}
                    <Space size='large'>
                      <Text className='text-base font-medium text-red-500'>
                        {dayjs(item.lastContacted).format('DD/MM/YYYY')}
                      </Text>
                      {/* <MdOutlineEmail size={25} /> */}
                    </Space>
                  </div>
                </div>
              ))
            ) : (
              <div className='w-full h-full mt-10 flex items-center justify-center'>
                <Empty />
              </div>
            )}
          </div>
        </div>
      </Col>
      <Col span={8} className='flex flex-col space-y-3 pl-3'>
        <div className='h-[600px] rounded-2xl bg-white p-4'>
          <div className='flex items-center justify-between'>
            <Title level={4}>Events</Title>
            <Link to='./calendar'>
              <Button type='' className='bg-blue-500 text-white hover:bg-blue-400'>
                Create new
              </Button>
            </Link>
          </div>
          {events.length === 0 && (
            <div className='w-full h-full flex items-center justify-center'>
              <Empty />
            </div>
          )}
          {events?.slice(0, 8).map((event) => (
            <div key={event._id} className='flex'>
              <div className='w-1/5'>{dayjs(event.date).format('DD/MM/YYYY')}</div>
              <div className='w-4/5'>
                <Space>
                  <div className='h-4 w-1 bg-blue-600' />
                  <Text>
                    {event.start} - {event.end}
                  </Text>
                </Space>
                <Text className='block text-base'>{event.name}</Text>
                <Divider className='my-1' />
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}
