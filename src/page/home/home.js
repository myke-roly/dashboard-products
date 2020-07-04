import React, { useContext, useState, useCallback } from 'react';
import { ContextFirebase } from '../../firebase';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/Main';

const Home = ({ history }) => {
  const contextFirebase = useContext(ContextFirebase);
  const { firebase, user } = contextFirebase;

  const [showSidebar, setShowSidebar] = useState(true);

  function logOut() {
    firebase.logOut();
    history.replace('/login');
  }

  const handleShowSidebar = useCallback(() => {
      setShowSidebar(!showSidebar);
    }, [showSidebar]);

  return (
    <div className="home">
      {/* {showSidebar && <Sidebar />} */}
      <Sidebar />
      <div className="content">
        <Header logOut={logOut} showSidebar={handleShowSidebar} user={user} />
        <Main />
      </div>
    </div>
  );
};

export default Home;
