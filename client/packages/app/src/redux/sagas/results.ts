import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { SEARCH_DONE, SEARCH_FAILED, SEARCH_START } from "../actions";

import { IAction } from "../../interfaces/IAction";

function* fetchResults(action: IAction) {
  try {
    const response = yield call(
      axios.get,
      `http://localhost:5000/pokemon/${action.payload}`
    );
    yield put({ type: SEARCH_DONE, payload: response.data });
  } catch (error) {
    yield put({ type: SEARCH_FAILED, payload: error.message });
  }
}

export function* watchResults() {
  yield takeLatest(SEARCH_START, fetchResults);
}
