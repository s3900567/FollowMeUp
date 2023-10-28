import { Button, Form, Space, Typography, notification } from 'antd';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getConfig } from '../../services/Payment.services';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const { Title, Text } = Typography;
export default function PaymentPage() {
  const navigate = useNavigate();
  const payment = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfig());
  }, []);

  const handleSubmitPayment = async () => {
    notification.success({
      message: 'Payment success',
      description: 'Thank you for your payment',
    });
    navigate('/dashboard');
  };

  return (
    <div>
      <Navbar loginHide={true} />
      <main className='flex flex-col items-center justify-center w-full h-screen'>
        <Space direction='vertical'>
          <Title>Follow Me Up Premium Plan</Title>
          <Title level={3}>Starting now you will be able to access a new range of features</Title>
          <Title level={4}>Starts at $20</Title>
        </Space>
        {payment.loading && <Text className='text-base text-red-600'>Loading Payment...</Text>}
        {payment?.status === 'success' && (
          <Elements stripe={loadStripe(payment.publishableKey)} options={{ clientSecret: payment.clientSecret }}>
            <Form>
              <PaymentElement className='w-[700px]' />
              <Button onClick={handleSubmitPayment} className='mt-8'>
                Submit
              </Button>
            </Form>
          </Elements>
        )}
      </main>
      <Footer />
    </div>
  );
}
