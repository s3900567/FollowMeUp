import { Button, Input, Typography } from 'antd';
import React, { useState } from 'react';

const { Title, Text } = Typography;

export const Extend = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    console.log('Sign up with email:', email);
  };

  return (
    <div className='container mx-auto'>
      {/* SECTION 3 (Centered Section) */}
      <div className='h-[40vh] flex items-center justify-center'>
        <div className='text-center md:text-left'>
          <Text className='md:leading-[48px] py-1 md:text-4xl text-3xl font-semibold font-poppins'>
            Sign Up For Free
          </Text>
          <Text className='py-2 text-lg text-black block'>
            Get access to the latest version of the platform and updates from Follow Me Up by signing up below.
          </Text>
          <div className='flex items-center justify-center'>
            <Input
              type='email'
              className='w-60 mr-2'
              placeholder='Enter your email'
              value={email}
              size='large'
              onChange={handleEmailChange}
            />
            <Button size='large' type='primary' onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extend;
