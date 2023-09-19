import React, { useState } from "react";
import {
  Container,
  StyledTitle,
  NavContainer,
  Nav,
  ExternalNav,
  StyledHomeOutlined,
  StyledTitleContainer,
} from "./styled.ts";

export const Header: React.FC = () => {
  //nav contents : github, 자기소개, 영상
  const url = window.location.href;

  return (
    <Container>
      <StyledTitleContainer>
        <StyledHomeOutlined />
        <StyledTitle>Jekoo's Website</StyledTitle>
      </StyledTitleContainer>

      <NavContainer>
        <ExternalNav
          href="https://github.com/jekoo123"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </ExternalNav>
        <Nav
          to="/"
          style={{
            color: url.includes("/") ? "#5C5C5C" : "#C9C9C9",
          }}
        >
          Introduction
        </Nav>
        <Nav
          to="/"
          style={{
            color: url.includes("/") ? "#5C5C5C" : "#C9C9C9",
          }}
        >
          PR
        </Nav>
      </NavContainer>
    </Container>
  );
};
