import { injectGlobal } from "@emotion/css";
import createBaseCss from "~/shared/styles/createBaseCss";
import createFontsStyles from "~/shared/styles/createFontsStyles";

const createGlobalStyles = (): void => {
  return injectGlobal`${createBaseCss()}
  ${createFontsStyles("/client-static/fonts")}`;
};

export default createGlobalStyles;
