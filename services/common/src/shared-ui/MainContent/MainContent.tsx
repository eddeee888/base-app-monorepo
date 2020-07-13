import React from "react";
import Block from "../Block";
import Box from "@material-ui/core/Box";
import { PageSize, SpacingValue } from "../../shared-styles/types";

export interface MainContentProps {
  size: PageSize;
  marginTop?: SpacingValue;
}

const MainContent: React.FunctionComponent<MainContentProps> = ({ size, children, marginTop = 4 }) => {
  return (
    <Block size={size} fullHeight>
      <Box mt={marginTop} />
      {children}
    </Block>
  );
};

export default MainContent;
