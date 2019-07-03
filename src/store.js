import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { authMiddleware } from './middleware/authMiddleware';
import rootReducer from './reducers';

const store = () => {
	if (process.env.NODE_ENV === 'development') {
		return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger, authMiddleware)));
	} else {
		return createStore(rootReducer, applyMiddleware(thunk, authMiddleware));
	}
};

export default store;
