import { forwardRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButtonProps } from "../types";

const IconButtonDelete = forwardRef<HTMLButtonElement, IconButtonProps>(function InnerIconButtonDelete({ fontSize, ...props }, ref) {
  return (
    <IconButton {...props} ref={ref}>
      <DeleteIcon fontSize={fontSize} />
    </IconButton>
  );
});

export default IconButtonDelete;
