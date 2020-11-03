import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { adminReducer } from '../reducers/adminReducer';

import { authReducer } from '../reducers/authReducer';
import { homeReducer } from '../reducers/homeReducer';
import { screenReducer } from '../reducers/screenReducer';
import { serviciosReducer } from '../reducers/serviciosReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  home: homeReducer,
  servicios: serviciosReducer,
  screen: screenReducer,
  admin: adminReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
