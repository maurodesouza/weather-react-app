import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    cursor: default;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;

    padding: 0 3rem 3rem;
  }

  body, html, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--dark);
  }

  button, a {
    cursor: pointer;
  }

  input {
    cursor: text;
  }

  :root {
    --primary: #0ff;
    --dark: #333;
  }
`;
