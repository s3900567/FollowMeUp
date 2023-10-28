import { Button, Divider, Form, Input, Modal, Spin, Typography, Upload } from 'antd';
import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeInfo } from '../../../services/Auth.services';

const { Text, Title } = Typography;
export default function SettingPage() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [avatar, setAvatar] = useState(auth.avatar);
  const [loading, setLoading] = useState(false);
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
    }
    if (info.file.status === 'done') {
      console.log(info.file.response.data[0]);
      setAvatar(info.file.response.data[0].url);
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    console.log(values);
    values.avatar = avatar;
    values._id = auth._id;
    dispatch(ChangeInfo(values));
  };

  const onFinishChangePass = (values) => {
    console.log(values);
  };

  const validatePassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Mật khẩu xác nhận không khớp!');
    } else {
      callback();
    }
  };
  return (
    <main className='w-full h-full flex items-center justify-center'>
      <div className='w-1/3 p-4 flex flex-col space-y-2 rounded-md border border-gray-200'>
        <Title level={3} className='text-center'>
          My Profile
        </Title>
        <div className='flex justify-center items-center w-full'>
          <Upload
            name='file'
            listType='picture-circle'
            className='avatar-uploader'
            accept='image/*'
            showUploadList={false}
            action={import.meta.env.VITE_API_URL + '/uploads'}
            onChange={handleChange}
          >
            {avatar ? (
              <div className='w-full h-full relative'>
                {/* <RiImageEditLine size={16} className='absolute bottom-2 right-2 z-20' /> */}
                <img src={avatar} alt='avatar' className='w-full rounded-full' />
              </div>
            ) : (
              <div className='relative'>
                {loading ? <Spin size='small' /> : <BiImageAdd className='inline' size={20} />}
                <Text className='mt-2 block'>{!loading && 'Upload'}</Text>
              </div>
            )}
          </Upload>
        </div>
        <Form
          initialValues={{
            fullName: auth?.fullName,
            phoneNumber: auth?.phoneNumber,
          }}
          onFinish={onFinish}
          size='large'
          className='pt-6'
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Form.Item htmlFor='email' label={<Text className='font-medium text-base'>Email</Text>}>
            <Text className='text-base'>{auth?.email}</Text>
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
            htmlFor='fullName'
            name='fullName'
            label={<Text className='font-medium text-base'>Full Name</Text>}
          >
            <Input type='text' id='fullName' name='fullName' className='bg-slate-100' />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your Phone Number!',
              },
            ]}
            htmlFor='PhoneNumber'
            name='phoneNumber'
            label={<Text className='font-medium text-base'>Phone</Text>}
          >
            <Input
              // defaultValue={auth?.phoneNumber}
              type='text'
              id='PhoneNumber'
              name='phoneNumber'
              className='bg-slate-100'
            />
          </Form.Item>
          <Button type='' htmlType='submit' className='bg-green-600 hover:bg-green-500 w-full text-base text-white'>
            Update
          </Button>
        </Form>
        {/* <Divider className='py-4'>
          <Text className='text-gray-400'>OR</Text>
        </Divider>
        <div className='flex space-x-3'>
          <Button onClick={showModal} type='' className='bg-blue-600 hover:bg-blue-500 w-full text-base text-white'>
            Change Password
          </Button>
          <Button type='' className='bg-red-600 hover:bg-red-500 w-full text-base text-white'>
            Delete Account
          </Button>
        </div> */}
      </div>
      <Modal title='Change Password' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          onFinish={onFinishChangePass}
          size='large'
          className='pt-6'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item name='oldPassword' label={<Text className='font-medium text-base'>Current password</Text>}>
            <Input type='password' id='oldPassword' name='oldPassword' className='bg-slate-100' />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
            htmlFor='password'
            name='newPassword'
            label={<Text className='font-medium text-base'>New password</Text>}
          >
            <Input type='password' id='newPassword' name='newPassword' className='bg-slate-100' />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
              {
                validator: (_, value) => {
                  if (value === form.getFieldValue('newPassword')) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              },
            ]}
            name='confirmPassword'
            htmlFor='confirmPassword'
            label={<Text className='font-medium text-base'>Confirm Password</Text>}
          >
            <Input type='password' id='confirmPassword' name='confirmPassword' className='bg-slate-100' />
          </Form.Item>
          <Button type='' htmlType='submit' className='bg-green-600 hover:bg-green-500 w-full text-base text-white'>
            Update
          </Button>
        </Form>
      </Modal>
    </main>
  );
}
