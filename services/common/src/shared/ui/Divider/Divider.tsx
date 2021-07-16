import { Box, Divider as MUIDivider, DividerProps as MUIDividerProps } from "@material-ui/core";
import { FunctionComponent } from "react";
import { SpacingValue } from "../../styles/types";

export interface DividerProps extends MUIDividerProps {
  marginTop?: SpacingValue;
  marginBottom?: SpacingValue;
}

export const Divider: FunctionComponent<DividerProps> = ({ marginTop = 2, marginBottom = 2, ...props }) => {
  return (
    <>
      {!!marginTop && <Box mt={marginTop} />}
      <MUIDivider {...props} />
      {!!marginBottom && <Box mb={marginBottom} />}
    </>
  );
};
