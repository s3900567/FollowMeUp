import React, { useState } from 'react';

const Hero = () => {
  return (
    <div>
      <div className='container mx-auto py-5'>
        <div className='gap-8 items-center'>
          <div className='mx-auto text-center flex flex-col justify-center'>
            <div className='text-center md:text-left'>
              <h1 className='md:leading-[48px] py-1 md:text-4xl text-3xl font-semibold font-poppins'>
              Our Story:{' '}
                <span className='text-[#109CF1]'>Powered</span> by{' '}
                <span className='text-[#109CF1]'>INNOBOUND</span>{' '}
              </h1>
              <p className='py-2 text-lg text-black'>
                Join for free today
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;