import { SvgIconProps, IconButtonProps as DefaultIconButtonProps } from "@material-ui/core";

export interface IconButtonProps extends DefaultIconButtonProps {
  fontSize?: SvgIconProps["fontSize"];
}
