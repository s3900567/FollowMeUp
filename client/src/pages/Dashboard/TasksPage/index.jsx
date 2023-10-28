import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input, List, Typography } from 'antd';
import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, deleteTask, getAllTasks, updateTask } from '../../../services/Tasks.services';
import { BiEditAlt, BiSave } from 'react-icons/bi';

const { Text, Title } = Typography;

const TasksPage = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const auth = useSelector((state) => state.auth);
  const [inputValue, setInputValue] = useState('');

  useLayoutEffect(() => {
    if (auth._id) {
      dispatch(getAllTasks({ userId: auth._id }));
    }
  }, [auth]);

  const handleAddTask = async () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        userId: auth._id,
        title: inputValue,
        finish: false,
      };
      await dispatch(createTask(newTask));
      setInputValue('');
    }
  };

  const handleDeleteTask = async (_id) => {
    await dispatch(deleteTask(_id));
  };

  const handleUpdateTask = async (task) => {
    await dispatch(updateTask(task));
  };

  return (
    <main>
      <Title level={2}>Tasks List</Title>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-full max-w-md'>
          <Input
            placeholder='Add a task'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={handleAddTask}
            suffix={
              <Button type='primary' icon={<PlusOutlined />} onClick={handleAddTask}>
                Add
              </Button>
            }
          />
          <List
            className='mt-4'
            bordered
            dataSource={tasks}
            renderItem={(task) => (
              <ListItem
                key={task._id}
                _id={task._id}
                finish={task.finish}
                title={task.title}
                onDelete={handleDeleteTask}
                onUpdate={handleUpdateTask}
              />
            )}
          />
        </div>
      </div>
    </main>
  );
};

const ListItem = ({ _id, finish, title, onDelete, onUpdate }) => {
  const [checked, setChecked] = useState(finish);
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(title);
  const handleUpdateCheck = async (isChecked) => {
    setChecked(isChecked);
    await onUpdate({ _id, finish: isChecked });
  };
  const handleChangeMode = async (mode) => {
    switch (mode) {
      case 'edit':
        setEdit(true);
        break;
      case 'save':
        await onUpdate({ _id, title: inputValue });
        setEdit(false);
        break;
      default:
        break;
    }
  };
  return (
    <List.Item
      actions={[
        <Button
          key={_id}
          type='text'
          icon={
            edit ? (
              <BiSave className='inline mt-1 text-blue-600' size={16} />
            ) : (
              <BiEditAlt className='inline mt-1' size={16} />
            )
          }
          onClick={() => handleChangeMode(edit ? 'save' : 'edit')}
        />,
        <Button key={_id} type='link' danger onClick={() => onDelete(_id)}>
          Delete
        </Button>,
      ]}
    >
      {edit ? (
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      ) : (
        <Checkbox className='mr-2' checked={checked} onChange={(e) => handleUpdateCheck(e.target.checked)}>
          <Text className={`${checked && 'line-through'}`}>{title}</Text>
        </Checkbox>
      )}
    </List.Item>
  );
};

export default TasksPage;
