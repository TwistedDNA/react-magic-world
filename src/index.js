import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import registerServiceWorker from './components/registerServiceWorker';
import {createStore} from 'redux';
import allReducers from './reducers/reducers';
import defaultState from "./reducers/defaultState";

const store = createStore(allReducers,defaultState());
ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
