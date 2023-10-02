import { Button, Col, DatePicker, Form, Input, Row, Select, Typography, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { newContact } from '../../../../services/Contacts.services';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

export default function NewContacts() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const auth = useSelector((state) => state.auth);
  const onFinish = (values) => {
    console.log('Success:', values);
    values.userId = auth._id;
    console.log(values);
    dispatch(newContact(values));
    notification.success({
      message: 'Create new contact successfully!',
    });
    navigation('/dashboard/contacts');
  };
  return (
    <main className='relative w-full'>
      <div className='absolute w-[400px] h-[400px] -top-[200px] left-0 rounded-full bg-blue-900 flex items-center justify-center'>
        <Text className='text-5xl font-bold text-white translate-y-3/4'>Follow Me Up</Text>
      </div>
      <div className='h-[200px]' />
      <div className='w-full'>
        <Text className='block text-4xl font-bold text-center'>Add new contact</Text>
      </div>
      <Form name='Info_User' size='large' layout='vertical' className='p-10' onFinish={onFinish}>
        <Row>
          <Col span={12} className='flex flex-col items-center space-y-10'>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                },
              ]}
              name='fullName'
              label='Full name:'
              className='w-[650px] font-medium text-xl'
            >
              <Input size='large' placeholder='Name' className='h-14' />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
              label='Email:'
              name='email'
              className='w-[650px] font-medium text-xl'
            >
              <Input size='large' className='h-14' placeholder='Email' />
            </Form.Item>
            <Form.Item name='phoneNumber' label='Phone number:' className='w-[650px] font-medium text-xl'>
              <Input size='large' className='h-14' placeholder='Phone number' />
            </Form.Item>
          </Col>
          <Col span={12} className='flex flex-col items-center space-y-10'>
            <Form.Item name='tags' label='Tagging:' className='w-[650px] font-medium text-xl'>
              <Select mode='tags' className='w-full' placeholder='Tagging' tokenSeparators={[',']} />
            </Form.Item>
            <Form.Item name='occupation' label='Occupation:' className='w-[650px] font-medium text-xl'>
              <Input size='large' className='h-14' placeholder='Occupation' />
            </Form.Item>
            <Form.Item name='lastContacted' label='Last Connected:' className='w-[650px] font-medium text-xl'>
              <DatePicker className='w-full h-14' />
            </Form.Item>
          </Col>
        </Row>
        <div className='mx-[130px] mt-4'>
          <Form.Item
            name='moreInfo'
            className='font-medium text-xl'
            label='Why am i interested in contacting them, and where you meet?'
          >
            <Input.TextArea size='large' className='h-40' />
          </Form.Item>
        </div>
        <Form.Item className='flex justify-center'>
          <Button htmlType='submit' shape='round' type='primary' className='w-72 bg-blue-600 hover:bg-blue-500'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
