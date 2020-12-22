import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [ReduxThunk];

import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares, logger)),
);
export const persistor = persistStore(store);

export default store;
