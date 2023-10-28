import { Button, Divider, Modal, Space, Spin, Table, Tooltip, Typography, notification } from 'antd';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import isoWeek from 'dayjs/plugin/isoWeek';
// import { TABLE_CONTACTS_COLUMNS } from '../../constants/Events.constants';
import { deleteEvent } from '../../services/Events.services';
import { useDispatch } from 'react-redux';
import MailAPI from '../../utils/API/Mail.api';
import { HiOutlineMail } from 'react-icons/hi';
dayjs.extend(isoWeek);

const { Text, Title } = Typography;

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const getPositionLine = (date, start, end) => {
  const detectDayInWeek = (date) => {
    if (dayjs(date).weekday() === 0) return 7;
    return dayjs(date).weekday();
  };
  // 1px = 1 minute, 1 day = 150px
  // 1 line has 100px width
  start = dayjs(date + ' ' + start);
  end = dayjs(date + ' ' + end);
  const startOf = dayjs(date + ' 08:00');
  const height = end.diff(start, 'minutes'); // calculate height of event
  const positionTop = start.diff(startOf, 'minutes'); // calculate position top of event
  const positionLeft = detectDayInWeek(date) * 150 - 110; // calculate position left of event
  // console.log('height', height, 'positionTop', positionTop, 'positionLeft', positionLeft);
  return {
    height,
    positionTop,
    positionLeft,
  };
};

