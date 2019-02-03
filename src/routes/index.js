import React from 'react';
import {Route} from 'react-router-dom';
import {Navbar} from '../components';
import Main from '../views/main';
import Project from '../views/project';
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
    <Route 
      component={(props) => <Project {...props} />}
      exact
      path={'/projeto/:id'}
    />
  </>
); 