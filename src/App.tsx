import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, LanguageWrap,  } from '@components';
import { setupStore, init } from '@utils';
// import { LanguageContext } from '@context';
// import { I18nProvider } from '@lingui/react';

import './App.css';
init();
const store = setupStore();

class App extends Component {
  // state = {
  //   language: Languages.en,
  // };
  render() {
    // const { language } = this.state;
    return (
      <LanguageWrap>
        <Provider store={store}>
          <Router />
        </Provider>
      </LanguageWrap>
    );
  }
}

export default App;
