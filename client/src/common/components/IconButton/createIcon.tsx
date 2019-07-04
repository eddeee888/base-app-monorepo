import { SvgIconProps } from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DuplicateIcon from '@material-ui/icons/FileCopy';
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
