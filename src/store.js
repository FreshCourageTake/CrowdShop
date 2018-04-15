import { Platform } from 'react-native'
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        middleware
    )
);

export default store;