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
    overflow-x: hidden;
    background-color: ${(props) => props.theme.colors.background};
    user-select: none;
  }

  #root {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
