import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'

import rootReducer from './root-reduer';

const middleware = [logger];

const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;