import { FAV_ADD_DONE, FAV_REMOVE_DONE } from "../actions";
import { IAction } from "../../interfaces/IAction";
import { IPokemon } from "../../interfaces/IPokemon";

export const favouritesReducer = (state: IPokemon[] = [], action: IAction) => {
  switch (action.type) {
    case FAV_ADD_DONE:
      return action.payload;
    case FAV_REMOVE_DONE:
      const updatedState = state.filter(
        (item: IPokemon) => item._id !== action.payload
      );
      return updatedState;
  }
  return state;
};
