import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import logger from "./middleware/logger";

const initializeStore = (preloadedState = {}) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer,
        preloadedState,
        middleware: [ thunk, logger, sagaMiddleware ],
    });

    sagaMiddleware.run(rootSaga);

    return store;
};

export default initializeStore;

