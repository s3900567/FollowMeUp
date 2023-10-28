import { Button, Col, DatePicker, Form, Input, Row, Select, Typography, notification } from 'antd';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { newContact, updateContact } from '../../../../services/Contacts.services';
import dayjs from 'dayjs';

const { Text } = Typography;
const dateFormat = 'DD/MM/YYYY';

export default function NewContacts() {
  const param = useParams();
  const [form] = Form.useForm();
  const [status, setStatus] = useState('create');
  const [contact, setContact] = useState({});
  const listContacts = useSelector((state) => state.contacts.contacts);
  useLayoutEffect(() => {
    if (param.id) {
      const contact = listContacts.find((contact) => contact._id === param.id);
      setContact(contact);
      setStatus('edit');
    }
  }, [param]);

  useEffect(() => {
    if (status === 'edit' && listContacts.length === 0) navigation('/dashboard/contacts');
    if (contact) {
      const initContact = { ...contact };
      initContact.lastContacted = null;
      form.setFieldsValue(initContact);
    }
  }, [contact]);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const auth = useSelector((state) => state.auth);
  const onFinish = (values) => {
    values.userId = auth._id;
    values._id = contact._id;
    switch (status) {
      case 'create':
        dispatch(newContact(values));
        notification.success({
          message: 'Create new contact successfully!',
        });
        navigation('/dashboard/contacts');
        break;
      case 'edit':
        if (!values.lastContacted) values.lastContacted = contact.lastContacted;
        dispatch(updateContact(values));
        notification.success({
          message: 'Update contact successfully!',
        });
        navigation('/dashboard/contacts');
        break;
      default:
        break;
    }
  };
  return (
    <main className='relative w-full'>
      <div className='absolute w-[400px] h-[400px] -top-[200px] left-0 rounded-full bg-blue-900 flex items-center justify-center'>
        <Text className='text-5xl font-bold text-white translate-y-3/4'>Follow Me Up</Text>
      </div>
      <div className='h-[200px]' />
      <div className='w-full'>
        <Text className='block text-4xl font-bold text-center'>
          {status === 'create' ? 'Add new contact' : 'Edit contact'}
        </Text>
      </div>
      <Form
        form={form}
        initialValues={contact}
        name='Info_User'
        size='large'
        layout='vertical'
        className='p-10'
        onFinish={onFinish}
      >
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
              <DatePicker className='w-full h-14' format={dateFormat} />
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
            {status === 'create' ? 'Submit' : 'Update contact'}
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
