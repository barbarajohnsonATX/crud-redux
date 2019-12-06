import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';

const store = createStore(postReducer);
 
ReactDOM.render(
    //Provider allows you to pass the store object to any components that need to access it
    //without the need to pass props (wrap App so all all child components can get access to store)
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

 
