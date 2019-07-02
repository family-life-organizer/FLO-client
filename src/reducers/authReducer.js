import types from '../actions';
import jwt_decode from 'jwt-decode';

const initialState = {
	isAuth    : false,
	isLoading : false,
	user      : {},
	errors    : null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.LOGOUT:
			return initialState;
		case types.LOGIN_START:
			return { ...state, isAuth: false, isLoading: true, errors: null };
		case types.LOGIN_SUCCESS:
			return { ...state, isAuth: true, isLoading: false, user: payload.user, errors: null };
		case types.LOGIN_FAILURE:
			return { ...state, isAuth: false, isLoading: false, user: {}, errors: payload };
		case types.REGISTER_START:
			return { ...state, isAuth: false, isLoading: true, errors: null };
		case types.REGISTER_SUCCESS:
			let newUser = jwt_decode(payload.token);
			return { ...state, isAuth: true, isLoading: false, errors: null, user: newUser };
		case types.REGISTER_FAILURE:
			return { ...state, isAuth: false, isLoading: false, user: {}, errors: payload };
		case types.WELCOMEBACK:
			let returnUser = jwt_decode(payload.token);
			return { ...state, isAuth: true, isLoading: false, user: returnUser, errors: null };
		default:
			return state;
	}
};
