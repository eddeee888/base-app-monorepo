import { injectGlobal } from 'emotion';

import 'src/common/assets/fonts/fonts.css';
import { primaryBackgroundColor, textColor } from 'src/common/styles/color';
import { mediaQuery } from 'src/common/styles/media';
import { remValue } from 'src/common/styles/unit';

const createGlobalStyles = () => {
  return injectGlobal`
    html {
      box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      background-color: ${primaryBackgroundColor};
      color: ${textColor};
      font-size: ${remValue}px;
      line-height: 1.5em;
      ${mediaQuery.medium} {
        font-size: 20px;
      }
    }
  `;
};

export default createGlobalStyles;
