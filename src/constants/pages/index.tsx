import { FunctionComponent } from 'react';
import { Todo, HelloPage } from '@pages';
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
    Component: Todo,
    path: '/todo',
    key: 'todo'
  },
  {
    Component: HelloPage,
    path: '/',
    key: 'index'
  }
];

export default pages;
