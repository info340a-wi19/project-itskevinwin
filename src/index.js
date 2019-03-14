import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; 

var config = {
  apiKey: "AIzaSyDYb_OnH19V9cnXIkc3oXstxaUKPaX0nHg",
  authDomain: "moviepickstwo.firebaseapp.com",
  databaseURL: "https://moviepickstwo.firebaseio.com",
  projectId: "moviepickstwo",
  storageBucket: "",
  messagingSenderId: "640613003276"
};
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
