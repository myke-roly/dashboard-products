import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import history from './libs/history';
import Login from './components/login/login';
import Home from './components/home/home';
import NotFound from './components/404/NotFound';
import ProtectedRouter from './libs/protectedRouter';

const App = () => {
  const [auth] = useState(localStorage.getItem('auth') || null);
  
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
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
