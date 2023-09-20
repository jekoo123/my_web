import React, { FC } from "react";
import {
  Container,
  StyledImg,
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
      {id === 0 && (
        <StyledImg src='/resume.png' alt="writing_resume"/>
      )}
      <CardText>{name}</CardText>
      <InfoContainer>
        <Info>{name}</Info>
        <Info>{discription}</Info>
      </InfoContainer>
    </Container>
  );
};
