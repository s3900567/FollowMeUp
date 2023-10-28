import { Button, Typography } from 'antd';
import { TITLE_LIST } from '../../constants/HomePage.constants';
import { Link, useNavigate } from 'react-router-dom';
import LOGO_APP from '../../assets/LOGO_APP.png';

const { Text } = Typography;

const Navbar = ({ loginHide }) => {
  const navigate = useNavigate();
  return (
    <div className='p-2 flex justify-between items-center w-full h-full bg-[#EBEFFF]'>
      <div className='flex '>
        <div className='flex items-center'>
          <Link to='/' className='z-10'>
            <img src={LOGO_APP} alt='LOGO_APP' className='w-24 mr-10' />
          </Link>
        </div>
        <div className='flex items-center space-x-5 z-10'>
          {TITLE_LIST.map((item) => (
            <Text onClick={() => navigate(item.to)} key={item.to} className='text-base cursor-pointer'>
              {item.name}
            </Text>
          ))}
        </div>
      </div>
      {!loginHide && (
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
      )}
    </div>
  );
};

export default Navbar;
