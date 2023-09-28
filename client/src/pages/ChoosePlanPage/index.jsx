import { Button, Segmented, Space, Typography, notification } from 'antd';
import LOGO from '../../assets/LOGO.png';
import { useState } from 'react';
import { BsRocketTakeoffFill } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

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
      description: 'Please login to continue!',
    });
    navigate('/login');
  };
  return (
    <div className='flex flex-col items-center'>
      <img src={LOGO} alt='LOGO' className='mt-10 h-44' />
      <div className='flex flex-col items-center'>
        <Text className='mb-4 text-3xl'>Choose a plan</Text>
        <Segmented
          className='block'
          size='large'
          value={plan}
          options={[
            {
              label: (
                <Text className={`px-20 text-base ${plan === 'free' && 'text-blue-700'} transition-colors`}>Free</Text>
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
            plan === 'free' && 'border-blue-700'
          } transition-all`}
        >
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500'>
            <BsRocketTakeoffFill size={30} className='text-slate-500' />
          </div>
          <Text className='text-4xl font-bold'>Free</Text>
          <ul className='mt-6'>
            <li>• Adding Contacts (Up to 50!)</li>
            <li>• Tagging</li>
            <li>• Email reminders (up to 10+)</li>
            <li>• LinkedIn Integration</li>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </ul>
          <Text className='mt-6 text-xl'>$0/mth</Text>
        </div>
        <div
          onClick={() => handleChoosePlan('premium')}
          className={`flex w-96 cursor-pointer flex-col items-center justify-center rounded-2xl border py-12 ${
            plan === 'premium' && 'border-blue-700'
          } transition-all`}
        >
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500'>
            <FaHandshake size={30} className='text-slate-500' />
          </div>
          <Text className='text-4xl font-bold'>Premium</Text>
          <ul className='mt-6'>
            <li>• Adding Contacts (Unlimited)</li>
            <li>• Tagging</li>
            <li>• Automated Email reminders</li>
            <li>• LinkedIn Integration</li>
            <li>• Reminders and Tasks</li>
            <li>• Customization</li>
            <br></br>
            <li> and much more</li>
          </ul>
          <Text className='mt-6 text-xl'>$20/mth</Text>
        </div>
      </Space>
      <Button className='mt-10' size='large' onClick={handleContinue}>
        Continue
      </Button>
    </div>
  );
}
