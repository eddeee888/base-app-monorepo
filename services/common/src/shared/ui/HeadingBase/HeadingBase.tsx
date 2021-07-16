import { ElementType, ReactElement } from "react";
import { Typography, TypographyProps, TypographyTypeMap } from "@material-ui/core";
import { primaryColor } from "../../styles/colors";
import { css, cx } from "@emotion/css";

const headingClassName = css`
  text-decoration: underline ${primaryColor};
`;

export type HeadingBaseProps<D extends ElementType = TypographyTypeMap["defaultComponent"], P = Record<string, unknown>> = TypographyProps<
  D,
  P
> & {
  underline?: boolean;
};

export function HeadingBase<D extends ElementType = TypographyTypeMap["defaultComponent"], P = Record<string, unknown>>(
  props: HeadingBaseProps<D, P>
): ReactElement {
  const { underline, className, ...rest } = props;

  return <Typography {...rest} className={cx([className, underline ? headingClassName : undefined])} />;
}
