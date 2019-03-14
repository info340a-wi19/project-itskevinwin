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
  apiKey: "AIzaSyABpPJt8TBc2SM4iw1N58tGnWYbMmxXJfg",
  authDomain: "moviepicksthree.firebaseapp.com",
  databaseURL: "https://moviepicksthree.firebaseio.com",
  projectId: "moviepicksthree",
  storageBucket: "moviepicksthree.appspot.com",
  messagingSenderId: "734003013996"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
