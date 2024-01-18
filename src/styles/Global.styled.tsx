import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
  margin: 0;
  font-family: 'Poppins', f-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  line-height: 1.2;
}

  a {
    text-decoration: none;
    color: ${theme.colors.font};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font}
  }

  section {
    padding: 100px 0;
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg}
  }
  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg}
  }

  p {
    font-size: 14px;
	  font-weight: 400;
    line-height: 1.4;
  }

  h3 {
    font-family: Josefin Sans, sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`