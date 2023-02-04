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
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
