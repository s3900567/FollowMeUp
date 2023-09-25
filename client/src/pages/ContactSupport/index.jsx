import { Button, Form, Input, Typography } from 'antd';
import CTSP from '../../assets/ContactSupport/CTSP.png';
import FB from '../../assets/ContactSupport/FB.png';
import IG from '../../assets/ContactSupport/IG.png';
import WC from '../../assets/ContactSupport/WC.png';
import Mail from '../../assets/ContactSupport/Mail.png';
const { Title, Text } = Typography;

export default function ContactSupport() {
  return (
    <main className='w-full h-screen' style={{ background: '#334D6E' }}>
      <div className='w-full h-full p-20'>
        <div className='w-full h-full rounded-2xl pl-16' style={{ background: '#5F7694' }}>
          <div className='w-full h-full rounded-2xl px-16' style={{ background: '#8A9AAF' }}>
            <div className='w-full h-full rounded-2xl pl-16' style={{ background: '#CBD7E7' }}>
              <div className='relative w-full h-full bg-white rounded-2xl px-16 py-10'>
                <div
                  style={{ background: '#CBD7E7' }}
                  className='absolute py-2 -right-[80px] w-20 top-1/2 -translate-y-1/2 rounded-md flex flex-col items-center space-y-2'
                >
                  <img src={FB} alt='' className='w-16' />
                  <img src={Mail} alt='' className='w-16' />
                  <img src={IG} alt='' className='w-16' />
                  <img src={WC} alt='' className='w-16' />
                </div>
                <Title level={1}>GET IN TOUCH</Title>
                <Text className='text-gray-500 text-3xl'>We are here for you! How can we help?</Text>
                <div className='flex space-x-7'>
                  <Form className='mt-10 w-[518px]'>
                    <div className='flex flex-col items-center space-y-8'>
                      <Input size='large' placeholder='Enter your name' className='h-14' />
                      <Input size='large' placeholder='Enter your email' className='h-14' />
                      <Input.TextArea
                        style={{ height: 180, resize: 'none' }}
                        size='large'
                        placeholder='Leave your message there!'
                      />
                      <Button className='w-40 bg-slate-200 hover:bg-slate-100' type='' size='large' shape='round'>
                        Submit
                      </Button>
                    </div>
                  </Form>
                  <div>
                    <img src={CTSP} alt='Contact Support' className='w-[350px]' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
