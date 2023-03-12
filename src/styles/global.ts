import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${(props) => props.theme.colors.background1};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body::-webkit-scrollbar {
    width: 15px;
  }
  
  body::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 8px;
    background-clip: content-box;
    background-color: ${(props) => props.theme.colors.primary};
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
