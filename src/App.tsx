import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@Components';
import { createStore } from 'redux';

import './App.css';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={}>
        <Router />
      </Provider>
    );
  }
}

export default App;
