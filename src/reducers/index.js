import {combineReducers} from 'redux';
import RuleReducer from './reducer-rule';

export const allReducers = combineReducers({
  rules: RuleReducer
});