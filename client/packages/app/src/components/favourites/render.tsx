import React from "react";

import { IPokemon } from "../../interfaces/IPokemon";

import { StyledButton } from "../styled/button";

interface IProps {
  favourite: IPokemon;
  handleFavourite: (id: string) => void;
}

function FavouritesRender({ favourite, handleFavourite }: IProps) {
  return (
    <div>
      <h2>{favourite.name}</h2>
      <StyledButton onClick={() => handleFavourite(favourite._id)}>
        Remove
      </StyledButton>
    </div>
  );
}

export default FavouritesRender;