export default function CMCalendar({ events, loading, nextWeek, prevWeek, monthAndYear, refreshEvents }) {
  const dispatch = useDispatch();
  const [lineEvents, setLineEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    // console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleOpenModal = (data) => {
    setModalData(data);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleDeleteEvent = async (_id) => {
    await dispatch(deleteEvent({ _id }));
    refreshEvents();
    handleCloseModal();
    Modal.destroyAll();
  };
  useEffect(() => {
    const newEvents = [];
    console.log(events);
    events.forEach((event) => {
      const { height, positionTop, positionLeft } = getPositionLine(
        dayjs(event.date).format('MM/DD/YYYY'),
        event.start,
        event.end,
      );
      newEvents.push({
        ...event,
        height,
        positionTop,
        positionLeft,
      });
    });
    setLineEvents(newEvents);
  }, [events]);

  const sendMailAll = () => {
    selectedRowKeys.forEach((key, idx) => {
      const data = {
        to: key,
        subject: `Invitation to ${modalData.name}`,
        bodyMail: {
          username: modalData.contacts[idx].fullName,
          eventName: modalData.name,
          date: dayjs(modalData.date).format('DD/MM/YYYY'),
          start: modalData.start,
          end: modalData.end,
        },
      };
      console.log(data);
      MailAPI.sendMail(data);
    });
    notification.success({
      message: 'All emails sent!',
      description: 'All emails have been sent successfully!',
    });
  };

  const sendMail = (record) => {
    const data = {
      to: record.email,
      subject: `Invitation to ${modalData.name}`,
      bodyMail: {
        username: record.fullName,
        eventName: modalData.name,
        date: dayjs(modalData.date).format('DD/MM/YYYY'),
        start: modalData.start,
        end: modalData.end,
      },
    };
    console.log(data);
    MailAPI.sendMail(data);
    notification.success({
      message: 'Email sent!',
      description: `Email has been sent to ${record.fullName}!`,
    });
  };

  const TABLE_CONTACTS_COLUMNS = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      width: '30%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '30%',
    },
    {
      title: 'Phone',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: '30%',
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (_, record) => (
        <Button onClick={() => sendMail(record)}>
          <HiOutlineMail size={20} className='inline' />
        </Button>
      ),
    },
  ];

  return (
    <div className='relative w-full h-full'>
      {loading && (
        <div className='absolute top-0 left-0 w-full h-full bg-gray-800/60 rounded-md z-20 flex flex-col items-center justify-center cursor-wait'>
          <Spin size='large' />
          <Text className='text-2xl text-white'>Loading...</Text>
        </div>
      )}
      <div className='flex items-center justify-between px-6'>
        <Title level={2}>
          {monthAndYear.month} {monthAndYear.year}
        </Title>
        <div className='flex items-center space-x-4'>
          <Tooltip title='Previous week' placement='top'>
            <BsArrowLeftShort className='cursor-pointer' size={40} onClick={prevWeek} />
          </Tooltip>
          <Tooltip title='Next week' placement='top'>
            <BsArrowRightShort className='cursor-pointer' size={40} onClick={nextWeek} />
          </Tooltip>
        </div>
      </div>
      <div className='relative w-[1050px] h-[40px]'>
        {days.map((day, index) => (
          <div key={day} className='absolute w-[150px] h-[100px] top-0' style={{ left: index * 150 }}>
            <Title level={4} className='block text-center'>
              {day}
            </Title>
          </div>
        ))}
      </div>
      <div className='relative w-[1000px] h-[600px]'>
        <div className='absolute top-0 w-full h-full'>
          {[8, 9, 10, 11, 12, 13, 14, 15, 16].map((hour, index) => (
            <div key={hour} className='absolute w-full top-0' style={{ top: index * 60 }}>
              <Divider className='w-full my-0' />
              <Text className='font-medium text-gray-500 w-20'>{hour}h</Text>
            </div>
          ))}
        </div>
        {lineEvents?.map((event) => (
          <Tooltip
            key={event.id}
            placement='top'
            title={
              <>
                <Text className='text-base text-white block font-medium'>{event.name}</Text>
                <Text className='text-base text-white block'>{dayjs(event.date).format('DD/MM/YYYY')}</Text>
                <Text className='text-base text-white block'>
                  {event.start} - {event.end}
                </Text>
              </>
            }
            arrow={true}
          >
            <div
              className='absolute w-[75px] rounded-md cursor-pointer transition-all p-1 overflow-hidden'
              onClick={() => handleOpenModal(event)}
              style={{
                top: event.positionTop,
                left: event.positionLeft,
                height: event.height,
                backgroundColor: event.color,
              }}
            ></div>
          </Tooltip>
        ))}
      </div>
      <Modal
        title={<Title level={3}>{modalData.name}</Title>}
        centered
        width={800}
        open={openModal}
        onCancel={handleCloseModal}
        footer={
          <Space size='small' onClick={handleCloseModal}>
            <Button
              danger
              onClick={() =>
                Modal.warning({
                  title: 'Are you sure?',
                  content: 'Do you want to delete this event?',
                  footer: (
                    <Space className='float-right mt-4'>
                      <Button
                        onClick={() => {
                          handleCloseModal();
                          Modal.destroyAll();
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type='primary'
                        danger
                        onClick={() => {
                          handleDeleteEvent(modalData._id);
                        }}
                      >
                        Delete
                      </Button>
                    </Space>
                  ),
                })
              }
            >
              Delete Event
            </Button>
            <Button type='primary'>OK</Button>
          </Space>
        }
      >
        <Text className='text-base block'>Date: {dayjs(modalData.date).format('DD/MM/YYYY')}</Text>
        <Text className='text-base block'>
          Time: {modalData.start} - {modalData.end}
        </Text>
        <Text className='text-base block mt-3'>User join:</Text>
        {selectedRowKeys.length > 0 && (
          <div className='flex items-center justify-between p-2 my-1 bg-slate-200 rounded-md'>
            <Text className='text-base block'>
              Selected: {selectedRowKeys.length} user{selectedRowKeys.length > 1 ? 's' : ''}
            </Text>
            <Button onClick={sendMailAll} type='primary'>
              Send all
            </Button>
          </div>
        )}
        <Table
          rowSelection={rowSelection}
          size='small'
          columns={TABLE_CONTACTS_COLUMNS}
          dataSource={modalData.contacts?.map((contact) => ({ ...contact, key: contact.email }))}
        />
      </Modal>
    </div>
  );
}

CMCalendar.propTypes = {
  events: PropTypes.array,
  loading: PropTypes.bool,
  nextWeek: PropTypes.func,
  prevWeek: PropTypes.func,
  monthAndYear: PropTypes.object,
  refreshEvents: PropTypes.func,
};
