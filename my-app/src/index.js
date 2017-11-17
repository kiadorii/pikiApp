import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from './SignUp';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignUp />, document.getElementById('root'));
ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
