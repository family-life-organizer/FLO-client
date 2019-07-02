import types from '../actions';
import jwt_decode from 'jwt-decode';

export default (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.LOGIN_SUCCESS:
			const loginUser = jwt_decode(localStorage.getItem('family_token'));
			return { family: loginUser };
		case types.REGISTER_SUCCESS:
			const newUser = jwt_decode(localStorage.getItem('family_token'));
			return { family: newUser };
		case types.LOGOUT:
			return {};
		case types.WELCOMEBACK:
			const returningUser = jwt_decode(localStorage.getItem('family_token'));
			return { family: returningUser };
		default:
			return state;
	}
};
