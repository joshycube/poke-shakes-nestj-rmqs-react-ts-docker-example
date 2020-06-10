import { IPokemon } from "../interfaces/IPokemon";
import { IAction } from "../interfaces/IAction";
import { INotFound } from "../interfaces/INotFound";

export const SEARCH_START = "SEARCH_START";
export const SEARCH_DONE = "SEARCH_DONE";
export const SEARCH_FAILED = "SEARCH_FAILED";
export const SEARCH_NOT_FOUND = "SEARCH_NOT_FOUND";

export const FAV_FETCH = "FAV_FETCH";
export const FAV_ADD_START = "FAV_ADD_START";
export const FAV_ADD_DONE = "FAV_ADD_DONE";
export const FAV_ADD_FAILED = "FAV_ADD_FAILED";

export const FAV_REMOVE_START = "FAV_REMOVE_START";
export const FAV_REMOVE_DONE = "FAV_REMOVE_DONE";
export const FAV_REMOVE_FAILED = "FAV_REMOVE_FAILED";

export function searchStart(name: string): IAction {
  return {
    type: SEARCH_START,
    payload: name,
  };
}

export function searchDone(payload: IPokemon): IAction {
  return {
    type: SEARCH_DONE,
    payload,
  };
}

export function searchFailed(payload: string): IAction {
  return {
    type: SEARCH_FAILED,
    payload,
  };
}

export function searchNotFound(payload: INotFound): IAction {
  return {
    type: SEARCH_NOT_FOUND,
    payload,
  };
}

export function favAddStart(item: IPokemon): IAction {
  return {
    type: FAV_ADD_START,
    payload: item,
  };
}

export function favAddDone(payload: IPokemon[]): IAction {
  return {
    type: FAV_ADD_DONE,
    payload,
  };
}

export function favAddFailed(payload: string): IAction {
  return {
    type: FAV_ADD_FAILED,
    payload,
  };
}

export function favFetch(): IAction {
  return {
    type: FAV_FETCH,
    payload: {},
  };
}

export function favRemoveStart(id: string): IAction {
  return {
    type: FAV_REMOVE_START,
    payload: id,
  };
}

export function favRemoveDone(payload: IPokemon[]): IAction {
  return {
    type: FAV_REMOVE_DONE,
    payload,
  };
}

export function favRemoveFailed(payload: string): IAction {
  return {
    type: FAV_REMOVE_FAILED,
    payload,
  };
}
