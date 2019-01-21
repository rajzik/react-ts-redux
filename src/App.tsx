import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@components';
import { setupStore } from '@utils';

import './App.css';

const store = setupStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
