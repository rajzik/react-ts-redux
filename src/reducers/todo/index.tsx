import { Reducer } from 'redux';
import {
  TODO_REQUEST,
  TODO_ERROR,
  TODO_SUCCESS,
  TODO_CREATE,
  TODO_CREATE_ERROR,
  TODO_CREATE_SUCCESS
} from '@constants';
import { ITodoState } from 'reduxTypes';

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
    default:
      return state;
  }
};

export default reducer;
