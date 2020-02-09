import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import Main from 'src/common/ui/Main';
import Block from 'src/common/ui/Block';

interface Props {
  size?: 'default' | 'fullPage' | 'fullWidth';
}

const Spinner: React.FunctionComponent<Props> = ({ size = 'default' }) => {
  if (size === 'fullPage') {
    return (
      <Main>
        <Block size="md">
          <Grid container justify="center">
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        </Block>
      </Main>
    );
  }

  if (size === 'fullWidth') {
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
