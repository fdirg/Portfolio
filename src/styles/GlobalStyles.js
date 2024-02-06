import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --black-color: #232625;
    --green-color: #35403A;
    --2nd-green-color: #4D5950;
    --gray-color: #A3A69C;
    --white-color: #BFBFB8;
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
    background: var(--black-color);
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
