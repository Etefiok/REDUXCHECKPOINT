
import React from 'react';
import { connect } from 'react-redux';
import { addTask, editTask, toggleFilter } from './redux/actions'; // Import your action creators

const AddTask = ({ addTask }) => {
  // ... (unchanged)
};

const ListTask = ({ tasks, filter }) => {
  // ... (unchanged)
};

const Task = ({ task, onEditTask }) => {
  // ... (unchanged)
};

const TodoApp = ({ tasks, filter, addTask, editTask, toggleFilter }) => {
  // ... (unchanged)
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  addTask,
  editTask,
  toggleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
