import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import Axios from 'axios';
import { todoActions } from '@actions';
import { TODO_REQUEST, TODO_CREATE, TODO_UPDATE, TODO_PATCH } from '@constants';
import { ITodoData, ITodo } from 'reduxTypes';

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

function* HandlePut({ payload: { _id, ...rest } }: { payload: ITodo }) {
  try {
    const res = yield call(Axios, `/api/todo/${_id}`, {
      method: 'PUT',
      data: rest
    });
    if (res.error) {
      yield put(todoActions.putError(res.error));
    } else {
      yield put(todoActions.putSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoActions.putError(err.stack!));
    } else {
      yield put(todoActions.putError('Unexpected error'));
    }
  }
}

function* watchPutRequest() {
  yield takeEvery(TODO_UPDATE, HandlePut);
}

function* handlePatch({ payload: { _id } }: { payload: ITodo }) {
  try {
    const res = yield call(Axios, `/api/todo/${_id}`, {
      method: 'PATCH',
    });
    if (res.error) {
      yield put(todoActions.patchError(res.error));
    } else {
      yield put(todoActions.patchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoActions.patchError(err.stack!));
    } else {
      yield put(todoActions.patchError('Unexpected error'));
    }
  }
}

function* watchPatchRequest() {
  yield takeEvery(TODO_PATCH, handlePatch);
}

function* todoSaga() {
  yield all([
    fork(watchFetchRequest),
    fork(watchPostRequest),
    fork(watchPutRequest),
    fork(watchPatchRequest),
  ]);
}

export default todoSaga;
