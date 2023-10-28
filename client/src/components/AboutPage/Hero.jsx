import React, { useState } from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Hero = () => {
  return (
    <div>
      <div className='container mx-auto py-5'>
        <div className='gap-8 items-center'>
          <div className='mx-auto text-center flex flex-col justify-center'>
            <div className='text-center md:text-left'>
              <Text className='md:leading-[48px] py-1 md:text-4xl text-3xl font-semibold font-poppins'>
                Our Story: <span className='text-[#109CF1]'>Powered</span> by{' '}
                <span className='text-[#109CF1]'>INNOBOUND</span>{' '}
              </Text>
              <Text className='py-2 text-lg text-black block'>Join for free today</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
