import { Typography } from 'antd';
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

const { Text } = Typography;

export const Features = () => {
  return (
    <div className='w-full py-24 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <Text className='text-3xl font-bold text-[#2ED47A] font-poppins block'>FOLLOW ME UP</Text>
          <Text className='text-1xl py-5 text-[#000000] font-poppins font-semibold'>
            Features that the platform will provide to customers:
          </Text>
        </div>
        <div className='gap-2 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2'>
          {/* First Row */}
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcCollaboration className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <Text className='text-2xl text-center font-semibold font-poppins py-4'>Contact Management</Text>
            <div className='text-center font-medium'></div>
            <Text className='py-2 text-center'>
              Users can manually enter contact details or conveniently scan LinkedIn information to import contact data
            </Text>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcGenealogy className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <Text className='text-2xl text-center font-semibold font-poppins py-4'>Categorization and Tagging​</Text>
            <div className='text-center font-medium'></div>
            <Text className='py-2 text-center'>
              Categorize and tag contacts based on their relevance or the events in which they met​
            </Text>
          </div>
          {/* Second Row */}
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcIdea className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <Text className='text-2xl text-center font-semibold font-poppins py-4'>Follow-up Reminder​</Text>
            <div className='text-center font-medium'></div>
            <Text className='py-2 text-center'>Help users stay on top of their follow-up activities​ </Text>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcVoicePresentation className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <Text className='text-2xl text-center font-semibold font-poppins py-4'>Communication Templates​</Text>
            <div className='text-center font-medium'></div>
            <Text className='py-2 text-center'>
              Templates can be tailored to different types of connections or events, making it easy to send relevant
              messages.​
            </Text>
          </div>
        </div>
        {/* SECTION 2 */}
        <div className='gap-2 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2'>
          {/* First Row */}
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcCalendar className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <Text className='text-2xl text-center font-semibold font-poppins py-4'>
              Integration with Calendar and Email​​
            </Text>
            <div className='text-center font-medium'></div>
            <Text className='py-2 text-center'>
              Seamlessly integrating the user's calendar and email with the client allows for easy scheduling of
              follow-up activities.​{' '}
            </Text>
          </div>
          {/* Second Row */}
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcStatistics className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <Text className='text-2xl text-center font-semibold font-poppins py-4'>Analytics and Insights​​</Text>
            <div className='text-center font-medium'></div>
            <Text className='py-2 text-center'>
              Provides analytics and insights on customer web activity, allowing users to track the progress of their
              follow-up efforts and monitor response rates​{' '}
            </Text>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcLock className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <Text className='text-2xl text-center font-semibold font-poppins py-4'>Data Security​​</Text>
            <div className='text-center font-medium'></div>
            <Text className='py-2 text-center'>
              Encryption and secure authentication protocols would be employed to ensure the privacy and confidentiality
              of user data.​{' '}
            </Text>
          </div>
          <div className='w-full shadow-xl flex flex-col p-2 my-2 rounded-lg hover:scale-105 duration-300 items-center'>
            <FcReading className='w-10 rounded-lg text-4xl text-center text-[#000000]' />
            <Text className='text-2xl text-center font-semibold font-poppins py-4'>Communication Tracking​</Text>
            <div className='text-center font-medium'></div>
            <Text className='py-2 text-center'>
              allow users to track their communication history with each contact ​{' '}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
