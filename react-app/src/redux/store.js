import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import user from './user/reducer';
import ui from './ui/reducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  user,
  ui,
});

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeEnhancers(applyMiddleware(thunk))
);
