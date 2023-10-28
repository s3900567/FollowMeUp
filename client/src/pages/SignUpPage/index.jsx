import { Button, Checkbox, Col, Form, Input, Row, Typography, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../../assets/LOGO_APP.png';
import RegisterIllus from '../../assets/RegisterIllus.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../services/Auth.services';

const { Text } = Typography;
export default function SignUpPage() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Privacy, setPrivacy] = useState(false);
  const onFinish = (values) => {
    dispatch(register(values));
  };
  useEffect(() => {
    if (auth.status === 'success') {
      notification.success({
        message: 'Register Success',
        description: 'Welcome to Follow Me Up! Choose one plan and login to continue!',
      });
      navigate('/choose_plan');
    } else if (auth.status === 'failed') {
      notification.error({
        message: 'Register Fail',
        description: auth.error,
      });
    }
  }, [auth]);
  return (
    <Row>
      <Col span={12} className='relative h-screen w-full rounded-tr-3xl' style={{ backgroundColor: '#334d6e' }}>
        <div className='absolute bottom-16 left-8 w-fit'>
          <Text className='block text-center text-3xl text-white'>Join Us Now !</Text>
          <img src={RegisterIllus} alt='RegisterIllus' className='w-80' />
        </div>
        <div className='absolute left-1/2 top-1/4 -translate-x-1/2'>
          <Text className='text-5xl font-medium text-white'>Follow Me Up</Text>
        </div>
      </Col>
      <Col span={12} className='p-12'>
        <Link to='/'>
          <img src={LOGO} alt='LOGO' className='h-36' />
        </Link>
        <div className='ml-28'>
          <div className='mb-6 flex flex-col items-center'>
            <Text className='py-3 text-3xl font-medium'>Create new account</Text>
          </div>
          <Form
            className='px-14'
            onFinish={onFinish}
            name='RegisterForm'
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
          >
            <Form.Item
              className='font-bold'
              label='Full Name'
              name='fullName'
              rules={[
                {
                  required: true,
                  message: 'Please input your Full Name!',
                },
              ]}
            >
              <Input size='large' className='font-normal' placeholder='Enter your Full Name' />
            </Form.Item>

            <Form.Item
              className='font-bold'
              label='Email:'
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input size='large' className='font-normal' placeholder='Enter your email' />
            </Form.Item>

            <Form.Item
              className='font-bold'
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password size='large' className='font-normal' placeholder='Enter your password' />
            </Form.Item>
            <Form.Item name='Privacy' valuePropName='checked'>
              <Checkbox onChange={(value) => setPrivacy(value.target.checked)}>
                <Text className='font-medium'>
                  I agree with the <Text className='text-blue-700'>Terms of services</Text> and{' '}
                  <Text className='text-blue-700'>Privacy Policy</Text>
                </Text>
              </Checkbox>
            </Form.Item>
            <Button
              htmlType='submit'
              type='default'
              disabled={!Privacy}
              // className={`mt-10 w-full bg-blue-400 text-white hover:bg-blue-500 ${!Privacy && 'bg-gray-400'}'}}`}
              size='large'
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
