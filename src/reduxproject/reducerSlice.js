import { ADD_TASK, EDIT_TASK, TOGGLE_FILTER } from './redux/actions';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, description: action.payload.newDescription }
          : task
      );
    default:
      return state;
  }
};

const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export { tasksReducer, filterReducer };