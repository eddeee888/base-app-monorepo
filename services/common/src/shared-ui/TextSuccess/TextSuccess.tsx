import React from "react";
import { css } from "emotion";
import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { textSuccessColor } from "../../shared-styles/colors";
import { spacingPx } from "../../shared-styles/spacings";

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const successClassName = css`
  color: ${textSuccessColor};
  display: flex;
`;

const successIconClassName = css`
  margin-right: ${spacingPx(1) / 2}px;
`;

const TextSuccess: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <Typography {...props} variant="body1" className={successClassName}>
    <CheckCircleIcon className={successIconClassName} />
    <span>{children}</span>
  </Typography>
);

export default TextSuccess;
