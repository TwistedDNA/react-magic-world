import {combineReducers} from 'redux';
import tiles from "./reducers/tiles";
import rules from "./reducers/rules";
import ghWidget from "./reducers/github-widget";

export default combineReducers({
    rulesReducer:rules,
    tilesReducer:tiles,
    githubWidgetReducer:ghWidget
});