import { forwardRef } from "react";
import { IconButton } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { IconButtonProps } from "../types";

export const IconButtonDelete = forwardRef<HTMLButtonElement, IconButtonProps>(function InnerIconButtonDelete({ fontSize, ...props }, ref) {
  return (
    <IconButton {...props} ref={ref}>
      <DeleteIcon fontSize={fontSize} />
    </IconButton>
  );
});
