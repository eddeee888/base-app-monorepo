import { forwardRef } from "react";
import { IconButton } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { IconButtonProps } from "../types";

export const IconButtonAdd = forwardRef<HTMLButtonElement, IconButtonProps>(function InnerIconButtonAdd({ fontSize, ...props }, ref) {
  return (
    <IconButton {...props} ref={ref}>
      <AddIcon fontSize={fontSize} />
    </IconButton>
  );
});
