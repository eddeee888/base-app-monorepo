import { Paper as MuiPaper } from '@material-ui/core';
import { spacingRem } from '@bit/eddeee888.base-react-app-utils.styles';
import { css, cx } from 'emotion';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const spacingClassName = css`
  padding: ${spacingRem(2)}rem ${spacingRem(3)}rem;
  width: 100%;
`;

const Paper: React.FunctionComponent<Props> = ({ className, children }) => {
  return (
    <MuiPaper className={cx([className, spacingClassName])} elevation={1} square>
      {children}
    </MuiPaper>
  );
};

export default Paper;
