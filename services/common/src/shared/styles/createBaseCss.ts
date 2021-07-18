import { defaultBackgroundColor, textColor } from "./colors";
import { theme } from "./theme";
import { fontFamily } from "./fonts";

const createBaseCss = (): string => `html {
  box-sizing: border-box;
  font-size: 14px;
  ${theme.breakpoints.up("md")} {
    font-size: 16px;
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
  font-size: 1.1rem;
  line-height: 1.5em;
  font-family: ${fontFamily};
}
ul {
  margin-top: 0px;
  margin-bottom: 0px;
}`;

export default createBaseCss;
