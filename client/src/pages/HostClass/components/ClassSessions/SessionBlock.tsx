import Grid from '@material-ui/core/Grid';
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import FormField from 'src/common/components/FormField';
import Select from 'src/common/components/Select';
import { SelectOption } from 'src/common/components/Select/Select';
import { ClassSession, DayOfTheWeek } from '../../types';

interface SessionBlockProps {
  session: ClassSession;
  errors: FormikErrors<ClassSession>;
  touched: FormikTouched<ClassSession>;
}

const options: SelectOption[] = [
  { value: '', label: '' },
  {
    value: 'mon',
    label: DayOfTheWeek.mon
  }
];

const SessionBlock: React.FunctionComponent<SessionBlockProps> = ({
  session: { day, startTime, endTime, capacity },
  errors,
  touched
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <FormField name="day" errors={errors} touched={touched}>
          {({ field }) => <Select options={options} />}
        </FormField>
      </Grid>
    </Grid>
  );
};

export default SessionBlock;
