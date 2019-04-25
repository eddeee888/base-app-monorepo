import { Grid } from '@material-ui/core';
import H2 from 'common/components/H2';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import React from 'react';
import linkgenHostClass from '../../helpers/linkgenHostClass';
import useHostClassParams from '../../hooks/useHostClassParams';
import { DayOfTheWeek, HostClassState } from '../../types';

export interface SessionsSectionProps {
  values: HostClassState['sessions'];
}

const SessionsSection: React.FunctionComponent<SessionsSectionProps> = ({
  values: { sessions }
}) => {
  const params = useHostClassParams();
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <H2 variant="h5">Sessions</H2>
        </Grid>
        <Grid item xs={6}>
          <Text align="right">
            <Link to={linkgenHostClass('sessions', params.classId)}>edit</Link>
          </Text>
        </Grid>
      </Grid>
      {sessions.length <= 0 ? (
        <Text gutterBottom>
          <i>No session created</i>
        </Text>
      ) : (
        ''
      )}
      {sessions.map(({ day, startTime, endTime, capacity }, index) => (
        <Grid key={index} container>
          <Grid item xs={12}>
            <Text gutterBottom>
              Every {day !== '' ? <b>{DayOfTheWeek[day]}</b> : ''}, from{' '}
              <b>{startTime}</b> until <b>{endTime}</b> for <b>{capacity}</b>{' '}
              learners
            </Text>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default SessionsSection;
