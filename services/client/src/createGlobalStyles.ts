import { injectGlobal } from "emotion";
import createBaseCss from "common/shared-styles/createBaseCss";
import createFontsStyles from "common/shared-styles/createFontsStyles";

const createGlobalStyles = (): void => {
  return injectGlobal`${createBaseCss()}
  ${createFontsStyles("/client-static/fonts")}`;
};

export default createGlobalStyles;
