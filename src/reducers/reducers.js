import {combineReducers} from 'redux';
import tiles from "./tiles";
import rules from "./rules";

export default combineReducers({
    rulesReducer:rules,
    tilesReducer:tiles
});