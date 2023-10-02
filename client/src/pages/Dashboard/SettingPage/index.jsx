import { Button, Divider, Form, Input, Spin, Typography, Upload } from 'antd';
import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { RiImageEditLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const { Text, Title } = Typography
export default function SettingPage() {
  const auth = useSelector(state => state.auth);
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
  return (
    <main className='w-full h-full flex items-center justify-center'>
      <div className='w-1/3 p-4 flex flex-col space-y-2 rounded-md border border-gray-200'>
        <Title level={3} className='text-center'>My Profile</Title>
        <div className='flex justify-center items-center w-full'>
          <Upload
            name="file"
            listType="picture-circle"
            className="avatar-uploader"
            accept='image/*'
            showUploadList={false}
            action={import.meta.env.VITE_API_URL + '/uploads'}
            onChange={handleChange}
          >
            {avatar ? (
              <div className='w-full h-full relative'>
                <img
                  src={avatar}
                  alt="avatar"
                  style={{
                    width: '100%',
                  }}
                />
                <RiImageEditLine size={16} className='absolute bottom-2 right-2' />
              </div>
            ) : (
              <div className='relative'>
                {loading ? <Spin size="small" /> : <BiImageAdd className='inline' size={20} />}
                <Text className='mt-2 block'>{!loading && "Upload"}</Text>
              </div>
            )}
          </Upload>
        </div>
        <Form size='large' className='pt-6' labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
          <Form.Item htmlFor="email" label={<Text className='font-medium text-base'>Email</Text>}>
            <Text className='text-base'>{auth?.email}</Text>
          </Form.Item>
          <Form.Item htmlFor="fullName" label={<Text className='font-medium text-base'>Full Name</Text>}>
            <Input defaultValue={auth?.fullName} type='text' id='fullName' name='fullName' className='bg-slate-100' />
          </Form.Item>
          <Form.Item htmlFor="PhoneNumber" label={<Text className='font-medium text-base'>Phone</Text>}>
            <Input defaultValue={auth?.phoneNumber} type='text' id='PhoneNumber' name='PhoneNumber' className='bg-slate-100' />
          </Form.Item>
          <Button type='' className='bg-green-600 hover:bg-green-500 w-full text-base text-white'>Update</Button>
        </Form>
        <Divider className='py-4'><Text className='text-gray-400'>OR</Text></Divider>
        <div className='flex space-x-3'>
          <Button type='' className='bg-blue-600 hover:bg-blue-500 w-full text-base text-white'>Change Password</Button>
          <Button type='' className='bg-red-600 hover:bg-red-500 w-full text-base text-white'>Delete Account</Button>
        </div>
      </div>
    </main>
  )
}
