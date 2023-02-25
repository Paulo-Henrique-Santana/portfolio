import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 7rem;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${(props) => props.theme.colors.background1};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
