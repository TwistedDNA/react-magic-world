import {RULE_ADDED, RULE_TEXT_UPDATED} from "../constants/actionTypes";
const defaultState = {rules:[],ruleText:''};
export default function (state=defaultState, action) {
    switch (action.type) {
        case RULE_ADDED:
            let newRules = state.rules;
            newRules.push(state.ruleText ? state.ruleText : '');
            return {
                ...state,
                rules: newRules,
                ruleText:''
            };
        case RULE_TEXT_UPDATED:
            return {...state, ruleText: action.value};
        default:
    }
    return state;
}