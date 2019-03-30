import Grid from '@material-ui/core/Grid';
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { Session } from '../../types';

interface SessionBlockProps {
  session: Session;
  errors: FormikErrors<Session>;
  touched: FormikTouched<Session>;
}

const SessionBlock: React.FunctionComponent<SessionBlockProps> = ({
  session: { day, startTime, endTime, capacity },
  errors,
  touched
}) => {
  return (
    <Grid container>
      <Grid item xs={12} />
    </Grid>
  );
};

export default SessionBlock;
