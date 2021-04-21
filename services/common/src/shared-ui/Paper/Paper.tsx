import { FunctionComponent, ReactNode } from "react";
import { Paper as MuiPaper } from "@material-ui/core";
import { css, cx } from "@emotion/css";

import { spacingRem } from "../../shared-styles/spacings";
import { primaryBackgroundColor } from "../../shared-styles/colors";
import { SpacingValue } from "../../shared-styles/types";

interface Props {
  children?: ReactNode;
  className?: string;
  paddingX?: SpacingValue | [SpacingValue, SpacingValue];
  paddingY?: SpacingValue | [SpacingValue, SpacingValue];
  fullHeight?: boolean;
  disabled?: boolean;
}

const disabledClassName = css`
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.4;
    background-color: ${primaryBackgroundColor};
  }
`;

const Paper: FunctionComponent<Props> = (props) => {
  const { className, children, disabled = false, paddingX = 3, paddingY = 2, fullHeight = false } = props;

  const paddingTopValue = typeof paddingY === "number" ? paddingY : paddingY[0];
  const paddingBottomValue = typeof paddingY === "number" ? paddingY : paddingY[1];
  const paddingRightValue = typeof paddingX === "number" ? paddingX : paddingX[0];
  const paddingLeftValue = typeof paddingX === "number" ? paddingX : paddingX[1];

  const spacingClassName = css`
    padding: ${spacingRem(paddingTopValue)}rem ${spacingRem(paddingRightValue)}rem ${spacingRem(paddingBottomValue)}rem
      ${spacingRem(paddingLeftValue)}rem;
    width: 100%;
    ${fullHeight ? `height: 100%;` : ""}
  `;

  const classNames = [spacingClassName];
  if (disabled) {
    classNames.push(disabledClassName);
  }
  if (className) {
    classNames.push(className);
  }

  return (
    <MuiPaper className={cx(classNames)} elevation={1} square>
      {children}
    </MuiPaper>
  );
};

export default Paper;
