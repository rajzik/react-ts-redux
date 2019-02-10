import TodoReducer from '../';

import {
  TODO_REQUEST,
  TODO_SUCCESS,
  TODO_ERROR
} from '../../../constants/redux';

describe('Todo reducer', () => {
  describe('Initial state', () => {
    it('should be correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = { loading: false, data: [], error: undefined };

      expect(TodoReducer(undefined, action)).toEqual(initialState);
    });
  });
  describe('request', () => {
    it('should start loading', () => {
      const action = { type: TODO_REQUEST };
      const state = { loading: true, data: [], error: undefined };
      expect(TodoReducer(undefined, action)).toEqual(state);
    });
  });
  describe('error', () => {
    it('should return error', () => {
      const action = { type: TODO_ERROR, payload: 'error' };
      const state = { loading: false, data: [], error: 'error' };
      expect(TodoReducer(undefined, action)).toEqual(state);
    });
  });

  describe('success', () => {
    it('should add data error', () => {
      const action = {
        type: TODO_SUCCESS,
        payload: {
          data: [
            {
              _id: '123456',
              text: '123456',
              done: false
            }
          ]
        }
      };
      const state = {
        loading: false,
        data: [
          {
            _id: '123456',
            text: '123456',
            done: false
          }
        ],
        error: undefined
      };
      expect(TodoReducer(undefined, action)).toEqual(state);
    });
  });
});
