import React, { ReactChild } from "react";

import { FavouritesContainer } from "../../components/favourites";
import { ErrorContainer } from '../../components/error'

import { StyledFlexColumnWrapper } from "../../components/styled/flexColumnWrapper";
import { StyledFlexWrapper } from "../../components/styled/flexWrapper";

import { StyledLayoutFooter, StyledErrorWrapper } from "./style";

interface IProps {
  children: ReactChild;
}

function MainLayout({ children }: IProps) {
  return (
    <StyledFlexColumnWrapper>
      <header>
        <h1>Pokemon search</h1>
      </header>
      <div>
        <main>{children}</main>
      </div>
      <StyledLayoutFooter>
        <footer>
          <StyledErrorWrapper>
            <ErrorContainer />
          </StyledErrorWrapper>
          <StyledFlexWrapper>
            <FavouritesContainer />
          </StyledFlexWrapper>
        </footer>
      </StyledLayoutFooter>
    </StyledFlexColumnWrapper>
  );
}

export default MainLayout;
