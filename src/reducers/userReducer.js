import types from '../actions';
import jwt_decode from 'jwt-decode';

const initialState = {
	user  : {},
	error : null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.LOGIN_SUCCESS:
			return { user: payload.user };
		case types.REGISTER_SUCCESS:
			return { user: payload.user };
		case types.LOGOUT:
			return initialState;
		case types.WELCOME_BACK_SUCCESS:
			return { user: payload.user, error: null };
		case types.WELCOME_BACK_FAILURE:
			return { user: {}, error: payload };
		default:
			return state;
	}
};
