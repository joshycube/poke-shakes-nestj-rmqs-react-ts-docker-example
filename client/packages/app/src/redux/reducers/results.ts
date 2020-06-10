import { SEARCH_DONE, SEARCH_NOT_FOUND } from "../actions";
import { IAction } from "../../interfaces/IAction";
import { IPokemon } from "../../interfaces/IPokemon";

export const resultsReducer = (state: IPokemon[] = [], action: IAction) => {
  switch (action.type) {
    case SEARCH_NOT_FOUND:
      return []
    case SEARCH_DONE:
      return [action.payload];
  }
  return state;
};
