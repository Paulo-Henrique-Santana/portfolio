import styled, { keyframes } from "styled-components";
import Nav from "../Nav";

const show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledNav = styled(Nav)`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${show} 0.3s;
  &[data-active="true"] {
    display: block;
  }
  ul {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 100%;
    height: 100%;
  }
  a {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text1};
  }
`;
