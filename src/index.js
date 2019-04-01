//This is entry point of our Application

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import  { store } from './createStore'; 


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

//We need to wrap our App with Provider and pass the Store to the Provider


