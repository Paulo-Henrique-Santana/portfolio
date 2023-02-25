import styled from "styled-components";
import Container from "../../Container";
import Nav from "../../Nav";

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 25px 0;
  width: 100%;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 30%);
  background-color: ${(props) => props.theme.colors.background1};
  @media (max-width: 390px) {
    padding: 15px 0;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.span`
  padding: 0 15px;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text1};
  span {
    position: relative;
  }
  span:first-of-type::before {
    content: "{ ";
    color: ${(props) => props.theme.colors.secundary};
    position: absolute;
    left: -15px;
    top: -2px;
  }
  span:last-of-type::after {
    content: " }";
    color: ${(props) => props.theme.colors.secundary};
    position: absolute;
    right: -15px;
    top: -2px;
  }
  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledNav = styled(Nav)`
  ul {
    gap: 15px;
  }

  a {
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MenuMobile = styled.span`
  border-top: 2px solid;
  width: 20px;
  cursor: pointer;
  &[data-active="true"] {
    border-top-color: transparent;
  }
  &::after,
  &::before {
    content: "";
    display: block;
    margin-top: 5px;
    width: 20px;
    height: 2px;
    background-color: currentColor;
    position: relative;
    transition: 0.3s;
  }
  &[data-active="true"]::before {
    transform: rotate(135deg);
  }
  &[data-active="true"]::after {
    transform: rotate(-135deg);
    top: -7px;
  }
  @media (min-width: 801px) {
    display: none;
  }
`;
