import { FunctionComponent } from "react";
import { Main, MainContent, Block, H1, Text, StandardSpace } from "../ui";

export interface MaintenancePageProps {
  appName?: string;
  imageSrc: string;
}

export const MaintenancePage: FunctionComponent<MaintenancePageProps> = ({ appName = "We", imageSrc }) => {
  return (
    <Main fullViewPortHeight>
      <MainContent size="xs">
        <Block size="xs">
          <H1 variant="h4">Under maintenance</H1>
          <Text variant="h5" align="center">
            {appName} will be back shortly.
          </Text>
          <StandardSpace />
          <StandardSpace />
          <img src={imageSrc} width="100%" />
        </Block>
      </MainContent>
    </Main>
  );
};
