import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContextFirebase } from '../../firebase';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Sidebar from '../../components/sidebar/sidebar';

const Home = ({ history }) => {
  const contextFirebase = useContext(ContextFirebase);
  const { firebase, user } = contextFirebase;

  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  function logOut() {
    firebase.logOut();
    history.replace('/login');
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
