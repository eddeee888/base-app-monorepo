import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import React from 'react';

interface Props {
  fullWidth?: boolean;
}

const Spinner: React.FunctionComponent<Props> = ({ fullWidth }) => {
  if (fullWidth) {
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
