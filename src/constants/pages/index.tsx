import { Todo } from '@pages';

export interface IPagesShape {
    Component: any;
    path: string;
    key: string;
}

const pages = [
    {
        Component: Todo,
        path: '/',
        key: 'index',
    },
];

export default pages;
