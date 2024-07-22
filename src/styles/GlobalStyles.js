import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --bg-color: #1c1f22;
    --title-color: #f1bd55;
    --white-color: #f5f5f5;
    --2nd-white: #b5b5b5;
    --gray-color: #373d43;
    --2nd-gray: #707070;
    --blue-color: #76e1ff;
    --2nd-blue: #35BEF8;
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
`;
