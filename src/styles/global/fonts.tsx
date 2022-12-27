import { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`
  * {
    color: #e9e2bf;
    font-family: f-light, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default FontStyle;