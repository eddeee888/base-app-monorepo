import MuiPaper from '@material-ui/core/Paper';
import { spacingRem } from 'common/helpers/spacing';
import { css, cx } from 'emotion';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Paper: React.FunctionComponent<Props> = ({ className, children }) => {
  return (
    <MuiPaper
      className={cx([
        className,
        css`
          padding: ${spacingRem(2)}rem ${spacingRem(3)}rem;
          width: 100%;
        `
      ])}
      elevation={1}
      square
    >
      {children}
    </MuiPaper>
  );
};

export default Paper;
