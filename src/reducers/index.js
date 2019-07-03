import { combineReducers } from 'redux';
import auth from './authReducer';
import users from './userReducer';
import tasks from './taskReducer';

export default combineReducers({ auth, users, tasks });
