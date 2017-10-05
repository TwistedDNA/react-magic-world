import reducer from './reducers';
import {createStore} from "redux";
import defaultState from "./reducers/defaultState";

export const store = createStore(reducer,defaultState());
