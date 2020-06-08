import React, { useState } from "react";

import SearchRender from "./render";

interface IProps {
  onSearchStart: (name: string) => void;
}

function SearchComponent({ onSearchStart }: IProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchInput && searchInput.length > 2) {
      onSearchStart(searchInput);
    }
  };

  return (
    <SearchRender
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      onKeyPress={onKeyPress}
    />
  );
}

export default SearchComponent;
