import React, { useContext } from 'react'
import { ContextFirebase } from '../../firebase';
import Header from '../../components/header/header';

const Home = ({ history }) => {
  const contextFirebase = useContext(ContextFirebase);
  const { firebase, user } = contextFirebase;
  
  function logOut() {
    firebase.logOut();
    history.replace('/login')
  }

  return (
    <div>
      <Header logOut={logOut} user={user} />
    </div>
  )
}

export default Home;
