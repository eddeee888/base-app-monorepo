import { Box, Divider as MUIDivider } from '@material-ui/core';
import { DividerProps as MUIDividerProps } from '@material-ui/core/Divider';
import { MarginValue } from 'common/styles/spacing';
import React, { FunctionComponent } from 'react';

interface DividerProps extends MUIDividerProps {
  marginTop?: MarginValue;
  marginBottom?: MarginValue;
}

const Divider: FunctionComponent<DividerProps> = ({
  marginTop = 2,
  marginBottom = 2,
  ...props
}) => {
  return (
    <>
      {!!marginTop && <Box mt={marginTop} />}
      <MUIDivider {...props} />
      {!!marginBottom && <Box mb={marginBottom} />}
    </>
  );
};

export default Divider;
