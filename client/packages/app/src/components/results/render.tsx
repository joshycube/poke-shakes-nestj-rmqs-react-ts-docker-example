import React from "react";
import { FormattedMessage } from 'react-intl'

import { IPokemon } from "../../interfaces/IPokemon";

import { StyledButton } from "../styled/button";
import { StyledParagraph } from "./style";

interface IProps {
  result: IPokemon;
  handleFavourite: (item: IPokemon) => void;
  messageId: string
}

function ResultsRender({ result, handleFavourite, messageId }: IProps) {
  return (
    <div>
      <h2>{result.name}</h2>
      <StyledButton onClick={() => handleFavourite(result)}>
        <FormattedMessage id={messageId} />
      </StyledButton>
      <StyledParagraph>{result.description}</StyledParagraph>
    </div >
  );
}

export default ResultsRender;
