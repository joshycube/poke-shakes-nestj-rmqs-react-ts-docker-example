import { connect } from "react-redux";

import { favRemoveStart, favFetch } from "../../redux/actions";
import FavouritesComponent from "./component";

import { IState } from "../../redux/reducers";

const mapDispatchToProps = (dispatch: Function) => ({
  onFavouriteRemove: (id: string) => dispatch(favRemoveStart(id)),
  onFavouritesFetch: () => dispatch(favFetch()),
});

const mapStateToProps = (state: IState) => {
  return {
    favourites: state.favourites,
    loaders: state.loaders
  };
};

export const FavouritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouritesComponent);
