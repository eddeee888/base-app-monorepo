import { breakpoints, mediaQuery } from 'common/styles/media';
import { headerHeight } from 'common/styles/size';
import { css, cx } from 'emotion';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  fullViewPortHeight?: boolean;
}

const mainTagClassName = css`
  margin-top: ${headerHeight};
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const fullViewPortHeightClassName = css`
  margin-top: 0px;
  height: 100vh;
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
  fullViewPortHeight
}) => {
  const classNames = [mainTagClassName];

  if (fullViewPortHeight) {
    classNames.push(fullViewPortHeightClassName);
  }

  return (
    <main className={cx([...classNames, className])}>
      <div className={contentClassName}>{children}</div>
    </main>
  );
};

export default Main;
