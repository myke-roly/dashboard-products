import React, { createContext } from 'react';
import firebase from './firebase';
import useAuth from '../hooks/useAuth';


export const ContextFirebase = createContext();
const FirebaseContext = ({ children }) => {
  const user  = useAuth();
  
  return (
    <ContextFirebase.Provider 
      value={{user, firebase}}
    >
      {children}
    </ContextFirebase.Provider>
  )
}

export default FirebaseContext;