import React, { useEffect } from "react";
import { LogoutMutationFn } from "./Logout.generated";
import { ClearViewerFn } from "common/components/ViewerProvider";
import generateUrlHome from "routes/home/generateUrlHome";

interface Props {
  clearViewer: ClearViewerFn;
  logout: LogoutMutationFn;
}

const LogoutLogic: React.FunctionComponent<Props> = ({ clearViewer, logout }) => {
  useEffect(() => {
    logout().then(() => {
      clearViewer();
      window.location.replace(generateUrlHome({}));
    });
  }, []);

  return null;
};

export default LogoutLogic;
