import { action } from 'typesafe-actions';
import { 
  TODO_REQUEST, 
  TODO_ERROR, 
  TODO_SUCCESS, 
  TODO_CREATE, 
  TODO_CREATE_SUCCESS, 
  TODO_CREATE_ERROR 
} from '@constants';
import { ITodo, ITodoData } from 'reduxTypes';


export const fetchRequest = () => action(TODO_REQUEST);
export const fetchSuccess = (data: ITodo[]) => action(TODO_SUCCESS, data);
export const fetchError = (error: string) => action(TODO_ERROR, error);

export const postRequest = (data: ITodoData) => action(TODO_CREATE, data);
export const postSuccess = (data: ITodo) => action(TODO_CREATE_SUCCESS, data);
export const postError = (error: string) => action(TODO_CREATE_ERROR, error);
