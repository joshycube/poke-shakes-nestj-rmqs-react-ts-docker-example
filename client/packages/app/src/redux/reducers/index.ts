import { combineReducers } from "redux";

import { resultsReducer } from "./results";
import { favouritesReducer } from "./favourites";
import { errorsReducer } from "./errors";
import { notFoundReducer } from "./notfound";

import { IPokemon } from "../../interfaces/IPokemon";
import { IError } from "../../interfaces/IError";
import { INotFound } from "../../interfaces/INotFound";

export interface IState {
  results: IPokemon[];
  favourites: IPokemon[];
  errors: IError[],
  notFound: INotFound
}

export default combineReducers<IState>({
  results: resultsReducer,
  favourites: favouritesReducer,
  errors: errorsReducer,
  notFound: notFoundReducer,
});
