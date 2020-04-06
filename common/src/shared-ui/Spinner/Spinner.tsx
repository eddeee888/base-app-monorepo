import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import Main from "../Main";
import MainContent from "../MainContent";

interface Props {
  size?: "default" | "fullPage" | "fullWidth";
}

const Spinner: React.FunctionComponent<Props> = ({ size = "default" }) => {
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

export default Spinner;
