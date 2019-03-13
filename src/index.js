import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; 

var config = {
    apiKey: "AIzaSyDnK8Sh8DPnq38Nd97FgSSFVVqandtSt2s",
    authDomain: "moviepicks-5b9b0.firebaseapp.com",
    databaseURL: "https://moviepicks-5b9b0.firebaseio.com",
    projectId: "moviepicks-5b9b0",
    storageBucket: "moviepicks-5b9b0.appspot.com",
    messagingSenderId: "740129038357"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
