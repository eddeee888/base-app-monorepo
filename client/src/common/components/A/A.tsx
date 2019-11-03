import {
  primaryColor,
  secondaryColor,
  textOnPrimaryColor,
  textColor
} from 'common/styles/color';
import { css, cx } from 'emotion';
import React, { forwardRef } from 'react';

type AnchorColor = 'primary' | 'primaryInverted' | 'secondary' | 'text';

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: AnchorColor;
}

interface CssParam {
  color?: AnchorColor;
}

const getColor = (color?: AnchorColor): string => {
  switch (color) {
    case 'primary':
      return primaryColor;
    case 'secondary':
      return secondaryColor;
    case 'primaryInverted':
      return textOnPrimaryColor;
    case 'text':
      return textColor;
    default:
      return primaryColor;
  }
};

export const generateCss = ({ color }: CssParam): string => {
  return css`
    cursor: pointer;
    text-decoration: none;
    font-size: 1em;
    color: ${getColor(color)};
  `;
};

const A: React.FunctionComponent<AnchorProps> = (
  { children, color = 'primary', className, ...props },
  ref
) => {
  return (
    <a className={cx([generateCss({ color }), className])} {...props} ref={ref}>
      {children}
    </a>
  );
};

export default forwardRef(A);
