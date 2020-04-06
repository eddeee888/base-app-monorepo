import React from "react";
import { css } from "emotion";
import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import Warning from "@material-ui/icons/Warning";
import { textWarningColor } from "../../shared-styles/colors";
import { spacingPx } from "../../shared-styles/spacings";

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const warningClassName = css`
  color: ${textWarningColor};
  display: flex;
`;

const iconClassName = css`
  margin-right: ${spacingPx(1) / 2}px;
`;

const TextWarning: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <Typography {...props} variant="body1" className={warningClassName}>
    <Warning className={iconClassName} />
    <span>{children}</span>
  </Typography>
);

export default TextWarning;
