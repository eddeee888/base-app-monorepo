import { FunctionComponent } from "react";
import MainContent from "../shared-ui/MainContent";
import Main from "../shared-ui/Main";
import Block from "../shared-ui/Block";
import H1 from "../shared-ui/H1";
import Text from "../shared-ui/Text";
import StandardSpace from "../shared-ui/StandardSpace";

interface MaintenancePageProps {
  appName?: string;
  imageSrc: string;
}

const MaintenancePage: FunctionComponent<MaintenancePageProps> = ({ appName = "We", imageSrc }) => {
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

export default MaintenancePage;
