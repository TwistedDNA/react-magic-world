import React from 'react';
import ReactDOM from 'react-dom';
import './styles/baseline.css';
import './styles/index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import registerServiceWorker from './components/registerServiceWorker';
import {createStore} from 'redux';
import allReducers from './reducers';
import defaultState from "./reducers/defaultState";

const store = createStore(allReducers,defaultState());
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
