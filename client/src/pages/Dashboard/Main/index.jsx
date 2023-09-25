import { Avatar, Button, Checkbox, Col, Divider, Empty, Row, Space, Typography } from 'antd';
import { FiMail } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';

const monthConnection = [
  {
    month: 'Jan',
    value: 75,
    color: '#4285f4',
  },
  {
    month: 'Feb',
    value: 32,
    color: '#ffd66b',
  },
  {
    month: 'Mar',
    value: 100,
    color: '#aca9ff',
  },
  {
    month: 'Arp',
    value: 18,
    color: '#5b93ff',
  },
  {
    month: 'May',
    value: 10,
    color: '#ffd66b',
  },
];

const { Text, Title } = Typography;

export default function MainDashboard() {
  return (
    <Row>
      <Col span={16} className='flex flex-col space-y-3'>
        <div className='flex space-x-3'>
          <div className='h-48 w-1/2 rounded-2xl bg-white p-4'>
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
          <div className='h-48 w-1/2 rounded-2xl bg-white p-4'>
            <div className='flex items-center justify-between'>
              <Title level={4}>Emails</Title>
            </div>
            <div className='flex items-center'>
              <FiMail size={46} />
              <div className='ml-2'>
                <Text className='block text-sm font-bold'>RE: PM Changes</Text>
                <Text className='block text-sm'>Hello this is XXX, I am replying</Text>
              </div>
            </div>
          </div>
        </div>
        {/* line 2 */}
        <div style={{ height: 400 }} className='w-full rounded-2xl bg-white p-4'>
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
        {/* line 3 */}
        <div style={{ height: 400 }} className='w-full rounded-2xl bg-white p-4'>
          <Title level={2}>Monthly Connections</Title>
          <div className='mt-4 flex flex-col space-y-12'>
            {monthConnection.map((item) => (
              <div key={item.month} className='flex items-center'>
                <div className='w-20'>{item.month}</div>
                <div className='h-6 w-full'>
                  <div
                    className='h-full rounded-r-full'
                    style={{ backgroundColor: item.color, width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Col>
      <Col span={8} className='flex flex-col space-y-3 pl-3'>
        <div className='h-48 rounded-2xl bg-white p-4'>
          <div className='flex items-center justify-between'>
            <Space size='large'>
              <Title level={4}>Tasks</Title>
              <div className='h-3 w-32 rounded-full bg-blue-300'>
                <div className='h-full rounded-full bg-blue-700' style={{ width: '50%' }} />
              </div>
            </Space>
            <Button type='' className='bg-blue-500 text-white hover:bg-blue-400'>
              Expand
            </Button>
          </div>
          <div className='mt-2 flex flex-col space-y-3'>
            <Checkbox>Task 1</Checkbox>
            <Checkbox>Task 2</Checkbox>
          </div>
        </div>
        {/* line 2 */}
        <div style={{ height: 810 }} className='rounded-2xl bg-white p-4'>
          <Title level={4}>LinkedIn Feed</Title>
          <div className='flex h-full w-full items-center justify-center'>
            <Empty />
          </div>
        </div>
      </Col>
    </Row>
  );
}
