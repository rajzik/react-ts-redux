import { Todo, HelloPage } from '@pages';

export interface IPagesShape {
    Component: any;
    path: string;
    key: string;
}

const pages = [
    {
        Component: Todo,
        path: '/todo',
        key: 'todo',
    },
    {
        Component: HelloPage,
        path: '/',
        key: 'index',
    }
];

export default pages;
