import { combineReducers } from 'redux';
import auth from './authReducer';
import users from './userReducer';
import family from './familyReducer';

export default combineReducers({ auth, users, family });
