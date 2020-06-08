import { all } from "redux-saga/effects";

import { watchResults } from "./results";
import { watchFavourites } from "./favourites";

export const rootSaga = function* root() {
  yield all([watchResults(), watchFavourites()]);
};
