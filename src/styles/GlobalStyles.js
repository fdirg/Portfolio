import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --bg-color: #1c1f22;
    --title-color: #f1bd55;
    --white-color: #f5f5f5;
    --gray-color: #373d43;
    --2nd-gray-color: #f8f9fa;
    --orange-color: #ff9e00;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Work Sans", sans-serif;
}

  html{
    scroll-behavior: smooth;
  }

    body {
    background: var(--bg-color);
    color: var(--white-color);
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    }

    a {
       text-decoration: none;
       color: var(--white-color);
    }

    li {
    list-style: none;
    }

`;
