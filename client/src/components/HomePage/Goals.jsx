import React, { useState } from 'react';
import { FcComboChart, FcConferenceCall, FcProcess } from 'react-icons/fc';
import ScrollTrigger from 'react-scroll-trigger';



export const Goals = () => {
  return (
    <div className='w-full py-8 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-[#2ED47A] font-poppins'>GOALS</h2>
          <p className='text-1xl py-5 text-[#000000] font-poppins font-semibold'>
          Our mission is to revolutionize the way people connect 
          <br></br>and network in the digital age. 
          </p>
        </div>
        <div className='gap-2 max-w-[1000px] mx-auto grid md:grid-cols-3'>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcConferenceCall className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>Enhanced Networking Efficiency</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>
            seeks to simplify and streamline the networking process enabling users to efficiently manage connections and nurture relationships,
            identify potential customers, and collaborate with industry peers. The ultimate aim is to save users time and effort in managing their professional networks.
            </p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcComboChart className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>Data-Driven Insights</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>
            Unlock powerful insights: Our analytics tools help you track your networking success. 
            By analyzing connections, interactions, and outcomes, you'll make smarter decisions, refine strategies, and boost professional success</p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcProcess className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>User-Friendly Tools</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>
              Users can use their everyday software add more info here i think (ask for more info)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
