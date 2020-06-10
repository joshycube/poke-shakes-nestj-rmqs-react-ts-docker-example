import React from "react";

import { StyledErrorWrapper } from './style'
import { IError } from "../../interfaces/IError";

interface IProps {
  errorItem: IError
}

function Error({ errorItem }: IProps) {
  return (<StyledErrorWrapper>{errorItem.error}</StyledErrorWrapper>);
}

export default Error;
