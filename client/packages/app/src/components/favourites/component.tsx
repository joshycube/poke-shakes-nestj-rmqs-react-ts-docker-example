import React, { Fragment, useEffect } from "react";

import FavouritesRender from "./render";
import LoaderRender from '../loader';

import { IPokemon } from "../../interfaces/IPokemon";
import { ILoading } from "../../interfaces/ILoading";

interface IProps {
  favourites: IPokemon[];
  onFavouriteRemove: (id: string) => void;
  onFavouritesFetch: () => void;
  loaders: ILoading;
}

function FavouritesComponent({
  favourites,
  onFavouriteRemove,
  onFavouritesFetch,
  loaders,
}: IProps) {
  useEffect(() => {
    onFavouritesFetch();
  }, [onFavouritesFetch]);

  const handleFavourite = (id: string): void => {
    onFavouriteRemove(id);
  };

  if (loaders && loaders.search) {
    return (
      <LoaderRender />
    )
  }


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
