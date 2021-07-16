import { forwardRef } from "react";
import { IconButton } from "@material-ui/core";
import { FileCopy as DuplicateIcon } from "@material-ui/icons";
import { IconButtonProps } from "../types";

const IconButtonDuplicate = forwardRef<HTMLButtonElement, IconButtonProps>(function InnerIconButtonDuplicate({ fontSize, ...props }, ref) {
  return (
    <IconButton {...props} ref={ref}>
      <DuplicateIcon fontSize={fontSize} />
    </IconButton>
  );
});

export default IconButtonDuplicate;
