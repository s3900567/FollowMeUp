import { Link } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png';
import { TITLE_LIST } from '../../constants/HomePage.constants';
import { Button, Space, Typography } from 'antd';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import mainContainerIllus from '../../assets/mainContainer.png';

const { Text } = Typography;
export default function HomePage() {
  return (
    <div className='relative h-screen'>
      <div className='flex h-32 w-full items-center justify-between p-7' style={{ backgroundColor: '#344f6f' }}>
        <img src={LOGO} alt='LOGO' className='h-20' />
        <Space size='large'>
          {TITLE_LIST.map((item) => (
            <Link key={item.name} to={item.to}>
              <Text className='text-xl text-white'>{item.name}</Text>
            </Link>
          ))}
        </Space>
        <Space size='middle'>
          <Link to='/login'>
            <Button type='' shape='round' size='large' icon={<FiLogIn className='inline' />} className='bg-white'>
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Button
              type=''
              shape='round'
              size='large'
              icon={<FiUserPlus className='inline' />}
              className='bg-black text-white'
            >
              Sign up
            </Button>
          </Link>
        </Space>
      </div>
      <div className='flex flex-col items-center p-7'>
        <Text className='mt-24 text-6xl'>Follow Me Up</Text>
        <Text className='text-2xl'>“add a quote”</Text>
        <Link to='/dashboard'>
          <Button type='' shape='round' size='large' className='mt-9 bg-black text-white'>
            Join Now
          </Button>
        </Link>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-md' style={{ width: 840 }}>
        <img src={mainContainerIllus} alt='mainContainerIllus' className='w-[840px]' />
      </div>
    </div>
  );
}
