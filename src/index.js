import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type){

        default:
            return state;
    }
}


const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);