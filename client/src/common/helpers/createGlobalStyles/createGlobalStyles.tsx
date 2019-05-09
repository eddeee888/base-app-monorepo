import { injectGlobal } from 'emotion';

import 'common/assets/fonts/fonts.css';
import { primaryBackgroundColor, textColor } from 'common/styles/color';
import { mediaQuery } from 'common/styles/media';
import { remValue } from 'common/styles/unit';

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
      ${mediaQuery.md} {
        font-size: 20px;
      }
    }
  `;
};

export default createGlobalStyles;
