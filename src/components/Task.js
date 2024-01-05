import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <span>{task.description}</span>
    </li>
  );
};

export default Task;