import React, { useState } from 'react';

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
          <h1 className='md:leading-[48px] py-1 md:text-4xl text-3xl font-semibold font-poppins'>Sign Up For Free</h1>
          <p className='py-2 text-lg text-black'>
            Get access to the latest version of the platform and updates from Follow Me Up by signing up below.
          </p>
          <div className='flex items-center justify-center'>
            <input
              type='email'
              className='w-60 py-2 px-3 mr-2 rounded-md border border-gray-900 focus:outline-none'
              placeholder='Enter your email'
              value={email}
              onChange={handleEmailChange}
            />
            <button className='py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none' onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extend;
