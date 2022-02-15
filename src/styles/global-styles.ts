import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
  }

  *,
  ::before,
  ::after {
    background-repeat: no-repeat;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    text-size-adjust: 100%;
  }

  html, body {
    font-size: 14px;
    color: #333;
    font-family: proxima-nova, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-decoration-skip: ink;
  }

  body {
    margin: auto;
  }

  img, svg {
    max-height: 100%;
    max-width: 100%;
  }

  a {
    color: #cb90da;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  cite {
    font-style: normal;
  }

  p {
    font-size: 1.4rem;
    line-height: 2.4rem;

    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`
