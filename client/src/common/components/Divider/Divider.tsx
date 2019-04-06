import MUIDivider, {
  DividerProps as MUIDividerProps
} from '@material-ui/core/Divider';
import React, { FunctionComponent } from 'react';
import { spacingRem, SpacingValue } from 'src/common/helpers/spacing';

interface DividerProps extends MUIDividerProps {
  marginTop?: SpacingValue;
}

const Divider: FunctionComponent<DividerProps> = ({ marginTop, ...props }) => {
  const style = {
    marginTop: marginTop ? `${spacingRem(marginTop)}rem` : undefined
  };
  return <MUIDivider {...props} style={style} />;
};

export default Divider;
