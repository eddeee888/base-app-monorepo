import React from "react";
import Box from "@material-ui/core/Box";
import { css } from "emotion";

const fullWidthClassname = css`
  width: 100%;
`;

const StandardSpace: React.FunctionComponent = () => {
  return <Box className={fullWidthClassname} marginBottom={2} />;
};

export default StandardSpace;
