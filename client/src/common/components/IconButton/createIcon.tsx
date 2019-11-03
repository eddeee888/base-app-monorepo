import { SvgIconProps } from '@material-ui/core/SvgIcon';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  FileCopy as DuplicateIcon
} from '@material-ui/icons';

import React from 'react';

export interface Icon {
  icon: 'add' | 'delete' | 'duplicate';
}

const iconComponents = {
  add: AddIcon,
  delete: DeleteIcon,
  duplicate: DuplicateIcon
};

const createIcon = (
  icon: Icon['icon'],
  props?: SvgIconProps
): React.ReactElement => {
  const TypedIcon = iconComponents[icon];
  return <TypedIcon {...props} />;
};

export default createIcon;
