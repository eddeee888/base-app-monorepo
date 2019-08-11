import React from 'react';
import { Box } from '@material-ui/core';
import { MarginValue } from 'common/styles/spacing';

interface Props {
  children: React.ReactNode;
  marginTop?: MarginValue;
  marginBottom?: MarginValue;
}

const Row: React.FunctionComponent<Props> = ({
  children,
  marginTop = 0,
  marginBottom = 2
}) => {
  return (
    <>
      {!!marginTop && <Box mt={marginTop} />}
      {children}
      {!!marginBottom && <Box mb={marginBottom} />}
    </>
  );
};

export default Row;
