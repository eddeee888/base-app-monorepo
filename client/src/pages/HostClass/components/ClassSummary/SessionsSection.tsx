import { Grid } from '@material-ui/core';
import React from 'react';
import H2 from 'src/common/components/H2';
import Text from 'src/common/components/Text';
import { DayOfTheWeek, HostClassState } from '../../types';

interface Props {
    values: HostClassState['sessions'];
}

const SessionsSection: React.FunctionComponent<Props> = ({ values: { sessions } }) => (
    <>
        <H2 variant="h5">Sessions</H2>
        {sessions.length <= 0 ? <Text gutterBottom><i>No session created</i></Text> : ''}
        {sessions.map(({ day, startTime, endTime, capacity }, index) => (
            <Grid key={index} container>
                <Grid item xs={12}>
                    <Text gutterBottom>
                        Every {day !== '' ? <b>{DayOfTheWeek[day]}</b> : ''}
                        , from <b>{startTime}</b> until <b>{endTime}</b> for <b>{capacity}</b> learners
                    </Text>
                </Grid>
            </Grid>
        ))}
    </>
);

export default SessionsSection;
