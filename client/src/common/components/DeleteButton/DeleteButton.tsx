import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

interface Props extends IconButtonProps {
  size?: SvgIconProps['fontSize'];
}

const DeleteButton: React.FunctionComponent<Props> = ({
  size = 'small',
  ...props
}) => (
  <IconButton aria-label="Delete" {...props}>
    <DeleteIcon fontSize={size} />
  </IconButton>
);

export default DeleteButton;
