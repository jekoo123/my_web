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
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding-left: 10vw;
  padding-right:20vw;
  transition: all 0.3s ease;
  text-decoration:none;

  
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.4);
  background: ${(props) => {
    switch (props.colorKey) {
      case 0:
        return "linear-gradient(to bottom, #EBFFE7, #D1FFC7)";
      case 1:
        return "linear-gradient(to right, #DCFFFE,#B7FFFA )";
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
