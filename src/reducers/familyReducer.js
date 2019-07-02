import types from '../actions';
import jwt_decode from 'jwt-decode';

const initialState = {
	family : {},
	errors : null,
};

export default (state = initialState, action) => {
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
		case types.GET_FAMILY_MEMBERS_SUCCESS:
			return { ...state, family: payload, errors: null };
		case types.GET_FAMILY_MEMBERS_FAILURE:
			return { ...state, family: {}, errors: payload };
		case types.ADD_FAMILY_MEMBER_SUCCESS:
			return { family: [ ...state.family, payload ], errors: null };
		case types.ADD_FAMILY_MEMBER_FAILURE:
			return { ...state, errors: payload };
		default:
			return state;
	}
};
