import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Typography, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, deleteUser } from '../../services/Auth.services'; 

const { Text } = Typography;

export default function SettingsPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth); 

    useEffect(() => {
        // Populate form data with current user's data
        setFormData(auth.user);
    }, [auth]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveChanges = () => {
        dispatch(updateUser(formData))
        .then(() => {
            notification.success({
                message: 'Update Successful',
                description: 'Your account details have been updated!'
            });
        })
        .catch(error => {
            notification.error({
                message: 'Update Failed',
                description: error.message || 'There was an error updating your account.'
            });
        });
    };

    const handleDeleteAccount = () => {
        // Show a confirmation dialog before deleting
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            dispatch(deleteUser(auth.user._id))
            .then(() => {
                notification.success({
                    message: 'Account Deleted',
                    description: 'Your account has been deleted successfully.'
                });
                // redirect user to where they need to be HERE
            })
            .catch(error => {
                notification.error({
                    message: 'Deletion Failed',
                    description: error.message || 'There was an error deleting your account.'
                });
            });
        }
    };

    return (
        <Layout>
            <Sider className='relative' breakpoint='lg' width={296} theme='light' collapsedWidth='0'>
        <div className='flex h-24 w-full items-center justify-center'>
          <Text className='text-2xl font-medium'>Follow Me Up</Text>
        </div>
        <div className='mt-6 flex flex-col space-y-3 px-8'>
          {MENU_ITEMS.map((item) => (
            <div
              className={`w-full cursor-pointer rounded-md px-3 py-2 transition-all ${
                activeMenu === item.key && 'bg-blue-500 py-4 text-white'
              }`}
              key={item.key}
              onClick={() => handleRouter(item.key, item.to)}
            >
              <div className={`flex items-center space-x-3 text-gray-400 ${activeMenu === item.key && 'text-white'}`}>
                {item.icon}
                <Text
                  className={`text-base text-gray-400 transition-colors ${activeMenu === item.key && 'text-white'}`}
                >
                  {item.label}
                </Text>
              </div>
            </div>
          ))}
          <div className='absolute bottom-0 left-0 flex h-72 w-full flex-col items-start justify-end space-y-8 p-8'>
            <Link to='/contact_support'>
              <Button
                type='text'
                size='large'
                icon={<FaHeadphonesSimple className='inline' size={21} />}
                className='flex items-center space-x-1 bg-gray-200'
              >
                Contact Support
              </Button>
            </Link>
            <Button
              danger
              size='large'
              type='text'
              className='flex items-center space-x-1 text-xl'
              icon={<HiOutlineLogout className='inline' size={21} />}
            >
              Logout
            </Button>
          </div>
        </div>
      </Sider>
            <Layout className='h-screen'>
            <Header className='h-24 bg-white p-0'>
          <div className='flex h-full items-start justify-between py-2'>
            <Text className='text-3xl font-bold uppercase'>{activeMenu}</Text>
            <div className='mr-4 flex items-center space-x-6'>
              <Select defaultValue='username' status='warning'>
                <Select.Option value='username'>User name</Select.Option>
              </Select>
              <HiBell size={20} className='text-blue-500' />
              <Avatar className='bg-orange-500'>USER</Avatar>
            </div>
          </div>
        </Header>
                <Content style={{ backgroundColor: '#f4f5fa' }} className='overflow-auto'>
                    <div className='mx-5 my-4 flex justify-center items-center h-full'>
                        <Form layout="vertical" style={{ width: '40%' }}>
                            <Form.Item label="Full Name">
                                <Input name="fullName" value={formData.fullName} onChange={handleInputChange} />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input name="email" value={formData.email} onChange={handleInputChange} />
                            </Form.Item>
                            <Form.Item label="Password">
                                <Input.Password name="password" value={formData.password} onChange={handleInputChange} />
                            </Form.Item>
                            <Button type="primary" block>Save Changes</Button>
                        </Form>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

