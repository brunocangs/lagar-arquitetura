import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider 
        theme={lagarTheme}
      >
        <Provider store={store}>
          <Router>
            <Routes />
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

const lagarTheme = {
  black: '#000',
  grey: '#dcdcdc',
  olive: '#7d9157'
};