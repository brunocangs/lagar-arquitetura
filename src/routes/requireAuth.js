import firebase from '../firebase';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Auth from '../views/auth';
import { Loading } from '../components';

const RequireAuth = props => {
  const [user, setUser] = useState(undefined);
  firebase.auth().onAuthStateChanged(authUser => {
    setUser(authUser);
  });
  if (user === undefined) return <Loading />;
  if (!user) return <Auth />;
  else return <Route {...props} />;
};

export default RequireAuth;
