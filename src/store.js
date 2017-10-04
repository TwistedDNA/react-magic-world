import reducer from './reducers';
import {createStore} from "redux";
import defaultState from "./reducers/defaultState";
import {REQUEST_GITHUB_DATA} from "./constants/actionTypes";

export const store = createStore(reducer,defaultState());

store.dispatch({type: REQUEST_GITHUB_DATA});

