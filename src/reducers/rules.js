import {RULE_ADDED, RULE_TEXT_UPDATED} from "../constants/actionTypes";

const defaultState = {rules: []};
export default function (state = defaultState, action) {
  console.log('I am reducer');
  switch (action.type) {
    case RULE_ADDED:
      state.rules.push(action.ruleText ? action.ruleText : '');
      return {
        ...state,
        rules: [...state.rules]
      };
    case RULE_TEXT_UPDATED:
      console.log('new value is: '+action.payload);
      return{...state, ruleText: action.payload};
  }
  return state;
}