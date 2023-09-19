import React, { FC } from "react";
import {
  Container,
  CardText,
  InfoContainer,
  Info,
} from "./styled.ts";

interface CardProps {
  id: number;
  name: string;
  discription: string;
  route: string;
}

export const Card: FC<CardProps> = ({ id, name, discription, route }) => {
  return (
    <Container colorKey={id} to={route}>
      <CardText>{name}</CardText>
      <InfoContainer>
        <Info>{name}</Info>
        <Info>{discription}</Info>
      </InfoContainer>
    </Container>
  );
};
