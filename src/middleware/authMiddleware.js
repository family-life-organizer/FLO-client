import types from '../actions';
import jwt from 'jsonwebtoken';

export const authMiddleware = state => next => action => {
	if (action.type === types.LOGIN_SUCCESS) {
		const user = jwt.sign(action.payload.user, 'Don is a React PROgrammer', { expiresIn: '1d' });
		const family = jwt.sign(action.payload.family, 'Don Juan was a famous React Programmer', { expiresIn: '1d' });
		localStorage.setItem('login_token', action.payload.token);
		localStorage.setItem('user_token', user);
		localStorage.setItem('family_token', family);
	}
	if (action.type === types.REGISTER_SUCCESS) {
		console.log(action.payload);
		const newUser = jwt.sign(action.payload.data, "Registering in Don's React Applicaion is the Best Thing EVEEEER", {
			expiresIn : '1d',
		});
		const newFamily = jwt.sign({}, 'Empty Family', { expiresIn: '1d' });
		localStorage.setItem('login_token', action.payload.token);
		localStorage.setItem('user_token', newUser);
		localStorage.setItem('family_token', newFamily);
	}
	if (action.type === types.LOGOUT) {
		localStorage.removeItem('login_token');
		localStorage.removeItem('user_token');
		localStorage.removeItem('family_token');
	}

	next(action);
};
