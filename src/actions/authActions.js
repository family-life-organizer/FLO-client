import types from './';
import api from '../api/customApi';
import { checkLoginInputs, checkRegisterInputs } from '../utils/validators';

export const doLogin = credentials => async dispatch => {
	dispatch({ type: types.LOGIN_START });
	try {
		// const response = await api.post(/*     */, credentials);
		// console.log(response);
		console.log(credentials);
	} catch (error) {
		console.log(error);
	}
};

export const doRegisterAccount = accountInfo => async dispatch => {
	dispatch({ type: types.REGISTER_START });
	try {
		const { isValid, errors } = checkRegisterInputs(accountInfo);
		if (!isValid) {
			dispatch({ type: types.REGISTER_FAILURE, payload: errors });
		} else {
			console.log(accountInfo);
			// const response = await api.post(/*     */, accountInfo);
		}
	} catch (error) {
		console.log(error);
	}
};

export const doLogout = () => ({ type: types.LOGOUT });

export const doWelcomeBack = () => {
	const token = localStorage.getItem('login_token');
	return {
		type    : types.WELCOMEBACK,
		payload : token,
	};
};
