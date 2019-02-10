import { Reducer } from 'redux';
import {
  TODO_REQUEST,
  TODO_ERROR,
  TODO_SUCCESS,
  TODO_CREATE,
  TODO_CREATE_ERROR,
  TODO_CREATE_SUCCESS,
  TODO_UPDATE,
  TODO_UPDATE_ERROR
} from '@constants';
import { ITodoState, ITodo } from 'reduxTypes';
import { TODO_PATCH, TODO_PATCH_SUCCESS, TODO_PATCH_ERROR, TODO_UPDATE_SUCCESS } from '../../constants/redux/index';

const DefaultState = {
  loading: false,
  data: [],
  error: undefined
};

const reducer: Reducer<ITodoState> = (
  state = DefaultState,
  { type, payload }
) => {
  switch (type) {
    case TODO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.data
      };
    case TODO_CREATE:
      return {
        ...state,
        loading: true
      };
    case TODO_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case TODO_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, payload.data]
      };

    case TODO_UPDATE:
      return {
        ...state,
        loading: true
      };
    case TODO_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case TODO_UPDATE_SUCCESS: 
      return {
        ...state,
        loading: false,
        data: state.data.map((item: ITodo) => {
          if (item._id === payload.data._id) {
            return payload.data;
          }
          return item;
        })
      };
    case TODO_PATCH:
      return {
        ...state,
        loading: true
      };
    case TODO_PATCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case TODO_PATCH_SUCCESS: 
      return {
        ...state,
        loading: false,
        data: state.data.map((item: ITodo) => {
          if (item._id === payload.data._id) {
            return payload.data;
          }
          return item;
        })
      };
    
    default:
      return state;
  }
};

export default reducer;
