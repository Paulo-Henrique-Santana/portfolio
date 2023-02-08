import styled, { keyframes } from "styled-components";

export const Ul = styled.ul`
  display: flex;
`;

const hoverLink = keyframes`
  from {
    width: 1px;
  }
  to {
    width: calc(100% - 14px);
  }
`;

export const A = styled.a`
  position: relative;
  padding: 7px;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.linkHover};
  }
  &.active {
    color: ${(props) => props.theme.colors.linkHover};
  }
  ::after {
    content: "";
    height: 2px;
    position: absolute;
    bottom: 1px;
    left: 7px;
    background-color: var(--color2);
  }
  &.active::after {
    width: calc(100% - 14px);
    animation: ${hoverLink} 0.5s forwards;
  }
`;
