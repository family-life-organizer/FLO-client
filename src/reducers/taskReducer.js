import types from '../actions';

const initialState = {
	categories : [],
	errors     : null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.GET_CATEGORIES_SUCCESS:
			return { ...state, categories: payload, errors: 'null' };
		case types.GET_CATEGORIES_FAILURE:
			return { ...state, categories: [], errors: 'Hello World' };
		case types.CREATE_CATEGORY_SUCCESS:
			return { ...state, categories: payload, errors: null };
		case types.CREATE_CATEGORY_FAILURE:
			return { ...state, categories: [], errors: null };

		default:
			return state;
	}
};
