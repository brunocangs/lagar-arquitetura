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
        <Router>
          <Provider store={store}>
            <Routes />
          </Provider>
        </Router>
      </ThemeProvider>
    );
  }
}

const lagarTheme = {
  primary: '#000',
  gray: '#dcdcdc',
  secondary: '#7d9157',
  white: '#FFF'
};