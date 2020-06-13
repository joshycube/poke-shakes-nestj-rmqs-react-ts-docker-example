import { combineReducers } from "redux";

import { IPokemon } from "../../interfaces/IPokemon";
import { IError } from "../../interfaces/IError";
import { INotFound } from "../../interfaces/INotFound";

import { resultsReducer } from "./results";
import { favouritesReducer } from "./favourites";
import { errorsReducer } from "./errors";
import { notFoundReducer } from "./notfound";
import { loadingReducer } from "./loading";
import { ILoading } from "../../interfaces/ILoading";

export interface IState {
  results: IPokemon[];
  favourites: IPokemon[];
  errors: IError[],
  notFound: INotFound,
  loaders: ILoading,
}

export default combineReducers<IState>({
  results: resultsReducer,
  favourites: favouritesReducer,
  errors: errorsReducer,
  notFound: notFoundReducer,
  loaders: loadingReducer
});
