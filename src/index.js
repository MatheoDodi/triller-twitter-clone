import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './reducers';
import middleware from './middleware';

store = createStore(combineReducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))