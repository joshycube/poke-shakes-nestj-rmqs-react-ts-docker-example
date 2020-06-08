import { connect } from "react-redux";

import { searchStart } from "../../redux/actions";
import SearchComponent from "./component";

const mapDispatchToProps = (dispatch: Function) => ({
  onSearchStart: (name: string) => dispatch(searchStart(name)),
});

export const SearchContainer = connect(
  null,
  mapDispatchToProps
)(SearchComponent);
