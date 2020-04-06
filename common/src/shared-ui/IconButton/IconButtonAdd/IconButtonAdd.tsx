import React, { forwardRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { IconButtonProps } from "../types";

const IconButtonAdd = forwardRef<HTMLButtonElement, IconButtonProps>(function InnerIconButtonAdd({ fontSize, ...props }, ref) {
  return (
    <IconButton {...props} ref={ref}>
      <AddIcon fontSize={fontSize} />
    </IconButton>
  );
});

export default IconButtonAdd;
