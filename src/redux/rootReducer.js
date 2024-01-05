// rootReducer.js
import { combineReducers } from 'redux';
// import tasksReducer from './tasksReducer';
import filterReducer from './filterReducer';
import tasksReducer from './reducers';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});

export default rootReducer;
