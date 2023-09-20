import styled from "styled-components";
import { Link } from "react-router-dom";

interface ContainerProps {
  colorKey: number;
}

export const InfoContainer = styled.div`
  opacity: 0;
  margin-left:10vw;
  width: 600px;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: translateY(20px);
`;


export const Container = styled(Link)<ContainerProps>`
  height: 30vh;
  width:70%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding-left: 5vw;
  padding-right:20vw;
  transition: all 0.3s ease;
  text-decoration:none;
  margin-bottom:1vh;
  
  background: ${(props) => {
    switch (props.colorKey) {
      case 0:
        return "linear-gradient(to bottom, white, #E3FFFE)";
      case 1:
        return "linear-gradient(to right, white, white)";
      case 2:
        return "linear-gradient(to top left, white, #C9FFCF, white)";
      default:
        return "linear-gradient(to top left, #d8ffe4, #b3e6cc, white)";
    }
  }};



  &:hover{
    opacity: 1;
    transition: opacity 0.5s ease;
    ${InfoContainer} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


export const StyledImg = styled.img`
  width:10vw;
  margin-right:3vw;
`


export const Info = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
  color: #0e4791;
`;

export const CardText = styled.div`
  font-size:2vw;
  font-style:italic;
  font-weight:bold;
  color:black;
`;
