import React from 'react';
import {
  FcCalendar,
  FcCollaboration,
  FcGenealogy,
  FcIdea,
  FcLock,
  FcReading,
  FcStatistics,
  FcVoicePresentation,
} from 'react-icons/fc';

export const Features = () => {
  return (
    <div className='w-full py-8 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <button className='justify-center bg-black text-[#ffffff] w-[200px] rounded-md font-medium mb-12 md:mx-0 py-3 '>
            Join Now{' '}
          </button>
          <h2 className='text-3xl font-bold text-[#2ED47A] font-poppins'>FOLLOW ME UP</h2>
          <p className='text-1xl py-5 text-[#000000] font-poppins font-semibold'>
            Features that the platform will provide to customers:
          </p>
        </div>
        <div className='gap-2 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2'>
          {/* First Row */}
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcCollaboration className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>Contact Management</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>
              Users can manually enter contact details or conveniently scan LinkedIn information to import contact data
            </p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcGenealogy className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>Categorization and Tagging​</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>
              Categorize and tag contacts based on their relevance or the events in which they met​
            </p>
          </div>
          {/* Second Row */}
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcIdea className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>Follow-up Reminder​</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>Help users stay on top of their follow-up activities​ </p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcVoicePresentation className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>Communication Templates​</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>
              Templates can be tailored to different types of connections or events, making it easy to send relevant
              messages.​
            </p>
          </div>
        </div>
        {/* SECTION 2 */}
        <div className='gap-2 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2'>
          {/* First Row */}
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcCalendar className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>
              Integration with Calendar and Email​​
            </h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>
              Seamlessly integrating the user's calendar and email with the client allows for easy scheduling of
              follow-up activities.​{' '}
            </p>
          </div>
          {/* Second Row */}
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcStatistics className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>Analytics and Insights​​</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>
              Provides analytics and insights on customer web activity, allowing users to track the progress of their
              follow-up efforts and monitor response rates​{' '}
            </p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcLock className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>Data Security​​</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>
              Encryption and secure authentication protocols would be employed to ensure the privacy and confidentiality
              of user data.​{' '}
            </p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcReading className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <h1 className='text-2xl text-center font-semibold font-poppins py-4'>Communication Tracking​</h1>
            <div className='text-center font-medium'></div>
            <p className='py-2 text-center'>allow users to track their communication history with each contact ​ </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
