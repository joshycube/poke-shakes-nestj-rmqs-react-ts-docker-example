import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  FAV_ADD_START,
  FAV_ADD_DONE,
  FAV_ADD_FAILED,
  FAV_FETCH,
  FAV_REMOVE_START,
  FAV_REMOVE_DONE,
  FAV_REMOVE_FAILED,
} from "../actions";

import { IAction } from "../../interfaces/IAction";
import { IPokemon } from "../../interfaces/IPokemon";

const STORAGE_KEY = "pokeshakes_favourites";

function manipulateStorage(action: IAction) {
  const storedFavourites: any = localStorage.getItem(STORAGE_KEY);
  let storedFavouritesArray = JSON.parse(storedFavourites) || [];

  if (action.type === FAV_ADD_START) {
    const isAddedAlready = storedFavouritesArray.some(
      (item: IPokemon) => item._id === action.payload._id
    );

    if (!isAddedAlready) {
      storedFavouritesArray.push(action.payload);
    }
  }

  if (action.type === FAV_REMOVE_START) {
    storedFavouritesArray = storedFavouritesArray.filter(
      (item: IPokemon) => item._id !== action.payload
    );
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedFavouritesArray));

  return storedFavouritesArray;
}

function* fetchFavourites() {
  const storedFavourites: any = localStorage.getItem(STORAGE_KEY);
  const storedFavouritesArray = JSON.parse(storedFavourites) || [];
  yield put({ type: FAV_ADD_DONE, payload: storedFavouritesArray });
}

function* addFavourite(action: IAction) {
  try {
    const storedFavouritesArray = yield call(manipulateStorage, action);
    yield put({ type: FAV_ADD_DONE, payload: storedFavouritesArray });
  } catch (error) {
    yield put({ type: FAV_ADD_FAILED, payload: { error: error.message } });
  }
}

function* removeFavourite(action: IAction) {
  try {
    yield call(manipulateStorage, action);
    yield put({ type: FAV_REMOVE_DONE, payload: action.payload });
  } catch (error) {
    yield put({ type: FAV_REMOVE_FAILED, payload: { error: error.message } });
  }
}

export function* watchFavourites() {
  yield takeEvery(FAV_ADD_START, addFavourite);
  yield takeEvery(FAV_REMOVE_START, removeFavourite);
  yield takeLatest(FAV_FETCH, fetchFavourites);
}
