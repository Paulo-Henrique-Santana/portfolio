import styled from "styled-components";
import Nav from "../Header/Nav";

export const StyledNav = styled(Nav)`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
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
  }
`;
