import React from "react";
import Box from "@material-ui/core/Box";
import { css } from "emotion";

const fullWidthClassname = css`
  width: 100%;
`;

export interface StandardSpaceProps {
  size?: 1 | 2;
}

const StandardSpace: React.FunctionComponent<StandardSpaceProps> = ({ size = 2 }) => {
  return <Box className={fullWidthClassname} marginBottom={size} />;
};

export default StandardSpace;
