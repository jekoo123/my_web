import React, { useState } from "react";
import { Container, CardContainer, CardText, InfoContainer, Info } from "./styled";

export const Card = (props) => {
  return (
    <Container colorKey={props.id}>
      <CardContainer to={props.route} src={props.src}>
        <CardText>{props.name}</CardText>
      </CardContainer>
      <InfoContainer>
        <Info>{props.name}</Info>
        <Info>{props.discription}</Info>
      </InfoContainer>
    </Container>
  );
};
