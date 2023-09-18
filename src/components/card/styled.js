import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content:center;
  transition: all 0.3s ease;
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

  &:hover {
    opacity: 0.5;
    transition: opacity 0.5s ease;
  }
`;

export const InfoContainer = styled.div`
  opacity: 0;
  margin-left: 120px;
  width: 600px;
`;

export const Info = styled.div`
  font-size: 27px;
  font-weight: bold;
  color: #0e4791;
  margin-bottom: 20px;
`;

export const CardText = styled.div`

`;
