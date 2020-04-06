import { injectGlobal } from "emotion";
import { defaultBackgroundColor, textColor } from "common/shared-styles/colors";
import { remValue } from "common/shared-styles/sizes";
import breakpoints from "common/shared-styles/breakpoints";

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
      ${breakpoints.up("md")} {
        font-size: 20px;
      }
    }
  `;
};

export default createGlobalStyles;
