import React from "react";
import { FormattedMessage } from 'react-intl'

import { StyledTextInput } from "../styled/textInput";

interface IProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SearchRender({ searchInput, setSearchInput, onKeyPress }: IProps) {
  return (
    <FormattedMessage id="searchhint">
      {(placeholder: string) => (
        <StyledTextInput
          placeholder={placeholder}
          value={searchInput}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(event.target.value)
          }
          onKeyPress={onKeyPress}
        />
      )}
    </FormattedMessage>
  );
}

export default SearchRender;
