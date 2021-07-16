import { ReactNode, FunctionComponent } from "react";
import { css } from "@emotion/css";
import { Typography, TypographyProps } from "@material-ui/core";
import { CheckCircle as CheckCircleIcon } from "@material-ui/icons";
import { textSuccessColor, textColor } from "../../styles/colors";
import { spacingPx } from "../../styles/spacings";

export interface TextSuccessProps extends TypographyProps {
  children: ReactNode;
  textColor?: "success" | "normal";
}

const successClassName = css`
  color: ${textSuccessColor};
  display: flex;
`;

const successIconClassName = css`
  margin-right: ${spacingPx(1) / 2}px;
`;

const textColorSuccess = css`
  color: ${textSuccessColor};
`;

const textColorNormal = css`
  color: ${textColor};
`;

const TextSuccess: FunctionComponent<TextSuccessProps> = ({ textColor = "success", children, ...props }) => (
  <Typography {...props} variant="body1" className={successClassName}>
    <CheckCircleIcon className={successIconClassName} />
    <span className={textColor === "success" ? textColorSuccess : textColorNormal}>{children}</span>
  </Typography>
);

export default TextSuccess;
