import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import Axios from "axios";
import { todoActions } from "@actions";
import { TODO_REQUEST } from "@constants";

function* handleFetch() {
  try {
    const res = yield call(Axios, "data.json");
    if (res.error) {
      yield put(todoActions.fetchError(res.error));
    } else {
      yield put(todoActions.fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(todoActions.fetchError(err.stack!));
    } else {
      yield put(todoActions.fetchError("Unexpected error"));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(TODO_REQUEST, handleFetch);
}

function* todoSaga() {
  yield all([fork(watchFetchRequest)])
}


export default todoSaga;