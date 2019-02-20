import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Navbar, NotFound, Footer} from '../components';
import Main from '../views/main';
import Project from '../views/project';
import ProjectsContainer from '../views/projects/ProjectsContainer';
export default () => (
  <>
    <Route component={Navbar}
      path='*'
    />
    <Switch>
      <Route 
        component={Main}
        exact
        path='/'
      />
      <Route 
        exact
        path='/projetos/:type?'
        render={(props) => <ProjectsContainer {...props} />}
      />
      <Route 
        component={Project}
        exact
        path={'/projeto/:id'}
      />
      <Route
        component={NotFound}
        path='*'
      />
    </Switch>
    <Route component={Footer}
      path='*'
    />
  </>
); 