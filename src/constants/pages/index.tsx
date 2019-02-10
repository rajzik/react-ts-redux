import { FunctionComponent, lazy } from 'react';
import { RouteComponentProps } from '@reach/router';



export interface RouteExtendedProps extends RouteComponentProps {
  [key: string]: any;
}
// FunctionComponent<RouteExtendedProps> | Component<RouteExtendedProps, any>
export interface IPagesShape {
  Component: FunctionComponent<RouteExtendedProps>;
  path: string;
  key: string;
}

const pages = [
  {
    Component: lazy(() => import('../../pages/Todo')),
    path: '/todo',
    key: 'todo'
  },
  {
    Component: lazy(() => import('../../pages/Hello')),
    path: '/',
    key: 'index'
  }
];

export default pages;
