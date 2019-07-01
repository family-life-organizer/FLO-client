import types from '../actions';

const initialState = {
	isAuth    : false,
	isLoading : false,
	user      : {},
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};
