import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import mySaga from './sagas';
import rootReducer from './reducers';
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(mySaga);
export default store;