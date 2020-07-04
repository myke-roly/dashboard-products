import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import history from './libs/history';
import Login from './page/login/login';
import Home from './page/home/home';
import NotFound from './page/404/NotFound';
import ChatBoot from './page/chat/Chat'
import ProtectedRouter from './libs/protectedRouter';

const App = () => {
  // eslint-disable-next-line
  const [auth, setAuth] = useState(localStorage.getItem('auth') || null);
  
  useEffect(() => {
    if(history.location.pathname === '/login' && auth) {
        history.replace('/');
    } 
  }, [auth]);

  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <ProtectedRouter exact path="/" auth={auth} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/chat" component={ChatBoot} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
