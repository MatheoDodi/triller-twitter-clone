import { combineReducers } from 'redux';
import authedUser from './authUser';
import tweets from './tweets';
import users from './users';

export default combineReducers({
  authedUser,
  users,
  tweets
})