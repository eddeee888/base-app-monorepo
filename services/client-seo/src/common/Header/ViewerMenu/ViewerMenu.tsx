import { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
import { useViewer } from "../../ViewerQuery";
import { ButtonX } from "../../ButtonX";
import { LoggedInMenu } from "./LoggedInMenu";

export const ViewerMenu: FunctionComponent = () => {
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
