import { injectGlobal } from 'emotion';
import { defaultBackgroundColor, textColor, remValue, mediaQuery } from '@bit/eddeee888.base-react-app-utils.styles';

const createGlobalStyles = (): void => {
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
      background-color: ${defaultBackgroundColor};
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
