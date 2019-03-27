import Grid from '@material-ui/core/Grid';
import { Field, FieldProps } from 'formik';
import React from 'react';
import TextInput from 'src/common/components/TextInput';

// TODO: implement me
const ClassSessions: React.FunctionComponent = () => (
  <Grid container>
    <Grid item>
      <Field name="classSession">
        {({ field }: FieldProps) => (
          <TextInput
            {...field}
            label="Class session"
            placeholder="Choose your class name. e.g. Piano lession, Yoga class, etc."
          />
        )}
      </Field>
    </Grid>
  </Grid>
);

export default ClassSessions;
