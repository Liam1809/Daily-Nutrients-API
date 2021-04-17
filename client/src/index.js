// Connecting react application to html file

//  axios: API requests
// moment: time and date lib
// react - file - base64: converting images
// redux, redux - thunk: asynchorous function using redux

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App.js';
import reducers from './reducers/index.js';

import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// connect to div of Id of root
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);