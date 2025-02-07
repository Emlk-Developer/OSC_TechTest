import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    font-size: 16px;
    font-weight: 400;
    color: var(--deepBlue);
    text-decoration: none;
  }
  h1 {
    text-transform: uppercase;
    color: var(--deepPurple);
    font-size: 72px;
    margin: 0;
  }

  h2 {
      color: var(--deepPurple);
      font-size: 46px;
      font-weight: 500;
      text-align: left;
      margin: 20px 0;
  }

  h3 {
      color: var(--deepBlue);
      font-size: 32px;
      font-weight: 800;
      text-align: center;
      margin: 20px 0;
  }

`;

export default GlobalStyle;