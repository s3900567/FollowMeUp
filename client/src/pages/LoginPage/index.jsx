import { Button, Col, Form, Input, Row, Typography, notification } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png';
import TimeIllus from '../../assets/Main.png';
import MCTIllus from '../../assets/mainContainer.png';
import { login } from '../../services/Auth.services';

const { Text } = Typography;
export default function LoginPage() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    dispatch(login(values));
  };
  useEffect(() => {
    if (auth.status === 'success') {
      notification.success({
        message: 'Login Success',
        description: 'Welcome back!',
      });
      navigate('/dashboard');
    } else if (auth.status === 'failed') {
      notification.error({
        message: 'Login Fail',
        description: 'Please check your email and password again!',
      });
    }
  }, [auth]);
  return (
    <Row>
      <Col span={12} className='p-12'>
        <Link to='/'>
          <img src={LOGO} alt='LOGO' className='h-36' />
        </Link>
        <div className='ml-28'>
          <div className='mb-12 flex flex-col items-center'>
            <Text className='py-3 text-3xl font-bold'>Login to your account</Text>
            <Text className='text-base italic text-gray-400'>--Sign in with email--</Text>
          </div>
          <Form
            className='px-14'
            onFinish={onFinish}
            name='loginForm'
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
          >
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
              <Input size='large' className='font-normal' />
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
              <Input.Password size='large' className='font-normal' />
            </Form.Item>
            <Text className='float-right cursor-pointer underline'>Forgot Password?</Text>
            <Button
              htmlType='submit'
              type=''
              className='mt-28 w-full bg-blue-400 text-white hover:bg-blue-500'
              size='large'
            >
              Login
            </Button>
            <Text className='mt-2 block w-full text-center'>
              Don’t have an account?{' '}
              <Link to='/register'>
                <Text className='cursor-pointer underline'>Sign Up</Text>
              </Link>
            </Text>
          </Form>
        </div>
      </Col>
      <Col span={12} className='relative h-screen w-full rounded-l-2xl' style={{ backgroundColor: '#334d6e' }}>
        <img src={MCTIllus} alt='ILLUS' className='absolute right-0 top-10 w-3/5 rounded-l-3xl' />
        <img src={TimeIllus} alt='ILLUS' className='absolute bottom-10 left-0 w-3/5 rounded-r-3xl' />
      </Col>
    </Row>
  );
}
