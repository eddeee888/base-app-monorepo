import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { IconButtonProps as DefaultIconButtonProps } from "@material-ui/core/IconButton";

export interface IconButtonProps extends DefaultIconButtonProps {
  fontSize?: SvgIconProps["fontSize"];
}
