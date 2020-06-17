import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRouter = ({ component: Component, auth, ...rest}) => {
  return(
    <Route
      {...rest}
      render={props => {
        if(auth) {
          return <Component {...props} />
        } else {
          return <Redirect to={{
              pathname: '/login',
              state: {
                from: props.location
            }}
          } />
        }
      }}
    />
  )
}

export default ProtectedRouter;