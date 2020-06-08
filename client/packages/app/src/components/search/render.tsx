import React from "react";

import { StyledTextInput } from "../styled/textInput";

interface IProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SearchRender({ searchInput, setSearchInput, onKeyPress }: IProps) {
  return (
    <StyledTextInput
      placeholder="Type your favourite Pokemon"
      value={searchInput}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchInput(event.target.value)
      }
      onKeyPress={onKeyPress}
    />
  );
}

export default SearchRender;
