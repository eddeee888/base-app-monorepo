import { FunctionComponent, ReactNode } from "react";
import { css } from "@emotion/css";
import { Typography, TypographyProps } from "@material-ui/core";
import { Error } from "@material-ui/icons";
import { textErrorColor } from "../../styles/colors";
import { theme } from "../../styles/theme";

export interface TextErrorProps extends TypographyProps {
  children: ReactNode;
}

const errorClassName = css`
  color: ${textErrorColor};
  display: flex;
`;

const iconClassName = css`
  margin-right: ${theme.spacing(1)};
`;

export const TextError: FunctionComponent<TextErrorProps> = ({ children, ...props }) => (
  <Typography {...props} variant="body1" className={errorClassName}>
    <Error className={iconClassName} />
    <span>{children}</span>
  </Typography>
);
