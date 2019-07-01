import types from './';
import api from '../api/customApi';

export const doLogin = credentials => async dispatch => {
  dispatch({type: types.LOGIN_START});
  try {
    const response = await api.post(/*     */, credentials);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export const doRegisterAccount = accountInfo => async dispatch => {
  dispatch({type: types.REGISTER_START});
  try {
    const response = await api.post(/*     */, accountInfo);
  } catch (error) {
    console.log(error);
  }
}

export const doLogout = () => ({type: types.LOGOUT});

export const doWelcomeBack = () => ({type: types.WELCOMEBACK})