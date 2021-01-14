import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { darkest, lightest } from '../utils/colors';

const Global = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    color: ${darkest};
    background: ${lightest};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default Global;
