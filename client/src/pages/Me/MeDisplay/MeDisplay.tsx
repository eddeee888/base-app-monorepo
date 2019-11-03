import React from 'react';
import { Viewer } from 'common/components/ViewerProvider';
import Main from 'common/components/Main';
import Block from 'common/components/Block';
import { Box, Grid } from '@material-ui/core';
import Avatar from 'common/components/Avatar';
import Paper from 'common/components/Paper';
import { routes } from 'common/pathing';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Row from 'common/components/Row';

interface MeDisplayProps {
  viewer: Viewer;
}

const MeDisplay: React.FunctionComponent<MeDisplayProps> = ({ viewer }) => {

  return (
    <Main>
      <Block size="md">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Paper>
              <Grid container justify="center">
                <Avatar src={viewer.avatar} size="md" />
              </Grid>
              <Grid container justify="center">
                <Link to={routes.meUploadAvatar.generate({})}>
                  <Row marginTop={2} marginBottom={0}>
                    <Text>Upload avatar</Text>
                  </Row>
                </Link>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Box marginBottom={2} />
      </Block>
    </Main>
  );
};

export default MeDisplay;
