import { Button, Segmented, Space, Typography, notification } from 'antd';
import { useState } from 'react';
import { BsRocketTakeoffFill } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LOGO from '../../assets/LOGO_APP.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const { Text } = Typography;

export default function ChoosePlanPage() {
  const [plan, setPlan] = useState('free');
  const navigate = useNavigate();

  const handleChoosePlan = (plan) => {
    setPlan(plan);
  };

  const handleContinue = () => {
    notification.success({
      message: 'Thank you for choosing us!',
    });
    if (plan === 'free') {
      navigate('/dashboard');
    } else {
      navigate('/payment');
    }
  };
  return (
    <>
      <Navbar loginHide={true} />
      <div className='flex flex-col items-center'>
        <img src={LOGO} alt='LOGO' className='mt-2 h-44' />
        <div className='flex flex-col items-center'>
          <Text className='mb-4 text-3xl'>Choose a plan</Text>
          <Segmented
            className='block'
            size='large'
            value={plan}
            options={[
              {
                label: (
                  <Text className={`px-20 text-base ${plan === 'free' && 'text-blue-700'} transition-colors`}>
                    Free
                  </Text>
                ),
                value: 'free',
              },
              {
                label: (
                  <Text className={`px-20 text-base ${plan === 'premium' && 'text-blue-700'} transition-colors`}>
                    Premium
                  </Text>
                ),
                value: 'premium',
              },
            ]}
            onChange={setPlan}
          />
        </div>
        <Space direction='horizontal' size='large' className='mt-12'>
          <div
            onClick={() => handleChoosePlan('free')}
            className={`flex w-96 cursor-pointer flex-col items-center justify-center rounded-2xl border py-12 ${
              plan === 'free' && 'border-blue-700 bg-gray-200'
            } transition-all`}
          >
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500'>
              <BsRocketTakeoffFill size={30} className='text-slate-500' />
            </div>
            <Text className='text-4xl font-bold'>Free</Text>
            <ul className='mt-6'>
              <Text className='block text-base'>• Adding Contacts (up to 50!)</Text>
              <Text className='block text-base'>• Tagging</Text>
              <Text className='block text-base'>• Email reminders</Text>
              <Text className='block text-base'>• Task List</Text>
            </ul>
            <Text className='mt-6 text-xl'>0$/mth</Text>
          </div>
          <div
            onClick={() => handleChoosePlan('premium')}
            className={`flex w-96 cursor-pointer flex-col items-center justify-center rounded-2xl border py-12 ${
              plan === 'premium' && 'border-blue-700 bg-gray-200'
            } transition-all`}
          >
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500'>
              <FaHandshake size={30} className='text-slate-500' />
            </div>
            <Text className='text-4xl font-bold'>Premium</Text>
            <ul className='mt-6'>
              <Text className='block text-base'>• Adding Contacts (Unlimited)</Text>
              <Text className='block text-base'>• Tagging</Text>
              <Text className='block text-base'>• Automatic Email reminders</Text>
              <Text className='block text-base'>• Tasks</Text>
              <Text className='block text-base'>• Events and Calendar</Text>
              <Text className='block text-base'>• Customization</Text>
              <Text className='block text-base'>• Email templates</Text>
            </ul>
            <Text className='mt-6 text-xl'>20$/mth</Text>
          </div>
        </Space>
        <Button className='mt-10' size='large' onClick={handleContinue}>
          Continue
        </Button>
      </div>
      <Footer />
    </>
  );
}
