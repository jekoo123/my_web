import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:flex-end;
  height:40px;
  padding-bottom:10px;
  padding-right:30px;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
  z-index: 2;
  position: fixed;
  box-sizing: border-box;

  
`;

export const Nav = styled(Link)`
  font-size: 16px;
  margin-right: 40px;
  text-decoration:none;
  &:hover {
    text-decoration: underline;
    color: white;
  }
`;

export const ExternalNav = styled.a`
  font-size: 16px;
  margin-right: 40px;
  text-decoration:none;
  &:hover {
    text-decoration: underline;
    color: white;
  }
`;
