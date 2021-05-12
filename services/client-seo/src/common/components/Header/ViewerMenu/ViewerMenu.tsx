import { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
import { useViewer } from "~/common/components/ViewerQuery";
import ButtonX from "~/common/components/ButtonX";
import LoggedInMenu from "./LoggedInMenu";

const ViewerMenu: FunctionComponent = () => {
  const viewer = useViewer();
  return (
    <Grid item>
      <Grid container alignItems="center" spacing={1}>
        {!viewer && (
          <>
            <Grid item>
              <ButtonX route={{ to: "signup" }} variant="outlined">
                Sign up
              </ButtonX>
            </Grid>
            <Grid item>
              <ButtonX route={{ to: "login" }} variant="outlined">
                Log in
              </ButtonX>
            </Grid>
          </>
        )}
        {viewer && (
          <Grid item>
            <LoggedInMenu viewer={viewer} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default ViewerMenu;
