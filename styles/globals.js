import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', 'sans-serif';
    color: ${({ theme }) => theme.colors.text};
    font-size: 62.5%;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
