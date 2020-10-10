import React from "react";
import { Typography, TypographyProps, TypographyTypeMap } from "@material-ui/core";
import { primaryColor } from "../../shared-styles/colors";
import { css, cx } from "emotion";

const headingClassName = css`
  text-decoration: underline ${primaryColor};
`;

export type HeadingBaseProps<
  D extends React.ElementType = TypographyTypeMap["defaultComponent"],
  P = Record<string, unknown>
> = TypographyProps<D, P> & {
  underline?: boolean;
};

function HeadingBase<D extends React.ElementType = TypographyTypeMap["defaultComponent"], P = Record<string, unknown>>(
  props: HeadingBaseProps<D, P>
): React.ReactElement {
  const { underline, className, ...rest } = props;

  return <Typography {...rest} className={cx([className, underline ? headingClassName : undefined])} />;
}

export default HeadingBase;
