import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #e50914;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;