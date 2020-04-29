import { defaultBackgroundColor, textColor } from "./colors";
import { remValue } from "./sizes";
import breakpoints from "./breakpoints";
import { fontFamily } from "./fonts";

const createBaseCss = (): string => `html {
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
    font-size: 1rem;
  }
  font-family: ${fontFamily};
}`;

export default createBaseCss;
