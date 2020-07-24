import { createGlobalStyle } from 'styled-components';

import '@brainhubeu/react-carousel/lib/style.css';

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

    padding: 0 3rem;
    background: ${props => props.theme.colors.background};

    ::-webkit-scrollbar {
      display: none;
    }
  }

  body, html, #root {
    min-height: 100vh;
  }

  body, button, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
  }

  button, a {
    cursor: pointer;
  }

  input {
    cursor: text;
  }

  button, input {
    border: 0;
    background: none;
  }
`;
