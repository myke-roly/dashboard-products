import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import FirebaseContext from './firebase/firebaseContext';

ReactDOM.render(
  <FirebaseContext>
    <App />
  </FirebaseContext>,
  document.getElementById('root')
);
