import React from 'react';
import {Route} from 'react-router-dom';

export default () => (
  <>
    <Route 
      component={() => (
        <>
          <h1>This is a great h1</h1>
          <h2>This is a fantastic h2</h2>
          <h3>I love this h3</h3>
          <h4>This is a smol h4</h4>
          <h5>Even smaller</h5>
          <h6>Super little</h6>
          <p>this is some text on A P ELEMENT</p>
        </>
      )}
      exact
      path='/'
    />
  </>
); 