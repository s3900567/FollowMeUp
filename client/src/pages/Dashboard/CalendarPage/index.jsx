import {
  Button,
  Col,
  ColorPicker,
  DatePicker,
  Divider,
  Empty,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  TimePicker,
  Typography,
} from 'antd';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CMCalendar from '../../../components/CMCalendar';
import { NEW_EVENT_RULE } from '../../../constants/Events.constants';
import { fetchContactsByUid } from '../../../services/Contacts.services';
import { createEvent, getEventsInDateRangeByUserId } from '../../../services/Events.services';
dayjs.extend(weekday);

const disabledRangeTime = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23],
    };
  }
  return {
    disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23],
  };
};

const { Text, Title } = Typography;
export default function CalendarPage() {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);
  const { events, loading: eventLoading } = useSelector((state) => state.events);
  const { auth } = useSelector((state) => state);
  const [form] = Form.useForm();

  const [openNewEvent, setOpenNewEvent] = useState(false);
  const [monthAndYear, setMonthAndYear] = useState({
    month: dayjs().format('MMMM'),
    year: dayjs().format('YYYY'),
  });
  const [ListContacts, setListContacts] = useState([]);
  const [weekday, setWeekday] = useState({
    start: dayjs().startOf('isoWeek').format('YYYY-MM-DD'),
    end: dayjs().endOf('isoWeek').format('YYYY-MM-DD'),
  });

  const handleChangeWeek = (type) => {
    if (type === 'prev') {
      setWeekday({
        start: dayjs(weekday.start).subtract(1, 'week').format('YYYY-MM-DD'),
        end: dayjs(weekday.end).subtract(1, 'week').format('YYYY-MM-DD'),
      });
      setMonthAndYear({
        month: dayjs(weekday.start).subtract(1, 'week').format('MMMM'),
        year: dayjs(weekday.start).subtract(1, 'week').format('YYYY'),
      });
    } else {
      setWeekday({
        start: dayjs(weekday.start).add(1, 'week').format('YYYY-MM-DD'),
        end: dayjs(weekday.end).add(1, 'week').format('YYYY-MM-DD'),
      });
      setMonthAndYear({
        month: dayjs(weekday.start).add(1, 'week').format('MMMM'),
        year: dayjs(weekday.start).add(1, 'week').format('YYYY'),
      });
    }
  };

  useEffect(() => {
    if (contacts) {
      const list = contacts.map((contact) => ({
        label: contact.fullName,
        value: contact._id,
      }));
      setListContacts(list);
    }
  }, [contacts]);

  useLayoutEffect(() => {
    if (auth._id) {
      dispatch(fetchContactsByUid(auth._id));
      dispatch(
        getEventsInDateRangeByUserId({
          userId: auth._id,
          start: weekday.start,
          end: weekday.end,
        }),
      );
    }
  }, [auth._id, weekday]);

  const handleCancel = () => {
    setOpenNewEvent(false);
  };

  const refreshEvents = async () => {
    await dispatch(
      getEventsInDateRangeByUserId({
        userId: auth._id,
        start: weekday.start,
        end: weekday.end,
      }),
    );
  };

  const onCreate = async (values) => {
    const dataForm = {
      ...values,
      userId: auth._id,
      color: typeof values.color === 'string' ? values.color : values.color.toHexString(),
      start: dayjs(values.time[0]).format('HH:mm'),
      end: dayjs(values.time[1]).format('HH:mm'),
    };
    await dispatch(createEvent(dataForm));
    await dispatch(
      getEventsInDateRangeByUserId({
        userId: auth._id,
        start: weekday.start,
        end: weekday.end,
      }),
    );
    setOpenNewEvent(false);
  };

  return (
    <main>
      {events && (
        <CMCalendar
          events={events}
          loading={eventLoading}
          monthAndYear={monthAndYear}
          nextWeek={() => handleChangeWeek('next')}
          prevWeek={() => handleChangeWeek('prev')}
          refreshEvents={refreshEvents}
        />
      )}
      <Row>
        <Col span={24}>
          <div className='flex space-x-3'>
            <div className='w-full rounded-2xl bg-white p-4'>
              <div className='flex items-center justify-between'>
                <Title level={4}>Events</Title>
                <Button
                  onClick={() => setOpenNewEvent(true)}
                  type=''
                  className='bg-blue-500 text-white hover:bg-blue-400'
                >
                  Create new
                </Button>
              </div>
              {events.length === 0 && (
                <div className='flex items-center justify-center h-32'>
                  <Empty description="You don't have any events this week!" />
                </div>
              )}
              {events.map((event) => (
                <div key={event.id} className='flex'>
                  <div className='w-[10%]'>{dayjs(event.date).format('DD/MM/YYYY')}</div>
                  <div className='w-[90%]'>
                    <Space>
                      <div className='h-4 w-1 bg-blue-600' />
                      <Text>
                        {event.start} - {event.end}
                      </Text>
                    </Space>
                    <Text className='block text-base'>{event.name}</Text>
                    <Divider className='my-1' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        title={<Title level={4}>New Event</Title>}
        centered
        okText='Create'
        open={openNewEvent}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
        onCancel={handleCancel}
      >
        <Form
          initialValues={{
            color: '#0000FF',
          }}
          autoComplete='off'
          form={form}
          requiredMark={false}
          layout='vertical'
          size='middle'
        >
          <div className='w-full flex justify-between space-x-3'>
            <div className='w-full'>
              <Form.Item label='Event Name:' name='name' rules={NEW_EVENT_RULE.name}>
                <Input type='text' placeholder='Event name' autoComplete='off' />
              </Form.Item>
              <Form.Item label='Description:' name='description'>
                <Input type='text' placeholder='Description' />
              </Form.Item>
            </div>
            <div className='w-full'>
              <Form.Item label='Date:' name='date' rules={NEW_EVENT_RULE.date}>
                <DatePicker className='w-full' />
              </Form.Item>
              <Form.Item label='Time:' name='time' rules={NEW_EVENT_RULE.time}>
                <TimePicker.RangePicker
                  disabledTime={disabledRangeTime}
                  minuteStep={10}
                  className='w-full'
                  format='HH:mm'
                />
              </Form.Item>
            </div>
          </div>
          <Form.Item label='Contact to participate:' name='contacts'>
            <Select mode='multiple' placeholder='Please select contacts' className='w-full' options={ListContacts} />
          </Form.Item>
          <Form.Item label='Color:' name='color'>
            <ColorPicker showText />
          </Form.Item>
        </Form>
      </Modal>
    </main>
  );
}
