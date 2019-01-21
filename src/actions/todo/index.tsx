import { action } from 'typesafe-actions';
import { TODO_REQUEST, TODO_ERROR, TODO_SUCCESS } from '@constants';
import { ITodo } from 'reduxTypes';


export const fetchRequest = () => action(TODO_REQUEST);
export const fetchSuccess = (data: ITodo[]) => action(TODO_SUCCESS, data);
export const fetchError = (error: string) => action(TODO_ERROR, error);
