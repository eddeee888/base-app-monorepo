import { Paper as MuiPaper } from "@material-ui/core";
import { css, cx } from "emotion";
import React from "react";
import { spacingRem } from "../../shared-styles/spacings";
import { primaryBackgroundColor } from "../../shared-styles/colors";
import { SpacingValue } from "../../shared-styles/types";

interface Props {
  children?: React.ReactNode;
  className?: string;
  paddingX?: SpacingValue;
  paddingY?: SpacingValue;
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

const Paper: React.FunctionComponent<Props> = ({ className, children, disabled = false, paddingX = 3, paddingY = 2 }) => {
  const spacingClassName = css`
    padding: ${spacingRem(paddingY)}rem ${spacingRem(paddingX)}rem;
    width: 100%;
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
