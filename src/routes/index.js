import React from 'react';
import {Route} from 'react-router-dom';
import {Navbar} from '../components';
import Main from '../views/main';

export default () => (
  <>
    <Route component={Navbar}
      path='*'
    />
    <Route 
      component={Main}
      exact
      path='/'
    />
  </>
); 