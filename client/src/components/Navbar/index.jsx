import { Button, Typography } from 'antd';
import { TITLE_LIST } from '../../constants/HomePage.constants';
import { Link } from 'react-router-dom';
import LOGO_APP from '../../assets/LOGO_APP.png';

const { Text } = Typography;

const Navbar = () => {
  return (
    <div className='py-3 px-2 flex justify-between items-center w-full h-full bg-[#EBEFFF]'>
      <div className='flex items-center'>
        <Link to='/' className='z-10'>
          <img src={LOGO_APP} alt='LOGO_APP' className='w-24  mr-10' />
        </Link>
      </div>
      <div className='flex items-center space-x-5'>
        {TITLE_LIST.map((item) => (
          <Link key={item.to} to={item.to} className='z-10'>
            <Text className='text-base'>{item.name}</Text>
          </Link>
        ))}
      </div>
      <div className='hidden md:flex space-x-4 ml-auto pr-6 mr-20 z-10'>
        <Link to='/login'>
          <Button>Login</Button>
        </Link>
        <Link to='/register'>
          <Button type='' className='bg-blue-500 text-white hover:bg-blue-400'>
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
