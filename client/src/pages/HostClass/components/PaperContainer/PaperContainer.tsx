import { css } from 'emotion';
import React from 'react';
import Paper from 'src/common/components/Paper';
import { breakpoints, Breakpoints } from 'src/common/styles/media';

interface Props {
  size: keyof Breakpoints;
  children: React.ReactNode;
}

const PaperContainer: React.FunctionComponent<Props> = ({ children, size }) => {
  const paperContainerClassName = css`
    max-width: ${breakpoints[size]}px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div className={paperContainerClassName}>
      <Paper>{children}</Paper>
    </div>
  );
};

export default PaperContainer;
