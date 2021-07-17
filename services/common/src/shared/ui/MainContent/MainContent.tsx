import { FunctionComponent } from "react";
import { Block } from "../Block";
import { Box } from "@material-ui/core";
import { PageSize, SpacingValue } from "../../styles/types";

export interface MainContentProps {
  size: PageSize;
  marginTop?: SpacingValue;
}

export const MainContent: FunctionComponent<MainContentProps> = ({ size, children, marginTop = 2 }) => {
  return (
    <Block size={size} fullHeight>
      <Box mt={marginTop} />
      {children}
    </Block>
  );
};
