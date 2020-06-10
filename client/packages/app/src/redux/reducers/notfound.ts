import { SEARCH_NOT_FOUND, SEARCH_DONE } from "../actions";
import { IAction } from "../../interfaces/IAction";
import { INotFound } from "../../interfaces/INotFound";

export const notFoundReducer = (state: INotFound = {}, action: IAction): INotFound => {
  switch (action.type) {
    case SEARCH_DONE:
      return {}
    case SEARCH_NOT_FOUND:
      return action.payload
  }
  return state;
};
