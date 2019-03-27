import Grid from '@material-ui/core/Grid';
import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import FormError, { checkIfError } from 'src/common/components/FormError';
import Select from 'src/common/components/Select';
import { SelectOptions } from 'src/common/components/Select/Select';
import Spinner from 'src/common/components/Spinner';
import Text from 'src/common/components/Text';
import TextArea from 'src/common/components/TextArea';
import TextInput from 'src/common/components/TextInput';
import * as Yup from 'yup';
import { initialValues } from '../../constants';
import { ClassDetailsInput, UpdateState } from '../../types';
import Navigation from '../Navigation';
import { ClassCategoryData } from './__generated__/ClassCategoryData';
import { ClassCategoryQueryResult } from './ClassCategoriesQuery';

const validationSchema = Yup.object().shape<ClassDetailsInput>({
  name: Yup.string().required('Class name is required'),
  category: Yup.string().required('Class category is required'),
  description: Yup.string()
});

interface Props {
  categoryResult: ClassCategoryQueryResult;
  updateState: UpdateState<ClassDetailsInput>;
}

// TOTEST
const ClassDetailsForm: React.FunctionComponent<Props> = ({
  categoryResult: { error, loading, data },
  updateState
}) => (
  <>
    {error && (
      <Text align="center">
        Unexpected error occurred. Please try again later.
      </Text>
    )}

    {loading && <Spinner fullWidth />}

    {!error && !loading && (
      <Formik<ClassDetailsInput>
        validationSchema={validationSchema}
        initialValues={initialValues.details}
        onSubmit={values => {
          updateState(values, true);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container>
              <Grid item xs={12}>
                <Field name="name">
                  {({ field }: FieldProps<ClassDetailsInput>) => (
                    <TextInput
                      {...field}
                      label="Class name*"
                      placeholder="Choose your class name. e.g. Piano lession, Yoga class, etc."
                      error={checkIfError(errors.name, touched.name)}
                    />
                  )}
                </Field>
                <FormError error={errors.name} display={touched.name} />

                <Field name="category">
                  {({ field }: FieldProps<ClassDetailsInput>) => (
                    <Select
                      {...field}
                      label="Class category*"
                      options={generateOptions(data)}
                      error={checkIfError(errors.category, touched.category)}
                    />
                  )}
                </Field>
                <FormError error={errors.category} display={touched.category} />

                <Field name="description">
                  {({ field }: FieldProps<ClassDetailsInput>) => (
                    <TextArea
                      label="Class description"
                      error={checkIfError(
                        errors.description,
                        touched.description
                      )}
                      rows={5}
                      placeholder={'Tell the learners what your class is about'}
                      {...field}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>
            <Navigation />
          </Form>
        )}
      </Formik>
    )}
  </>
);

const generateOptions = (
  data: ClassCategoryData | undefined
): SelectOptions[] => {
  if (!data || !data.classCategories) {
    return [];
  }

  const options = data.classCategories.map(({ id, name }) => {
    return {
      value: id,
      label: name
    };
  });
  options.unshift({
    value: '',
    label: ''
  });

  return options;
};

export default ClassDetailsForm;
