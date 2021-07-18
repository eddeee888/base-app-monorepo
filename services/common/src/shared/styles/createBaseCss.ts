import { defaultBackgroundColor, textColor } from "./colors";
import { theme } from "./theme";
import { fontFamily } from "./fonts";

const createBaseCss = (): string => `html {
  box-sizing: border-box;
  font-size: 16px;
  ${theme.breakpoints.up("md")} {
    font-size: 18px;
  }
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
  font-size: 1rem;
  font-family: ${fontFamily};
}
ul {
  margin-top: 0px;
  margin-bottom: 0px;
}`;

export default createBaseCss;
