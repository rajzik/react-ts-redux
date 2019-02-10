import React, { Component, Suspense } from 'react';
import { Router } from '@reach/router';
import { pages } from '@constants';
import { IPagesShape } from 'constants/pages';
import { LanguageContext } from '@context';
import { I18n, Loading } from '@components';

const RenderPages = (p: IPagesShape[]) =>
  p.map(({ Component, ...rest }) => <Component {...rest} />);


export default class RouterComponent extends Component {
  static contextType = LanguageContext;
  render() {
    const language = this.context;
    return (
      <I18n language={language}>
        <Suspense fallback={<Loading />}>
          <Router>{RenderPages(pages)}</Router>
        </Suspense>
      </I18n>
    );
  }
}
