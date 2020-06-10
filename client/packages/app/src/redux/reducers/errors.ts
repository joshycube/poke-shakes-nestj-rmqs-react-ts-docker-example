import { SEARCH_START, FAV_ADD_START, FAV_REMOVE_START, SEARCH_FAILED, FAV_ADD_FAILED, FAV_REMOVE_FAILED } from "../actions";
import { IAction } from "../../interfaces/IAction";
import { IError } from "../../interfaces/IError";

export const errorsReducer = (state: IError[] = [], action: IAction) => {
  switch (action.type) {
    case SEARCH_START:
      return []
    case SEARCH_FAILED:
      return [...state, action.payload]
    case FAV_ADD_START:
      return []
    case FAV_ADD_FAILED: {
      return [...state, action.payload]
    }
    case FAV_REMOVE_START:
      return []
    case FAV_REMOVE_FAILED: {
      return [...state, action.payload]
    }
  }
  return state;
};
