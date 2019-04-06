import { css, cx } from 'emotion';
import React from 'react';
import { breakpoints, mediaQuery } from 'src/common/styles/media';

interface Props {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const mainTagClassName = css`
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const contentClassName = css`
  padding: 0 1rem;
  max-width: ${breakpoints.lg}px;
  width: 100%;

  ${mediaQuery.md} {
    padding: 0 2rem;
  }
`;

const Main: React.FunctionComponent<Props> = ({ children, className }) => (
  <main className={cx([mainTagClassName, className])}>
    <div className={contentClassName}>{children}</div>
  </main>
);

export default Main;
