import { Avatar, Button, Layout, Select, Typography } from 'antd';
import { useState } from 'react';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { HiBell, HiOutlineLogout } from 'react-icons/hi';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MENU_ITEMS } from '../../../constants/Dashboard.constants';
const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const DashboardLayout = () => {
  const navigate = useNavigate();
  const param = useLocation();
  const [activeMenu, setActiveMenu] = useState(param.pathname.split('/').at(-1));
  const handleRouter = (key, path) => {
    setActiveMenu(key);
    navigate(path);
  };
  return (
    <Layout>
      <Sider className='relative' breakpoint='lg' width={296} theme='light' collapsedWidth='0'>
        <div className='flex h-24 w-full items-center justify-center'>
          <Text className='text-2xl font-medium'>Follow Me Up</Text>
        </div>
        <div className='mt-6 flex flex-col space-y-3 px-8'>
          {MENU_ITEMS.map((item) => (
            <div
              className={`w-full cursor-pointer rounded-md px-3 py-2 transition-all ${
                activeMenu === item.key && 'bg-blue-500 py-4 text-white'
              }`}
              key={item.key}
              onClick={() => handleRouter(item.key, item.to)}
            >
              <div className={`flex items-center space-x-3 text-gray-400 ${activeMenu === item.key && 'text-white'}`}>
                {item.icon}
                <Text
                  className={`text-base text-gray-400 transition-colors ${activeMenu === item.key && 'text-white'}`}
                >
                  {item.label}
                </Text>
              </div>
            </div>
          ))}
          <div className='absolute bottom-0 left-0 flex h-72 w-full flex-col items-start justify-end space-y-8 p-8'>
            <Link to='/contact_support'>
              <Button
                type='text'
                size='large'
                icon={<FaHeadphonesSimple className='inline' size={21} />}
                className='flex items-center space-x-1 bg-gray-200'
              >
                Contact Support
              </Button>
            </Link>
            <Button
              danger
              size='large'
              type='text'
              className='flex items-center space-x-1 text-xl'
              icon={<HiOutlineLogout className='inline' size={21} />}
            >
              Logout
            </Button>
          </div>
        </div>
      </Sider>
      <Layout className='h-screen'>
        <Header className='h-24 bg-white p-0'>
          <div className='flex h-full items-start justify-between py-2'>
            <Text className='text-3xl font-bold uppercase'>{activeMenu}</Text>
            <div className='mr-4 flex items-center space-x-6'>
              <Select defaultValue='username' status='warning'>
                <Select.Option value='username'>User name</Select.Option>
              </Select>
              <HiBell size={20} className='text-blue-500' />
              <Avatar className='bg-orange-500'>USER</Avatar>
            </div>
          </div>
        </Header>
        <Content style={{ backgroundColor: '#f4f5fa' }} className='overflow-auto'>
          <div className='mx-5 my-4'>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
