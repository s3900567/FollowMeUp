import { Button } from 'antd';
import imgmain from '../../assets/HomePage/1.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <div className='container mx-auto py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='mt-2 mx-auto text-center flex flex-col justify-center'>
            <div className='text-center md:text-left'>
              <p className='py-2 text-3xl font-medium'>
                <span className='text-[#5B93FF]'>&#8226;</span>
                <span className='text-[#FF8F6B]'>&#8226;</span>
                <span className='text-[#2ED47A]'>&#8226;</span>
              </p>
              <h1 className='md:leading-[48px] py-1 md:text-4xl text-3xl font-semibold font-poppins'>
                Ultimate networking{' '}
                <span className='text-[#109CF1]'>ally,</span> simplifying{' '}
                <span className='text-[#109CF1]'>event</span> connections,{' '}
                <span className='text-[#109CF1]'>Connect. Grow. Succeed.</span>
              </h1>
              <p className='py-2 text-lg text-black'>
                Redefine with our cutting-edge CRM.
              </p>
              <Link to='./login'>
                <Button>Join Now</Button>
              </Link>
            </div>
          </div>
          <div className='text-center'>
            <img src={imgmain} alt='bg' style={{ background: 'transparent' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;