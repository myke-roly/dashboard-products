import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import history from './libs/history';
import Login from './page/login/login';
import Home from './page/home/home';
import NotFound from './page/404/NotFound';
import ChatBoot from './page/chat/Chat'

import {  firebase } from './firebase';

const App = () => {
  const [auth, setAuth] = useState(JSON.stringify(localStorage.getItem('auth')) === 'null' ? false : true);
  
  useEffect(() => {
    firebase.auth.onAuthStateChanged(user => {
      if(user) setAuth(true);
      else setAuth(false)
    })
  }, [auth]);

  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={!auth ? Login : Home} />
          <Route path="/chat" component={ChatBoot} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
