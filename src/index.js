import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import FirebaseContext from './firebase/firebaseContext';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext>
      <App />
    </FirebaseContext>
  </Provider>,
  document.getElementById('root')
);
