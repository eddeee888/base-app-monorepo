import React, { useEffect } from "react";
import { LogoutMutationFn } from "./Logout.generated";
import { ClearViewerFn } from "common/components/ViewerProvider";
import generateUrlHome from "routes/home/generateUrlHome";
import Main from "common/shared-ui/Main";
import MainContent from "common/shared-ui/MainContent";
import Spinner from "common/shared-ui/Spinner";
import H2 from "common/shared-ui/H2";

interface Props {
  clearViewer: ClearViewerFn;
  logout: LogoutMutationFn;
}

const LogoutLogic: React.FunctionComponent<Props> = ({ clearViewer, logout }) => {
  useEffect(() => {
    logout().then(() => {
      clearViewer();
      window.location.replace(generateUrlHome());
    });
  }, []);

  return (
    <Main fullViewPortHeight>
      <MainContent size="sm">
        <H2>Logging out...</H2>
        <Spinner size="fullWidth" />
      </MainContent>
    </Main>
  );
};

export default LogoutLogic;
