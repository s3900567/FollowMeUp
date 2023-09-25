import { Avatar, Button, Col, Divider, Row, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import weekday from 'dayjs/plugin/weekday';
import { AiOutlineMessage } from 'react-icons/ai';
import { useEffect, useState } from 'react';
dayjs.extend(weekday);

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const events = [
  {
    id: 1,
    title: 'Task 1',
    date: '2023-09-25',
    start: '10:00',
    end: '11:00',
    color: 'red',
  },
  {
    id: 2,
    title: 'Task 2',
    date: '2023-09-26',
    start: '08:00',
    end: '16:00',
    color: 'blue',
  },
  {
    id: 3,
    title: 'Task 3',
    date: '2023-09-27',
    start: '08:00',
    end: '10:30',
    color: 'green',
  },
];

const getPositionLine = (date, start, end) => {
  // 1px = 1 minute, 1 day = 200px
  // 1 line has 100px width
  start = dayjs(date + ' ' + start);
  end = dayjs(date + ' ' + end);
  const startOf = dayjs(date + ' 08:00');
  const height = end.diff(start, 'minutes'); // calculate height of event
  const positionTop = start.diff(startOf, 'minutes'); // calculate position top of event
  const positionLeft = dayjs(date).weekday() * 200 - 150; // calculate position left of event
  return {
    height,
    positionTop,
    positionLeft,
  };
};

const { Text, Title } = Typography;
export default function CalendarPage() {
  const [lineEvents, setLineEvents] = useState([]);
  useEffect(() => {
    const newEvents = [];
    events.forEach((event) => {
      const { height, positionTop, positionLeft } = getPositionLine(event.date, event.start, event.end);
      newEvents.push({
        ...event,
        height,
        positionTop,
        positionLeft,
      });
    });
    setLineEvents(newEvents);
  }, []);
  return (
    <main>
      <div className='flex items-center justify-between px-6'>
        <Title level={2}>August 2023</Title>
        <div className='flex items-center space-x-4'>
          <BsArrowLeftShort className='cursor-pointer' size={40} />
          <BsArrowRightShort className='cursor-pointer' size={40} />
        </div>
      </div>
      <div className='relative w-[1000px] h-[40px]'>
        {days.map((day, index) => (
          <div key={day} className='absolute w-[200px] h-[100px] top-0' style={{ left: index * 200 }}>
            <Title level={4} className='block text-center'>
              {day}
            </Title>
          </div>
        ))}
      </div>
      <div className='relative w-[1000px] h-[600px]'>
        <div className='absolute top-0 w-full h-full'>
          {[8, 9, 10, 11, 12, 13, 14, 15, 16].map((hour, index) => (
            <div key={hour} className='absolute w-full top-0' style={{ top: index * 60 }}>
              <Divider className='w-full my-0' />
              <Text className='font-medium text-gray-500 w-20'>{hour}h</Text>
            </div>
          ))}
        </div>
        {lineEvents?.map((event) => (
          <div
            key={event.id}
            className='absolute w-[100px] rounded-md'
            style={{
              top: event.positionTop,
              left: event.positionLeft,
              height: event.height,
              backgroundColor: event.color,
            }}
          ></div>
        ))}
      </div>

      <Row gutter={16}>
        <Col span={12}>
          <div className='flex space-x-3'>
            <div className='h-60 w-full rounded-2xl bg-white p-4'>
              <div className='flex items-center justify-between'>
                <Title level={4}>Events</Title>
                <Button type='' className='bg-blue-500 text-white hover:bg-blue-400'>
                  Create new
                </Button>
              </div>
              <div className='flex'>
                <div className='w-1/5'>Today</div>
                <div className='w-4/5'>
                  <Space>
                    <div className='h-4 w-1 bg-blue-600' />
                    <Text>11:30 - 1:30</Text>
                  </Space>
                  <Text className='block text-base'>Meeting with Sam</Text>
                  <Divider className='my-1' />
                </div>
              </div>
              <div className='flex'>
                <div className='w-1/5'>Tomorrow</div>
                <div className='w-4/5'>
                  <Space>
                    <div className='h-4 w-1 bg-blue-600' />
                    <Text>2:30 - 4:30</Text>
                  </Space>
                  <Text className='block text-base'>Sprint Stand Up</Text>
                  {/* <Divider className='my-1' /> */}
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className='w-full rounded-2xl bg-white p-4'>
            <Title level={4}>Contacts</Title>
            <Text className='text-sm'>Last contacts</Text>
            <Divider className='my-1' />
            <div className='mt-2 flex flex-col space-y-4'>
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className='flex items-center justify-between'>
                  <Space>
                    <Avatar size='large'>{item}</Avatar>
                    <div>
                      <Text className='block font-bold'>Name {item}</Text>
                      <Text>CEO of Y</Text>
                    </div>
                  </Space>
                  <Space size='large'>
                    <Text className='text-base font-medium text-red-500'>{item} day ago</Text>
                    <AiOutlineMessage size={25} />
                  </Space>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
}
