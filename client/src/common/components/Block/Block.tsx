import { Breakpoints, breakpoints } from 'common/styles/media';
import { css, cx } from 'emotion';
import React from 'react';

interface Props {
  size: keyof Breakpoints;
  children: React.ReactNode;
  fullHeight?: boolean;
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

const Block: React.FunctionComponent<Props> = ({
  size,
  children,
  fullHeight
}) => {
  const maxWidthClassName = css`
    max-width: ${breakpoints[size]}px;
  `;

  const classNames = [defaultClassName, maxWidthClassName];
  if (fullHeight) {
    classNames.push(fullHeightClassName);
  }

  return <div className={cx([...classNames])}>{children}</div>;
};

export default Block;
