import { Button, Col, Form, Input, Row, Typography } from 'antd';

const { Text } = Typography;

export default function NewContacts() {
  return (
    <main className='relative w-full'>
      <div className='absolute w-[400px] h-[400px] -top-[200px] left-0 rounded-full bg-blue-900 flex items-center justify-center'>
        <Text className='text-5xl font-bold text-white translate-y-3/4'>Follow Me Up</Text>
      </div>
      <div className='h-[200px]' />
      <div className='w-full'>
        <Text className='block text-4xl font-bold text-center'>Add new contact</Text>
      </div>
      <Form size='large' layout='vertical' className='p-10'>
        <Row>
          <Col span={12} className='flex flex-col items-center space-y-10'>
            <Form.Item label='Full name:' className='w-[650px] font-medium text-xl'>
              <Input size='large' placeholder='Name' className='h-14' />
            </Form.Item>
            <Form.Item label='Email:' className='w-[650px] font-medium text-xl'>
              <Input size='large' className='h-14' placeholder='Email' />
            </Form.Item>
            <Form.Item label='Phone number:' className='w-[650px] font-medium text-xl'>
              <Input size='large' className='h-14' placeholder='Phone number' />
            </Form.Item>
          </Col>
          <Col span={12} className='flex flex-col items-center space-y-10'>
            <Form.Item label='Full name:' className='w-[650px] font-medium text-xl'>
              <Input size='large' className='h-14' placeholder='Name' />
            </Form.Item>
            <Form.Item label='Email:' className='w-[650px] font-medium text-xl'>
              <Input size='large' className='h-14' placeholder='Email' />
            </Form.Item>
            <Form.Item label='Phone number:' className='w-[650px] font-medium text-xl'>
              <Input size='large' className='h-14' placeholder='Phone number' />
            </Form.Item>
          </Col>
        </Row>
        <div className='mx-[130px] mt-4'>
          <Form.Item className='font-medium text-xl' label='Why am i interested in contacting them, and where you meet'>
            <Input.TextArea size='large' className='h-40' placeholder='Phone number' />
          </Form.Item>
        </div>
        <div className='flex justify-center'>
          <Button shape='round' type='primary' className='w-72'>
            Submit
          </Button>
        </div>
      </Form>
    </main>
  );
}
