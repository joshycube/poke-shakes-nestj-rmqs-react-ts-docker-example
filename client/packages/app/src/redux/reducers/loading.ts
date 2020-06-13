import { SEARCH_NOT_FOUND, SEARCH_DONE, SEARCH_START, SEARCH_FAILED, FAV_ADD_START, FAV_REMOVE_START, FAV_FETCH, FAV_ADD_DONE, FAV_REMOVE_DONE, FAV_ADD_FAILED, FAV_REMOVE_FAILED } from "../actions";
import { IAction } from "../../interfaces/IAction";
import { ILoading } from "../../interfaces/ILoading";

export const loadingReducer = (state: {} = {}, action: IAction): ILoading => {
  switch (action.type) {
    case SEARCH_START:
      return { ...state, search: true }
    case SEARCH_FAILED:
    case SEARCH_NOT_FOUND:
    case SEARCH_DONE:
      return { ...state, search: false }
    case FAV_ADD_START:
    case FAV_REMOVE_START:
    case FAV_FETCH:
      return { ...state, favs: true }
    case FAV_ADD_DONE:
    case FAV_REMOVE_DONE:
    case FAV_ADD_FAILED:
    case FAV_REMOVE_FAILED:
      return { ...state, favs: false }
  }
  return state;
};
