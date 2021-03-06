import React from "react";
import { FormattedMessage } from 'react-intl'

import { IPokemon } from "../../interfaces/IPokemon";

import { StyledButton } from "../styled/button";

interface IProps {
  favourite: IPokemon;
  handleFavourite: (id: string) => void;
}

function FavouritesRender({ favourite, handleFavourite }: IProps) {
  return (
    <div data-test-id="favourite-item-wrapper">
      <h2>{favourite.name}</h2>
      <StyledButton data-test-id="remove-favourite" onClick={() => handleFavourite(favourite._id)}>
        <FormattedMessage id="remove" />
      </StyledButton>
    </div>
  );
}

export default FavouritesRender;
