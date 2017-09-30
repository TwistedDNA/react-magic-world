import {RULE_ADDED, RULE_TEXT_UPDATED} from "../constants/actionTypes";
const defaultState = {rules:[]};
export default function (state=defaultState, action) {
    console.log('I am reducer. My state is: ');
    console.log(state);
    switch (action.type) {
        case RULE_ADDED:
            state.rules.push(action.ruleText ? action.ruleText : '');
            console.log('on RULE_ADDED gona return:');
            console.log({
                ...state,
                rules: [...state.rules]
            });
            return {
                ...state,
                rules: [...state.rules]
            };
        case RULE_TEXT_UPDATED:
            console.log('value updates with action: ');
            console.log(action);
            return {...state, ruleText: action.payload};
        default:
    }
    return state;
}