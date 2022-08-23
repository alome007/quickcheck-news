import {combineReducers} from 'redux';
import newsReducers from './newsReducer';
// import authReducers from './authReducer';

export const rootReducer = combineReducers({
  news: newsReducers,
  // user: authReducers,
});
