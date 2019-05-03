import React from 'react';
import { Route } from 'react-router-dom';
import { Navbar, NotFound, Footer } from '../components';
import Main from '../views/main';
import Project from '../views/project';
import SwitchBoundary from '../components/SwitchBoundary';
import OfficeView from '../views/office';
import Media from '../views/media';
import RequireAuth from './requireAuth';
import { Dashboard } from '../views/management';

class Routes extends React.Component {
  state = {
    footer: React.createRef()
  };
  render() {
    return (
      <>
        <Route
          component={props => (
            <Navbar
              {...props}
              footer={this.state.footer}
            />
          )}
          path="*"
        />
        <SwitchBoundary>
          <Route
            component={Main}
            exact
            path="/"
          />
          <Route
            exact
            path="/projetos/:type?"
            render={props => <Main {...props} />}
          />
          <Route
            component={Project}
            exact
            path={'/projeto/:id'}
          />
          <Route
            component={OfficeView}
            path="/escritorio"
          />
          {/* <Route
            component={Media}
            path="/midia"
          /> */}
          <RequireAuth
            component={Dashboard}
            exact
            path="/gerencia"
          />
          <Route
            component={NotFound}
            path="*"
          />
        </SwitchBoundary>
        <Route
          component={props => (
            <Footer
              {...props}
              ref={this.state.footer}
            />
          )}
          path="*"
        />
      </>
    );
  }
}

export default Routes;
