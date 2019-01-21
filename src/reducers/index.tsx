import { combineReducers } from 'redux';
import { IApplicationState } from 'reduxTypes';
import todo from './todo';

const rootReducer = combineReducers<IApplicationState>({
  todo
});


export default rootReducer;