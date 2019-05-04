import { Breakpoints, breakpoints } from 'common/styles/media';
import { css } from 'emotion';
import React from 'react';

interface Props {
  size: keyof Breakpoints;
  children: React.ReactNode;
}

const Block: React.FunctionComponent<Props> = ({ size, children }) => {
  const blockClassName = css`
    max-width: ${breakpoints[size]}px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  return <div className={blockClassName}>{children}</div>;
};

export default Block;
