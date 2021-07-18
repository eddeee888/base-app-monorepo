import { ReactNode, FunctionComponent } from "react";
import { css } from "@emotion/css";
import { Typography, TypographyProps } from "@material-ui/core";
import { Warning } from "@material-ui/icons";
import { textWarningColor } from "../../styles/colors";
import { theme } from "../../styles/theme";

export interface TextWarningProps extends TypographyProps {
  children: ReactNode;
}

const warningClassName = css`
  color: ${textWarningColor};
  display: flex;
`;

const iconClassName = css`
  margin-right: ${theme.spacing(1)};
`;

export const TextWarning: FunctionComponent<TextWarningProps> = ({ children, ...props }) => (
  <Typography {...props} variant="body1" className={warningClassName}>
    <Warning className={iconClassName} />
    <span>{children}</span>
  </Typography>
);
