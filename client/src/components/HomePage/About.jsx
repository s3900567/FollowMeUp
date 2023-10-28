import { useState } from 'react';
import { Typography } from 'antd';
import ScrollTrigger from 'react-scroll-trigger';
import dashboard from '../../assets/HomePage/Dashboard.png';

const { Title, Text } = Typography;

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollEnter = () => {
    setIsVisible(true);
  };

  return (
    <div className='bg-[#EBEFFF] w-full py-16 px-4'>
      <div className='mx-auto grid md:grid-cols-2'>
        <ScrollTrigger onEnter={handleScrollEnter}>
          <img
            className={`w-[600px] mx-auto my-4 ${isVisible ? 'animate-enter-left' : ''}`}
            src={dashboard}
            alt='about'
          />
        </ScrollTrigger>
        <div className={`flex flex-col justify-center ${isVisible ? 'animate-fade-in' : ''}`}>
          <Text className='text-[#2ED47A] font-bold font-poppins text-2xl'>WEB CRM APPLICATION</Text>
          <Title className='md:text 3xl sm:text-2xl text-1xl font-bold font-poppins py-2'>
            Facilitate effective networking for startups by storing and following up on connections met at events.
          </Title>
          <Text className='text-center'>
            Unlock new possibilities, the platform facilitates the creation of valuable networks, leading to increased
            sales, exposure to the latest technologies, business development, investor meetings, partnerships, product
            validation and more.
          </Text>
        </div>
      </div>
    </div>
  );
};
