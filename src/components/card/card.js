import React, { useState } from "react";
import {
  Container,
  CardContainer,
  CardText,
  InfoContainer,
  Info,
} from "./styled";

export const Card = (props) => {
  return (
    <Container colorKey={props.id}  to={props.route}>
      <CardText>{props.name}</CardText>
      <InfoContainer>
        <Info>{props.name}</Info>
        <Info>{props.discription}</Info>
      </InfoContainer>
    </Container>
  );
};
