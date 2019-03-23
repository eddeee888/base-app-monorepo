import Grid from '@material-ui/core/Grid';
import { Field, FieldProps, FormikProps } from 'formik';
import React from 'react';
import FormError, { checkIfError } from 'src/common/components/FormError';
import Select from 'src/common/components/Select';
import TextInput from 'src/common/components/TextInput';
import { CreateClassInput } from './CreateClassForm';

interface Props {
  formikProps: FormikProps<CreateClassInput>;
}

const ClassGeneralDetails: React.FunctionComponent<Props> = ({
  formikProps: { errors, touched }
}) => {
  // TODO: get this from backend!
  // TOTEST
  const options = [
    { value: '', label: 'Select' },
    { value: '100', label: 'Accounting' },
    { value: '200', label: 'Programming' }
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Field name="className">
          {({ field }: FieldProps<CreateClassInput>) => (
            <TextInput
              {...field}
              required
              label="Class name"
              placeholder="Please choose your class name. e.g. Piano lession, Yoga class, etc."
              error={checkIfError(errors.className, touched.className)}
            />
          )}
        </Field>
        <FormError error={errors.className} display={touched.className} />

        <Field name="classCategory">
          {({ field }: FieldProps<CreateClassInput>) => (
            <Select
              {...field}
              id="class-category-picker"
              label="Class category"
              options={options}
              required
              error={checkIfError(errors.classCategory, touched.classCategory)}
            />
          )}
        </Field>
        <FormError
          error={errors.classCategory}
          display={touched.classCategory}
        />
      </Grid>
    </Grid>
  );
};

export default ClassGeneralDetails;
