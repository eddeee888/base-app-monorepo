import DefaultFab, { FabProps as DefaultFabProps } from '@material-ui/core/Fab';
import DefaultIconButton, {
  IconButtonProps as DefaultIconButtonProps
} from '@material-ui/core/IconButton';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DuplicateIcon from '@material-ui/icons/FileCopy';
import React from 'react';

interface Icon {
  icon: 'add' | 'delete' | 'duplicate';
}

interface FabType {
  buttonType: 'fab';
}

interface ButtonType {
  buttonType: 'button';
}

interface FabProps extends DefaultFabProps, Icon, FabType {}

interface ButtonProps extends DefaultIconButtonProps, Icon, ButtonType {
  size?: SvgIconProps['fontSize'];
}

const iconComponents = {
  add: AddIcon,
  delete: DeleteIcon,
  duplicate: DuplicateIcon
};

const IconButton: React.FunctionComponent<ButtonProps | FabProps> = props => {
  if (isNormalButton(props)) {
    return <IconButtonNormal {...props} />;
  }

  return <IconButtonFab {...props} />;
};

const IconButtonNormal: React.FunctionComponent<ButtonProps> = ({
  icon,
  size,
  buttonType,
  ...props
}) => (
  <DefaultIconButton {...props}>
    {createIcon(icon, { fontSize: size })}
  </DefaultIconButton>
);

const IconButtonFab: React.FunctionComponent<FabProps> = ({
  icon,
  buttonType,
  ...props
}) => <DefaultFab {...props}>{createIcon(icon)}</DefaultFab>;

function isNormalButton(props: ButtonProps | FabProps): props is ButtonProps {
  return props.buttonType === 'button';
}

const createIcon = (icon: Icon['icon'], props?: SvgIconProps) => {
  const TypedIcon = iconComponents[icon];
  return <TypedIcon {...props} />;
};

export default IconButton;
