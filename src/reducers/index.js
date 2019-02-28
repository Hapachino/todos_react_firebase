import { combineReducers } from 'redux';
import todos from './todos_reducers';
import users from './users_reducer';

export default combineReducers({
  todos,
  users,
});
