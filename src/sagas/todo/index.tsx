import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Axios from 'axios';
import { todoActions } from '@actions';
import { TODO_REQUEST, TODO_CREATE } from '@constants';
import { ITodoData } from 'reduxTypes';

function* handleFetch() {
  try {
    const res = yield call(Axios, '/api/todo', {
      method: 'GET'
    });
    if (res.error) {
      yield put(todoActions.fetchError(res.error));
    } else {
      yield put(todoActions.fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoActions.fetchError(err.stack!));
    } else {
      yield put(todoActions.fetchError('Unexpected error'));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(TODO_REQUEST, handleFetch);
}

function* handlePost({ payload }: { payload: ITodoData }) {
  try {
    const res = yield call(Axios, '/api/todo', {
      method: 'POST',
      data: payload
    });
    if (res.error) {
      yield put(todoActions.postError(res.error));
    } else {
      yield put(todoActions.postSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoActions.postError(err.stack!));
    } else {
      yield put(todoActions.postError('Unexpected error'));
    }
  }
}

function* watchPostRequest() {
  yield takeEvery(TODO_CREATE, handlePost);
}

function* todoSaga() {
  yield all([fork(watchFetchRequest), fork(watchPostRequest)]);
}

export default todoSaga;
