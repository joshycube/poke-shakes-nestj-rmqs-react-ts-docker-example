import React, { Fragment } from "react";

import ResultsRender from "./render";

import { IPokemon } from "../../interfaces/IPokemon";

interface IProps {
  searchResults: IPokemon[];
  favourites: IPokemon[];
  onFavouriteAdd: (item: IPokemon) => void;
  onFavouriteRemove: (id: string) => void;
}

function ResultsComponent({
  searchResults,
  favourites,
  onFavouriteAdd,
  onFavouriteRemove,
}: IProps) {

  const isFavourite = (item: IPokemon): boolean => favourites.some(
    (favItem: IPokemon) => favItem._id === item._id
  );

  const handleFavourite = (item: IPokemon): void => {
    const isFav = isFavourite(item);

    if (isFav) {
      onFavouriteRemove(item._id);
    } else {
      onFavouriteAdd(item);
    }
  };

  return (
    <Fragment>
      {!!searchResults.length && searchResults.map((result: IPokemon) => (
        <ResultsRender
          handleFavourite={handleFavourite}
          key={result._id}
          result={result}
          messageId={isFavourite(result) ? 'removefromfavs' : 'addtofavs'}
        />
      ))}
    </Fragment>
  );
}

export default ResultsComponent;
