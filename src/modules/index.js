import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({ counter, sample });

export default rootReducer;
