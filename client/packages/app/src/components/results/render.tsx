import React from "react";

import { IPokemon } from "../../interfaces/IPokemon";

import { StyledButton } from "../styled/button";
import { StyledParagraph } from "./style";

interface IProps {
  result: IPokemon;
  handleFavourite: (item: IPokemon) => void;
}

function ResultsRender({ result, handleFavourite }: IProps) {
  return (
    <div>
      <h2>{result.name}</h2>
      <StyledButton onClick={() => handleFavourite(result)}>
        Add to favourites
      </StyledButton>
      <StyledParagraph>{result.description}</StyledParagraph>
    </div>
  );
}

export default ResultsRender;
