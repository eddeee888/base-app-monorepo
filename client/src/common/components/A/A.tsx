import { css, cx } from 'emotion';
import React from 'react';
import {
  primaryColor,
  secondaryColor,
  textOnPrimaryColor
} from 'src/common/styles/color';

type AnchorThemeColor = 'primary' | 'primaryInverted' | 'secondary';

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  themeColor?: AnchorThemeColor;
}

interface CssParam {
  themeColor?: AnchorThemeColor;
}

const getColor = (themeColor?: AnchorThemeColor): string => {
  switch (themeColor) {
    case 'primary':
      return primaryColor;
    case 'secondary':
      return secondaryColor;
    case 'primaryInverted':
      return textOnPrimaryColor;
    default:
      return primaryColor;
  }
};

export const generateCss = (params: CssParam) => {
  return css`
    cursor: pointer;
    text-decoration: none;
    font-size: 1em;
    color: ${getColor(params.themeColor)};
  `;
};

const A: React.FunctionComponent<AnchorProps> = ({
  children,
  themeColor,
  className,
  ...props
}) => {
  return (
    <a className={cx([generateCss({ themeColor }), className])} {...props}>
      {children}
    </a>
  );
};

A.defaultProps = {
  themeColor: 'primary'
};

export default A;
