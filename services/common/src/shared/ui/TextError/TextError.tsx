import { FunctionComponent, ReactNode } from "react";
import { css } from "@emotion/css";
import { Typography, TypographyProps } from "@material-ui/core";
import { Error } from "@material-ui/icons";
import { textErrorColor } from "../../styles/colors";
import { spacingPx } from "../../styles/spacings";

interface Props extends TypographyProps {
  children: ReactNode;
}

const errorClassName = css`
  color: ${textErrorColor};
  display: flex;
`;

const iconClassName = css`
  margin-right: ${spacingPx(1) / 2}px;
`;

const TextError: FunctionComponent<Props> = ({ children, ...props }) => (
  <Typography {...props} variant="body1" className={errorClassName}>
    <Error className={iconClassName} />
    <span>{children}</span>
  </Typography>
);

export default TextError;
