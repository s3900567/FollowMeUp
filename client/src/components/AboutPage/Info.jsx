import art from '../../assets/AboutPage/2.png';
import art2 from '../../assets/AboutPage/3.png';
import { Typography } from 'antd';

const { Title, Text } = Typography;

export const Info = () => {
  return (
    <div>
      <div className='container mx-auto py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='text-center'>
            <img src={art} alt='bg' className='w-full' style={{ background: 'transparent' }} />
          </div>
          <div className='mx-auto text-center flex flex-col justify-center'>
            <div className='text-center md:text-left'>
              <Text className='py-2 text-3xl font-medium block'>
                <span className='text-[#5B93FF]'>&#8226;</span>
                <span className='text-[#FF8F6B]'>&#8226;</span>
                <span className='text-[#2ED47A]'>&#8226;</span>
              </Text>
              <Text className='md:leading-[48px] py-1 md:text-4xl text-3xl font-semibold font-poppins'>
                About <span className='text-[#109CF1]'>Follow</span> Me Up{' '}
                {/* <span className='text-[#109CF1]'>Journey</span> with us.{' '}
                <span className='text-[#109CF1]'>Today</span> */}
              </Text>
              <hr className='w-auto mx-auto mt-2 border-t-1 border-[#2ED47A]' />
              <Text className='py-2 text-lg text-black'>
                At Follow Me Up, we're dedicated to making networking easier and more effective for startups and
                businesses. Our mission is to provide you with a user-friendly platform that simplifies networking,
                fosters growth, and help you succeed in your professional endeavors.
              </Text>
              <ul
                className='text-left pl-4 py-2 text-lg text-black'
                style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
              >
                <Text className='mr-2 px-3 py-1 bg-blue-500 text-white rounded-full'>#networking</Text>
                <Text className='mr-2 px-3 py-1 bg-blue-500 text-white rounded-full'>#connect</Text>
                <Text className='px-3 py-1 bg-blue-500 text-white rounded-full'>#innovate</Text>
              </ul>
            </div>
          </div>
          {/* SECTION 2 */}
          <div className='mt-2 mx-auto text-center flex flex-col justify-center'>
            <div className='text-center md:text-left'>
              <Text className='py-2 text-3xl font-medium block'>
                <span className='text-[#5B93FF]'>&#8226;</span>
                <span className='text-[#FF8F6B]'>&#8226;</span>
                <span className='text-[#2ED47A]'>&#8226;</span>
              </Text>
              <Text className='md:leading-[48px] py-1 md:text-4xl text-3xl font-semibold font-poppins'>
                A shared <span className='text-[#109CF1]'>vision.</span> Start your{' '}
                <span className='text-[#109CF1]'>Journey</span> with us. <span className='text-[#109CF1]'>Today</span>
              </Text>
              <hr className='w-auto mx-auto mt-2 border-t-1 border-[#2ED47A]' />
              <Text className='py-2 text-lg text-black'>
                Join us in making a difference. Start your networking journey with Follow Me Up, powered by the
                innovation and sustainability of INNOBOUND. Together, we can connect, grow, and succeed while making a
                positive impact on our environment and communities.
              </Text>
              <Text className='py-2 text-lg text-black'>
                INNOBOUND's core mission is to facilitate the green transition in EU cities and industrial parks. They
                achieve this through: Innovation Projects: INNOBOUND actively engages in innovation projects aimed at
                revolutionizing the way we approach sustainability. These projects pave the way for cutting-edge
                solutions that benefit our environment and society.
              </Text>
              {/* <button className='py-3 px-6 sm:w-60 my-5'>Join Now</button> */}
            </div>
          </div>
          <div className='text-center'>
            <img src={art2} alt='bg' className='w-full' style={{ background: 'transparent' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
