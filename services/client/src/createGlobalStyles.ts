import { injectGlobal } from "emotion";
import createBaseCss from "common/shared-styles/createBaseCss";

const createGlobalStyles = (): void => {
  return injectGlobal`${createBaseCss()}`;
};

export default createGlobalStyles;
