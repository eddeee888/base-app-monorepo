import { FunctionComponent } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { Main } from "../Main";
import { MainContent } from "../MainContent";

export interface SpinnerProps {
  size?: "default" | "fullPage" | "fullWidth";
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ size = "default" }) => {
  if (size === "fullPage") {
    return (
      <Main fullViewPortHeight>
        <MainContent size="md">
          <Grid container justify="center">
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        </MainContent>
      </Main>
    );
  }

  if (size === "fullWidth") {
    return (
      <Grid container justify="center">
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }
  return <CircularProgress />;
};
