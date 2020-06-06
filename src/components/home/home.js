import React, { useContext } from 'react'
import { ContextFirebase } from '../../firebase';

const Home = ({ history }) => {
  const contextFirebase = useContext(ContextFirebase);
  const { firebase } = contextFirebase;
  
  function logOut() {
    firebase.logOut();
    history.replace('/login')
  }

  return (
    <div>
      home
      <button className="btn" onClick={logOut}>logout</button>
    </div>
  )
}

export default Home;
