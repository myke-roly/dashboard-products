import React, { useContext, useState, useCallback } from 'react';
import { ContextFirebase } from '../../firebase';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

const Home = ({ history }) => {
  const contextFirebase = useContext(ContextFirebase);
  const { firebase, user } = contextFirebase;

  const [showSidebar, setShowSidebar] = useState(false);

  function logOut() {
    firebase.logOut();
    history.replace('/login');
  }

  const handleShowSidebar = useCallback(() => {
      setShowSidebar(!showSidebar);
    }, [showSidebar]);

  return (
    <div>
      {showSidebar && <Sidebar />}
      <Header logOut={logOut} showSidebar={handleShowSidebar} user={user} />
    </div>
  );
};

export default Home;
