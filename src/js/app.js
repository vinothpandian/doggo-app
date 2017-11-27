import "babel-polyfill";
import "bootstrap";
import '../css/style.scss';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise'

import Root from "./components/root";
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Root/>
    </Provider>,
    document.getElementById('react-container')
);