import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    width: 100%;
    background-color: #121214;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
  }
`;
