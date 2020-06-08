import { combineReducers } from "redux";

import { resultsReducer } from "./results";
import { favouritesReducer } from "./favourites";

import { IPokemon } from "../../interfaces/IPokemon";

export interface IState {
  results: IPokemon[];
  favourites: IPokemon[];
}

export default combineReducers<IState>({
  results: resultsReducer,
  favourites: favouritesReducer,
});
