import styled, { keyframes } from "styled-components";

export const Ul = styled.ul`
  display: flex;
`;

export const A = styled.a`
  position: relative;
  padding: 7px;
  color: ${(props) => props.theme.colors.text2};
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.text1};
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 7px;
    height: 2px;
    width: 0;
    background-color: var(2);
    transition: 0.4s;
  }
  &:hover::after {
    width: calc(100% - 14px);
  }
`;
