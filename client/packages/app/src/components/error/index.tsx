import { connect } from "react-redux";

import ErrorComponent from "./component";

import { IState } from "../../redux/reducers";


const mapStateToProps = (state: IState) => {
  return {
    errors: state.errors,
  };
};

export const ErrorContainer = connect(
  mapStateToProps,
)(ErrorComponent);
