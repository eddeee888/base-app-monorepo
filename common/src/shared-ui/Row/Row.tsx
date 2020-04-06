import React from "react";
import Box from "@material-ui/core/Box";
import { css } from "emotion";
import { SpacingValue } from "../../shared-styles/types";

interface Props {
  children: React.ReactNode;
  marginTop?: SpacingValue;
  marginBottom?: SpacingValue;
  marginLeft?: SpacingValue;
  marginRight?: SpacingValue;
}

const fullWidthClassname = css`
  width: 100%;
`;

const Row: React.FunctionComponent<Props> = ({ children, marginTop = 0, marginBottom = 2, marginLeft = 0, marginRight = 0 }) => {
  return (
    <Box className={fullWidthClassname} marginTop={marginTop} marginBottom={marginBottom} marginLeft={marginLeft} marginRight={marginRight}>
      {children}
    </Box>
  );
};

export default Row;
