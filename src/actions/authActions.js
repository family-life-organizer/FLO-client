import types from './';
import api from '../api/customApi';
import { checkRegisterInputs } from '../utils/validators';

export const doLogin = credentials => async dispatch => {
	dispatch({ type: types.LOGIN_START });
	try {
		const { user, password } = credentials;
		const userLogin = {};

		if (/(@)/.test(user)) {
			userLogin.email = user;
		} else {
			userLogin.username = user;
		}
		userLogin.password = password;
		const response = await api.post('/login', userLogin);
		dispatch({ type: types.LOGIN_SUCCESS, payload: response });
	} catch (error) {
		dispatch({ type: types.LOGIN_FAILURE, payload: error });
	}
};

export const doRegisterAccount = accountInfo => async dispatch => {
	dispatch({ type: types.REGISTER_START });
	try {
		const { isValid, errors } = checkRegisterInputs(accountInfo);
		if (!isValid) {
			dispatch({ type: types.REGISTER_FAILURE, payload: errors });
		} else {
			const response = await api.post('/signup', accountInfo);
			dispatch({ type: types.REGISTER_SUCCESS, payload: response });
		}
	} catch (error) {
		dispatch({ type: types.REGISTER_FAILURE, payload: error });
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
