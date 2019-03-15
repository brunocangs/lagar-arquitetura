import firebase from '../firebase';
import React from 'react';
import {Route} from 'react-router-dom';
import Auth from '../views/auth';

const RequireAuth = (props) => {
  const user = firebase.auth().currentUser;
  if (!user) return <Auth />;
  else return <Route {...props} />;
};

export default RequireAuth;