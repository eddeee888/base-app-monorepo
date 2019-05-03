import Box from '@material-ui/core/Box';
import MUIDivider, {
  DividerProps as MUIDividerProps
} from '@material-ui/core/Divider';
import { SpacingValue } from 'common/helpers/spacing';
import React, { FunctionComponent } from 'react';

interface DividerProps extends MUIDividerProps {
  marginTop?: SpacingValue;
  marginBottom?: SpacingValue;
}

const Divider: FunctionComponent<DividerProps> = ({
  marginTop,
  marginBottom,
  ...props
}) => {
  return (
    <>
      <Box mt={marginTop} />
      <MUIDivider {...props} />
      <Box mb={marginBottom} />
    </>
  );
};

export default Divider;
