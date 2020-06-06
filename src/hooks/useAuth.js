import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

const useAuth = () => {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setUserAuth(user);
        localStorage.setItem('auth', user.l);
      } else {
        setUserAuth(null);
        localStorage.removeItem('auth');
      }
    });

    return () => unsubscribe();
  }, [userAuth]);

  return userAuth;
};

export default useAuth;
