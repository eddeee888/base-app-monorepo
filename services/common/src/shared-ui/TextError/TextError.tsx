import { FunctionComponent, ReactNode } from "react";
import { css } from "emotion";
import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";
import Error from "@material-ui/icons/Error";
import { textErrorColor } from "../../shared-styles/colors";
import { spacingPx } from "../../shared-styles/spacings";

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
