import React from 'react';
import { Router } from '@reach/router';
import { pages } from '@constants';
import { IPagesShape } from 'constants/pages';

const RenderPages = (p: IPagesShape[]) =>
  p.map(({ Component, ...rest }) => <Component {...rest} />);

export default function RouterComponent() {
  return <Router>{RenderPages(pages)}</Router>;
}
