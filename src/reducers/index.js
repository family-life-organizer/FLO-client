import { combineReducers } from 'redux';
import auth from './authReducer';
import users from './userReducer';

export default combineReducers({ auth, users });
