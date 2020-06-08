import React, { Fragment, useEffect } from "react";

import FavouritesRender from "./render";

import { IPokemon } from "../../interfaces/IPokemon";

interface IProps {
  favourites: IPokemon[];
  onFavouriteRemove: (id: string) => void;
  onFavouritesFetch: () => void;
}

function FavouritesComponent({
  favourites,
  onFavouriteRemove,
  onFavouritesFetch,
}: IProps) {
  useEffect(() => {
    onFavouritesFetch();
  }, [onFavouritesFetch]);

  const handleFavourite = (id: string): void => {
    onFavouriteRemove(id);
  };

  return (
    <Fragment>
      {favourites.map((favourite: IPokemon) => (
        <FavouritesRender
          handleFavourite={handleFavourite}
          key={favourite._id}
          favourite={favourite}
        />
      ))}
    </Fragment>
  );
}

export default FavouritesComponent;
