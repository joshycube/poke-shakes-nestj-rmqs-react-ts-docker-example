import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { SEARCH_DONE, SEARCH_FAILED, SEARCH_START, SEARCH_NOT_FOUND } from "../actions";
import { API_URI } from '../../config'

import { IAction } from "../../interfaces/IAction";

function* fetchResults(action: IAction) {
  try {
    const keyword = action.payload.replace(/[\W_]+/g, "").toLowerCase();
    const response = yield call(
      axios.get,
      `${API_URI}/pokemon/${keyword}`
    );
    yield put({ type: SEARCH_DONE, payload: response.data });
  } catch (error) {
    if (error?.response?.data?.statusCode === 404) {
      yield put({
        type: SEARCH_NOT_FOUND, payload: {
          subject: action.payload,
          status: 404,
          message: error.response.data.message
        }
      });
    }
    yield put({ type: SEARCH_FAILED, payload: { error: error.message } });
  }
}

export function* watchResults() {
  yield takeLatest(SEARCH_START, fetchResults);
}
