import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';


export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9vh;
  box-shadow: 0 0.2rem 0.45rem rgba(0, 0, 0, 0.05);
  z-index: 2;
  position: fixed;
  background-color: white;
`;

export const NavContainer = styled.div`
  width: 21%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right:1.5vw;
`;

export const Nav = styled(Link)`
  font-size: 1vw;
  margin-right: 2vw;
  text-decoration: none;
  &:hover {
    font-size:1.1vw;
    margin-right: 1.9vw;
  }
  font-weight: bold;
  letter-spacing: 0.1vw;
`;

export const ExternalNav = styled.a`
  font-size: 1vw;
  margin-right: 2vw;
  text-decoration: none;
  color:#5C5C5C;
  &:hover {
    font-size:1.1vw;
    margin-right: 1.7vw;
    
  }
  font-weight: bold;
  letter-spacing: 0.1vw;
`;

export const StyledHomeOutlined = styled(HomeOutlined)`
  margin-left:2.8vw;
  font-size:1.9vw;
  color:grey;
  &:hover{
    color:black;
    cursor:pointer;

  }
`

export const StyledTitle = styled.div`
  font-size:1.45vw;
  font-weight:bold;
  color:#4D4D4D;
  letter-spacing:0.3vw;
  
`
export const StyledTitleContainer = styled.div`
  display:flex;
  width:24.5%;
  justify-content:space-between;
  align-items:center;

`