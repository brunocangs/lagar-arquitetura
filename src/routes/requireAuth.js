import firebase from '../firebase';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Auth from '../views/auth';

const RequireAuth = props => {
  const [user, setUser] = useState(undefined);
  firebase.auth().onAuthStateChanged(authUser => {
    setUser(authUser);
  });
  if (user === undefined) return <div>loading...</div>;
  if (!user) return <Auth />;
  else return <Route {...props} />;
};

export default RequireAuth;
