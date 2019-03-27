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
import Navigation from '../Navigation';
import { ClassCategoryData } from './__generated__/ClassCategoryData';
import ClassCategoriesQuery from './ClassCategoriesQuery';

interface ClassDetailsInput {
  className: string;
  classCategory: string;
  classDescription: string;
}

const validationSchema = Yup.object().shape({
  className: Yup.string().required('Class name is required'),
  classCategory: Yup.string().required('Class category is required'),
  classDescription: Yup.string()
});

const ClassDetailsForm: React.FunctionComponent = () => (
  <ClassCategoriesQuery>
    {({ error, loading, data }) => (
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
            initialValues={{
              className: '',
              classCategory: '',
              classDescription: ''
            }}
            onSubmit={() => {}}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container>
                  <Grid item xs={12}>
                    <Field name="className">
                      {({ field }: FieldProps<ClassDetailsInput>) => (
                        <TextInput
                          {...field}
                          label="Class name*"
                          placeholder="Choose your class name. e.g. Piano lession, Yoga class, etc."
                          error={checkIfError(
                            errors.className,
                            touched.className
                          )}
                        />
                      )}
                    </Field>
                    <FormError
                      error={errors.className}
                      display={touched.className}
                    />

                    <Field name="classCategory">
                      {({ field }: FieldProps<ClassDetailsInput>) => (
                        <Select
                          {...field}
                          label="Class category*"
                          options={generateOptions(data)}
                          error={checkIfError(
                            errors.classCategory,
                            touched.classCategory
                          )}
                        />
                      )}
                    </Field>
                    <FormError
                      error={errors.classCategory}
                      display={touched.classCategory}
                    />

                    <Field name="classDescription">
                      {({ field }: FieldProps<ClassDetailsInput>) => (
                        <TextArea
                          label="Class description"
                          error={checkIfError(
                            errors.classDescription,
                            touched.classDescription
                          )}
                          rows={5}
                          placeholder={
                            'Tell the learners what your class is about'
                          }
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
    )}
  </ClassCategoriesQuery>
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
