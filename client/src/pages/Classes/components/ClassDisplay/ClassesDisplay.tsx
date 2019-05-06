import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from 'common/components/Divider';
import H1 from 'common/components/H1';
import H2 from 'common/components/H2';
import Text from 'common/components/Text';
import React from 'react';
import { ClassQueryResult } from '../ClassQuery/ClassQuery';

interface Props {
  classQueryResult: ClassQueryResult;
}

const ClassesDisplay: React.FunctionComponent<Props> = ({
  classQueryResult: { data, loading, error }
}) => {
  if (error) {
    return <div>Error...</div>;
  }

  if (loading) {
    return <div>Loading ... </div>;
  }

  if (!data) {
    return <div>No data...</div>;
  }

  if (!data.class) {
    return <div>No data...</div>;
  }

  const { name, category, description, price } = data.class;

  return (
    <>
      <Box mt={4} />
      <Grid container>
        <Grid item xs={12} sm={8}>
          <H1 variant="h2">{name}</H1>
        </Grid>
        <Grid item xs={12} sm={4}>
          <H2>$ {price}</H2>
        </Grid>
      </Grid>

      <Grid container>
        <Text>{category.name}</Text>
      </Grid>

      <Grid container>
        <Grid xs={12}>
          <Divider marginTop={2} marginBottom={2} />
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Text>
          <b>About this class:</b>
        </Text>
        <Text>{description}</Text>
      </Grid>
    </>
  );
};

export default ClassesDisplay;
