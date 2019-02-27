import React from 'react';
import {Route} from 'react-router-dom';
import {Navbar, NotFound, Footer} from '../components';
import Main from '../views/main';
import Project from '../views/project';
import SwitchBoundary from '../components/SwitchBoundary';

class Routes extends React.Component {
  state = {
    footer: React.createRef()
  }
  render() {
    return (
      <>
        <Route 
          component={(props) => (
            <Navbar {...props}
              footer={this.state.footer}
            />
          )}
          path='*'
        />
        <SwitchBoundary>
          <Route 
            component={Main}
            exact
            path='/'
          />
          <Route 
            component={Main}
            exact
            path='/projetos/:type?'
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
        </SwitchBoundary>
        <Route 
          component={(props) => (
            <Footer 
              {...props}
              ref={this.state.footer}
            />
          )}
          path='*'
        />
      </>
    );
  }
}

export default Routes;