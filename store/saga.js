/* global fetch */

import { delay } from "redux-saga";
import { all, call, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";

import { loadDataSuccess, failure } from "./menuReducer";

import { getData } from "../services";

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const data = yield getData();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest("menu/LOAD_DATA", loadDataSaga)]);
}

export default rootSaga;
