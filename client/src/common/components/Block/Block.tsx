import { css } from 'emotion';
import React from 'react';
import { Breakpoints, breakpoints } from 'src/common/styles/media';

interface Block {
  size: keyof Breakpoints;
  children: React.ReactNode;
}

const Block: React.FunctionComponent<Block> = ({ size, children }) => {
  const paperContainerClassName = css`
    max-width: ${breakpoints[size]}px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  return <div className={paperContainerClassName}>{children}</div>;
};

export default Block;
