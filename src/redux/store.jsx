import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import movieReducer from './feature/movieSlice';
// import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

// sagaMiddleware.run(rootSaga);

export default store;
