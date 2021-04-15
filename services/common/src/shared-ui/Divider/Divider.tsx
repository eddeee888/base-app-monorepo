import { Box, Divider as MUIDivider } from "@material-ui/core";
import { DividerProps as MUIDividerProps } from "@material-ui/core/Divider";
import { FunctionComponent } from "react";
import { SpacingValue } from "../../shared-styles/types";

interface DividerProps extends MUIDividerProps {
  marginTop?: SpacingValue;
  marginBottom?: SpacingValue;
}

const Divider: FunctionComponent<DividerProps> = ({ marginTop = 2, marginBottom = 2, ...props }) => {
  return (
    <>
      {!!marginTop && <Box mt={marginTop} />}
      <MUIDivider {...props} />
      {!!marginBottom && <Box mb={marginBottom} />}
    </>
  );
};

export default Divider;
