import types from '../actions';
import jwt_decode from 'jwt-decode';

export default (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.LOGIN_SUCCESS:
			const loginUser = jwt_decode(localStorage.getItem('user_token'));
			return { user: loginUser };
		case types.REGISTER_SUCCESS:
			const newUser = jwt_decode(localStorage.getItem('user_token'));
			return { user: newUser };
		case types.LOGOUT:
			return {};
		case types.WELCOMEBACK:
			const returningUser = jwt_decode(localStorage.getItem('user_token'));
			return { user: returningUser };
		default:
			return state;
	}
};
