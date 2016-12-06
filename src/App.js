import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import './App.css';
import store from './store';
import ServerView from './domain/server-view';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" components={ServerView} />
        </Router>
      </Provider>
    );
  }
}

export default App;
