import background from '../../assets/ProductPage/nasa.jpg';
import overlayImage from '../../assets/ProductPage/Dashboard.png';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Hero = () => {
  return (
    <div className='w-full h-screen relative mb-20'>
      <img className='w-full h-[490px] object-cover' src={background} alt='/' />

      <div
        className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-white'
        style={{ top: '-30%' }}
      >
        <div className='max-w-[1240px] mx-auto text-center'>
          <h1 className='text-6xl font-bold font-poppins py-2'>Innovative Solutions</h1>
          <Text className='py-1 text-1xl mb-2 text-white'>CRM specifically for networking</Text>
        </div>
      </div>

      <div className='absolute inset-x-0 bottom-[-20%] flex justify-center mb-20'>
        <img className='max-w-[60%] h-auto shadow-lg rounded-md' src={overlayImage} alt='/' />
      </div>
    </div>
  );
};

export default Hero;
