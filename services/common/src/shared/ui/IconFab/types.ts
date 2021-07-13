import { FabProps } from "@material-ui/core/Fab";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export interface IconFabProps extends FabProps {
  fontSize?: SvgIconProps["fontSize"];
}
