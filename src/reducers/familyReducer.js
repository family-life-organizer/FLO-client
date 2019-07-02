import types from '../actions';
import jwt_decode from 'jwt-decode';

export default (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};
