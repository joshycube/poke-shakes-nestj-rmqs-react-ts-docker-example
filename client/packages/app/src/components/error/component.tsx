import React, { Fragment } from "react";

import ErrorRender from "./render";

import { IError } from "../../interfaces/IError";

interface IProps {
  errors: IError[]
}

function ErrorComponent({ errors }: IProps) {
  return <Fragment>{errors.map((error: IError) => <ErrorRender key={error.toString()} errorItem={error} />)}</Fragment>
}

export default ErrorComponent;
