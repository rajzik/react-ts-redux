import configureStore from 'redux-mock-store';

import * as TodoActions from '../index';

const mockStore = configureStore();
const store = mockStore();

describe('Todo Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  describe('fetch', () => {
    it('should do the request', () => {
      const ExpectedState = [{
        type: '@todo/request',
        payload: undefined,
        meta: undefined,
      }]
      store.dispatch(TodoActions.fetchRequest());
      expect(store.getActions()).toEqual(ExpectedState);
    })
    it('response should succeed', () => {
      const ExpectedState = [{
        type: '@todo/success',
        payload: [],
        meta: undefined,
      }]
      store.dispatch(TodoActions.fetchSuccess([]));
      expect(store.getActions()).toEqual(ExpectedState);
    })

    it('error should succeed', () => {
      const ExpectedState = [{
        type: '@todo/error',
        payload: 'Error',
        meta: undefined,
      }]
      store.dispatch(TodoActions.fetchError('Error'));
      expect(store.getActions()).toEqual(ExpectedState);
    })
  })

});