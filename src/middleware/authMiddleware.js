import types from '../actions';

export const authMiddleware = state => next => action => {
	if (action.type === types.LOGIN_SUCCESS) {
		localStorage.setItem('login_token', action.payload);
	}

	if (action.type === types.LOGOUT) {
		localStorage.removeItem('login_token');
	}

	next(action);
};
