import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: 'helvetica-neue-medium', sans-serif;
    box-sizing: content-box !important;
  }

  body {
    scrollbar-gutter: stable;
    
  }

  html, body {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0px;
    margin: 0px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
`;