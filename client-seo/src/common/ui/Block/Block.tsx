import { css, cx } from 'emotion';
import { Breakpoints, breakpoints, MarginValue } from '@bit/eddeee888.learnd-utils.styles';
import React from 'react';
import { Box } from '@material-ui/core';

interface Props {
  size: keyof Breakpoints;
  children: React.ReactNode;
  fullHeight?: boolean;
  marginTop?: MarginValue;
}

const defaultClassName = css`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const fullHeightClassName = css`
  height: 100%;
`;

const Block: React.FunctionComponent<Props> = ({ size, children, fullHeight, marginTop = 4 }) => {
  const maxWidthClassName = css`
    max-width: ${breakpoints[size]}px;
  `;

  const classNames = [defaultClassName, maxWidthClassName];
  if (fullHeight) {
    classNames.push(fullHeightClassName);
  }

  return (
    <div className={cx([...classNames])}>
      {!!marginTop && <Box mt={marginTop} />}
      {children}
    </div>
  );
};

export default Block;
