import { SEARCH_DONE, SEARCH_NOT_FOUND, SEARCH_START } from "../actions";
import { IAction } from "../../interfaces/IAction";
import { IPokemon } from "../../interfaces/IPokemon";

export const resultsReducer = (state: IPokemon[] = [], action: IAction) => {
  switch (action.type) {
    case SEARCH_START:
      return []
    case SEARCH_NOT_FOUND:
      return []
    case SEARCH_DONE:
      return [action.payload];
  }
  return state;
};
