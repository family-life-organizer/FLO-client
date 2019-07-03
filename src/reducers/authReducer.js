import types from '../actions';
import jwt_decode from 'jwt-decode';

const initialState = {
	isAuth    : false,
	isLoading : false,
	token     : {},
	errors    : null,
	updateAccount : false,
	addBadger : false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.LOGOUT:
			return initialState;
		case types.LOGIN_START:
			return { ...state, isAuth: false, isLoading: true, errors: null };
		case types.LOGIN_SUCCESS:
			const token = jwt_decode(payload.token);
			return { ...state, isAuth: true, isLoading: false, token: token, errors: null };
		case types.LOGIN_FAILURE:
			return { ...state, isAuth: false, isLoading: false, token: {}, errors: payload };
		case types.REGISTER_START:
			return { ...state, isAuth: false, isLoading: true, errors: null };
		case types.REGISTER_SUCCESS:
			const newToken = jwt_decode(payload.token);
			return { ...state, isAuth: true, isLoading: false, errors: null, token: newToken };
		case types.REGISTER_FAILURE:
			return { ...state, isAuth: false, isLoading: false, token: {}, errors: payload };
		case types.WELCOME_BACK_START:
			return { ...state, isLoading: true };
		case types.WELCOME_BACK_SUCCESS:
			let returnToken = jwt_decode(payload.token);
			return { ...state, isAuth: true, isLoading: false, token: returnToken, errors: null };
		case types.UPDATE_ACCOUNT_START:
			return {...state, updateAccount: false, isLoading: true}
		case types.UPDATE_ACCOUNT_SUCCESS:
			return {...state, updateAccount: true, isLoading: false}
		case types.UPDATE_ACCOUNT_FAILURE:
			return {...state, updateAccount: false, isLoading: false}
		case types.GET_FAMILY_MEMBERS_START:
			return { ...state, isLoading: true };
		case types.GET_FAMILY_MEMBERS_SUCCESS:
			return { ...state, isLoading: false };
		case types.GET_FAMILY_MEMBERS_FAILURE:
			return { ...state, isLoading: false };
		case types.ADD_FAMILY_MEMBER_START:
			return { ...state, addBadger: false, isLoading: true };
		case types.ADD_FAMILY_MEMBER_SUCCESS:
			return { ...state, addBadger: true, isLoading: false };
		case types.ADD_FAMILY_MEMBER_FAILURE:
			return { ...state, addBadger: true, isLoading: false };
		case types.GET_CATEGORIES_START:
			return { ...state, isLoading: true };
		case types.GET_CATEGORIES_SUCCESS:
			return { ...state, isLoading: false };
		case types.GET_CATEGORIES_FAILURE:
			return { ...state, isLoading: false };
		case types.CREATE_CATEGORY_START:
			return { ...state, isLoading: true };
		case types.CREATE_CATEGORY_SUCCESS:
			return { ...state, isLoading: false };
		case types.CREATE_CATEGORY_FAILURE:
			return { ...state, isLoading: false };
		case types.CREATE_TASK_START:
			return { ...state, isLoading: true };
		case types.CREATE_TASK_SUCCESS:
			return { ...state, isLoading: false };
		case types.CREATE_TASK_FAILURE:
			return { ...state, isLoading: false };
			case types.RESET:
			return { ...state, isLoading: false, errors: null };
		default:
			return state;
	}
};
