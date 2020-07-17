import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #e50914;
    --dark-gray: #333333;
    --text-gray: #8C8C8C;
    --color-gray: #B3b3b3;
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
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    padding: 16px 20px;
    border-radius: 4px;
    &::-ms-check {
      display: none;
    }
  }
`;

export default GlobalStyle;