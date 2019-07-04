import DefaultFab, { FabProps as DefaultFabProps } from '@material-ui/core/Fab';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { forwardRef } from 'react';
import createIcon, { Icon } from './createIcon';

interface FabProps extends DefaultFabProps, Icon {
  fontSize?: SvgIconProps['fontSize'];
}

const IconButtonFab: React.FunctionComponent<FabProps> = (
  {
    icon,
    fontSize,

    ...props
  },
  ref
) => (
  <DefaultFab {...props} ref={ref}>
    {createIcon(icon, { fontSize })}
  </DefaultFab>
);

export default forwardRef(IconButtonFab);
