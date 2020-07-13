import { Paper as MuiPaper } from "@material-ui/core";
import { css, cx } from "emotion";
import React from "react";
import { spacingRem } from "../../shared-styles/spacings";
import { primaryBackgroundColor } from "../../shared-styles/colors";

interface Props {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const spacingClassName = css`
  padding: ${spacingRem(2)}rem ${spacingRem(3)}rem;
  width: 100%;
`;

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

const Paper: React.FunctionComponent<Props> = ({ className, children, disabled = false }) => {
  const classNames = [className, spacingClassName];
  if (disabled) {
    classNames.push(disabledClassName);
  }
  return (
    <MuiPaper className={cx(classNames)} elevation={1} square>
      {children}
    </MuiPaper>
  );
};

export default Paper;
