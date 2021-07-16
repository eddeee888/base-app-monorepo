import { forwardRef } from "react";
import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { IconFabProps } from "../types";

const IconFabAdd = forwardRef<HTMLButtonElement, IconFabProps>(function InnerIconFabAdd({ fontSize, ...props }, ref) {
  return (
    <Fab {...props} ref={ref}>
      <AddIcon fontSize={fontSize} />
    </Fab>
  );
});

export default IconFabAdd;
