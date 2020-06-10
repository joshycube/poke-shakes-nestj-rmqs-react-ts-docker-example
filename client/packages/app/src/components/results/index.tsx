import { connect } from "react-redux";

import { favAddStart, favRemoveStart } from "../../redux/actions";
import ResultsComponent from "./component";

import { IPokemon } from "../../interfaces/IPokemon";
import { IState } from "../../redux/reducers";

const mapDispatchToProps = (dispatch: Function) => ({
  onFavouriteAdd: (item: IPokemon) => dispatch(favAddStart(item)),
  onFavouriteRemove: (id: string) => dispatch(favRemoveStart(id)),
});

const mapStateToProps = (state: IState) => {
  return {
    searchResults: state.results,
    favourites: state.favourites,
    notFound: state.notFound,
  };
};

export const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsComponent);
