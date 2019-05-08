import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from 'common/components/Divider';
import H1 from 'common/components/H1';
import H2 from 'common/components/H2';
import Text from 'common/components/Text';
import { dayMap } from 'common/constants/dayMap';
import React from 'react';
import { ClassQueryResult } from '../ClassQuery/ClassQuery';

interface Props {
  classQueryResult: ClassQueryResult;
}

const ClassDisplay: React.FunctionComponent<Props> = ({
  classQueryResult: { data, loading, error }
}) => {
  if (error) {
    return <div>Error...</div>;
  }

  if (loading) {
    return <div>Loading ... </div>;
  }

  if (!data || !data.class) {
    return <div>No data...</div>;
  }

  const {
    name,
    category,
    description,
    price,
    streetAddress,
    streetUnit,
    city,
    state,
    postcode,
    country,
    sessions
  } = data.class;

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
        <Grid item xs={12}>
          <Text>{category.name}</Text>
        </Grid>
        <Grid item xs={12}>
          <Divider marginTop={2} marginBottom={2} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <H2 variant="body1">
            <b>About this class</b>
          </H2>
          <Text>{description}</Text>
        </Grid>
        <Box mt={2} />
        <Grid item xs={12}>
          <H2 variant="body1">
            <b>Address</b>
          </H2>
          <Text>
            {streetUnit ? streetUnit + ', ' : ''}
            {streetAddress}
          </Text>
          <Text>
            {city} {state} {postcode} {country}
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Divider marginTop={2} marginBottom={2} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <H2 variant="body1">
            <b>Sessions</b>
          </H2>
        </Grid>
        <Grid item xs={12}>
          {sessions.map(({ day, startTime, endTime, capacity }, index) => (
            <Grid key={index} container>
              <Grid item xs={12}>
                <Text gutterBottom>
                  Every {dayMap[day]}, from <b>{startTime}</b> until{' '}
                  <b>{endTime}</b> for <b>{capacity}</b> learners
                </Text>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ClassDisplay;
