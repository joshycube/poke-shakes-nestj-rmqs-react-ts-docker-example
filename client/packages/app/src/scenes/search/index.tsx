import React, { Fragment } from "react";

import MainLayout from "../../layouts/main";
import { SearchContainer } from "../../components/search";
import { ResultsContainer } from "../../components/results";
import { StyledFlexColumnWrapper } from "../../components/styled/flexColumnWrapper";
import { StyledLayoutHeader } from "./styles";

function SearchScene() {
  return (
    <MainLayout>
      <Fragment>
        <StyledFlexColumnWrapper>
          <StyledLayoutHeader>
            <SearchContainer />
          </StyledLayoutHeader>
          <ResultsContainer />
        </StyledFlexColumnWrapper>
      </Fragment>
    </MainLayout>
  );
}

export default SearchScene;
