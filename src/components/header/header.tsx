import React, { useState } from "react";
import { Container, Nav, ExternalNav } from "./styled.ts";

export const Header: React.FC = () => {
  //nav contents : github, 자기소개, 영상
  const url = window.location.href;

  return (
    <Container>
      <ExternalNav
        href="https://github.com/jekoo123"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: url.includes("/") ? "black" : "gray",
        }}
      >
        github
      </ExternalNav>
      <Nav
        to="/"
        style={{
          color: url.includes("/") ? "black" : "gray",
        }}
      >
        Introduction
      </Nav>
      <Nav
        to="/"
        style={{
          color: url.includes("/") ? "black" : "gray",
        }}
      >
        PR
      </Nav>
    </Container>
  );
};
