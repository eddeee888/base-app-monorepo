import { IconButton as DefaultIconButton } from '@material-ui/core';
import { IconButtonProps as DefaultIconButtonProps } from '@material-ui/core/IconButton';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { forwardRef } from 'react';
import createIcon, { Icon } from './createIcon';

interface ButtonProps extends DefaultIconButtonProps, Icon {
  fontSize?: SvgIconProps['fontSize'];
}

const IconButton: React.FunctionComponent<ButtonProps> = (
  { icon, fontSize, ...props },
  ref
) => (
  <DefaultIconButton {...props} ref={ref}>
    {createIcon(icon, { fontSize })}
  </DefaultIconButton>
);

export default forwardRef(IconButton);
