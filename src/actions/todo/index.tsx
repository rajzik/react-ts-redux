import { action } from 'typesafe-actions';
import { 
  TODO_REQUEST, 
  TODO_ERROR, 
  TODO_SUCCESS, 
  TODO_CREATE, 
  TODO_CREATE_SUCCESS, 
  TODO_CREATE_ERROR, 
  TODO_UPDATE,
  TODO_UPDATE_SUCCESS,
  TODO_UPDATE_ERROR,
  TODO_PATCH,
  TODO_PATCH_ERROR,
  TODO_PATCH_SUCCESS,
} from '@constants';
import { ITodo, ITodoData } from 'reduxTypes';


export const fetchRequest = () => action(TODO_REQUEST);
export const fetchSuccess = (data: ITodo[]) => action(TODO_SUCCESS, data);
export const fetchError = (error: string) => action(TODO_ERROR, error);

export const postRequest = (data: ITodoData) => action(TODO_CREATE, data);
export const postSuccess = (data: ITodo) => action(TODO_CREATE_SUCCESS, data);
export const postError = (error: string) => action(TODO_CREATE_ERROR, error);

export const putRequest = (data: ITodo) => action(TODO_UPDATE, data);
export const putSuccess = (data: ITodo) => action(TODO_UPDATE_SUCCESS, data);
export const putError = (error: string) => action(TODO_UPDATE_ERROR, error);


export const patchRequest = (data: ITodo) => action(TODO_PATCH, data);
export const patchSuccess = (data: ITodo) => action(TODO_PATCH_SUCCESS, data);
export const patchError = (error: string) => action(TODO_PATCH_ERROR, error);

