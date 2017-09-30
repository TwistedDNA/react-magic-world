import {combineReducers} from 'redux';
import tiles from "./reducers/tiles";
import rules from "./reducers/rules";

export default combineReducers({
    rulesReducer:rules,
    tilesReducer:tiles
});