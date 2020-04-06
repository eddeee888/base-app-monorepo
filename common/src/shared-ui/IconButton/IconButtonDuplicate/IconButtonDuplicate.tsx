import React, { forwardRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import DuplicateIcon from "@material-ui/icons/FileCopy";
import { IconButtonProps } from "../types";

const IconButtonDuplicate = forwardRef<HTMLButtonElement, IconButtonProps>(function InnerIconButtonDuplicate({ fontSize, ...props }, ref) {
  return (
    <IconButton {...props} ref={ref}>
      <DuplicateIcon fontSize={fontSize} />
    </IconButton>
  );
});

export default IconButtonDuplicate;
