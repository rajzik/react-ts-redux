import { Reducer } from "redux";
import { TODO_REQUEST, TODO_ERROR, TODO_SUCCESS } from "@constants";
import { ITodoState } from "reduxTypes";


const DefaultState = {
  loading: false,
  data: [],
  error: undefined,
}

const reducer: Reducer<ITodoState> = (state = DefaultState, { type, payload }) => {
  console.log(state);
  console.log(type, payload);
  switch (type) {
    case TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      }
    default:
      return state;
  }
}

export default reducer;
