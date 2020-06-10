import { combineReducers } from "redux";

import { resultsReducer } from "./results";
import { favouritesReducer } from "./favourites";
import { errorsReducer } from "./errors";

import { IPokemon } from "../../interfaces/IPokemon";
import { IError } from "../../interfaces/IError";

export interface IState {
  results: IPokemon[];
  favourites: IPokemon[];
  errors: IError[],
}

export default combineReducers<IState>({
  results: resultsReducer,
  favourites: favouritesReducer,
  errors: errorsReducer
});
