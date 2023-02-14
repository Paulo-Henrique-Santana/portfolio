import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color1: #e5e5e5;
    --color2: #70e000;
    --color3: #14080e;
  }
  
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

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
