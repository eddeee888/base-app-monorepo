import MUIDivider, {
  DividerProps as MUIDividerProps
} from '@material-ui/core/Divider';
import { spacingRem, SpacingValue } from 'common/helpers/spacing';
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
  const style = {
    marginTop: marginTop ? `${spacingRem(marginTop)}rem` : undefined,
    marginBottom: marginBottom ? `${spacingRem(marginBottom)}rem` : undefined
  };
  return <MUIDivider {...props} style={style} />;
};

export default Divider;
