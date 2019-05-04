import { breakpoints, mediaQuery } from 'common/styles/media';
import { headerHeight } from 'common/styles/size';
import { css, cx } from 'emotion';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const mainTagClassName = css`
  margin-top: ${headerHeight};
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const fullHeightClassName = css`
  margin-top: 0px;
  height: calc(100vh - ${headerHeight});
`;

const contentClassName = css`
  padding: 0 1rem;
  max-width: ${breakpoints.lg}px;
  width: 100%;

  ${mediaQuery.md} {
    padding: 0 2rem;
  }
`;

const Main: React.FunctionComponent<Props> = ({
  children,
  className,
  fullHeight
}) => {
  const defaultClassNames = [mainTagClassName];
  if (fullHeight) {
    defaultClassNames.push(fullHeightClassName);
  }

  return (
    <main className={cx([...defaultClassNames, className])}>
      <div className={contentClassName}>{children}</div>
    </main>
  );
};

export default Main;
