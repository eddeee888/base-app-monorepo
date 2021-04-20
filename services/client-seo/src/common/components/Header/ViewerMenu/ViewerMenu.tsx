import { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
import { useViewer } from "~/common/components/ViewerQuery";
import Button from "~/common/shared-ui/Button";
import LoggedInMenu from "./LoggedInMenu";
import LinkSignup from "~/routes/signup/LinkSignup";
import LinkLogin from "~/routes/login/LinkLogin";

const ViewerMenu: FunctionComponent = () => {
  const viewer = useViewer();
  return (
    <Grid item>
      <Grid container alignItems="center" spacing={1}>
        {!viewer && (
          <>
            <Grid item>
              <LinkSignup>
                <Button variant="outlined">Sign up</Button>
              </LinkSignup>
            </Grid>
            <Grid item>
              <LinkLogin color="secondary">
                <Button variant="outlined">Log in</Button>
              </LinkLogin>
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
