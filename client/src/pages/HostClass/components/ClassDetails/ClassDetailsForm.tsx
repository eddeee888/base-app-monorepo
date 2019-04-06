import Grid from '@material-ui/core/Grid';
import { Form, Formik } from 'formik';
import React from 'react';
import FormField from 'src/common/components/FormField';
import Paper from 'src/common/components/Paper';
import Section from 'src/common/components/Section';
import Select from 'src/common/components/Select';
import { SelectOption } from 'src/common/components/Select/Select';
import Spinner from 'src/common/components/Spinner';
import Text from 'src/common/components/Text';
import TextArea from 'src/common/components/TextArea';
import TextInput from 'src/common/components/TextInput';
import * as Yup from 'yup';
import { NavFunctions } from '../../handlers/createNavFunctions';
import { ClassDetailsInput } from '../../types';
import Navigation from '../Navigation';
import { ClassCategoryData } from './__generated__/ClassCategoryData';
import { ClassCategoryQueryResult } from './ClassCategoriesQuery';

const validationSchema = Yup.object().shape<ClassDetailsInput>({
  name: Yup.string().required('Class name is required'),
  category: Yup.string().required('Class category is required'),
  description: Yup.string()
});

export interface ClassDetailsFormProps {
  categoryResult: ClassCategoryQueryResult;
  goNext: NavFunctions<ClassDetailsInput>['goNext'];
  initialValues: ClassDetailsInput;
}

const ClassDetailsForm: React.FunctionComponent<ClassDetailsFormProps> = ({
  categoryResult: { error, loading, data },
  goNext,
  initialValues
}) => {
  return (
    <>
      {error && (
        <Text align="center">
          Unexpected error occurred. Please try again later.
        </Text>
      )}

      {loading && <Spinner fullWidth />}

      {!error && !loading && (
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={goNext}
        >
          {({ errors, touched }) => (
            <Form>
              <Section size="sm">
                <Paper>
                  <Grid container>
                    <Grid item xs={12}>
                      <FormField name="name" errors={errors} touched={touched}>
                        {({ field }) => (
                          <TextInput
                            {...field}
                            label="Class name*"
                            placeholder="Choose your class name. e.g. Piano lession, Yoga class, etc."
                          />
                        )}
                      </FormField>

                      <FormField
                        name="category"
                        errors={errors}
                        touched={touched}
                      >
                        {({ field }) => (
                          <Select
                            {...field}
                            label="Class category*"
                            options={generateOptions(data)}
                          />
                        )}
                      </FormField>

                      <FormField
                        name="description"
                        errors={errors}
                        touched={touched}
                      >
                        {({ field }) => (
                          <TextArea
                            label="Class description"
                            rows={5}
                            placeholder={
                              'Tell the learners what your class is about'
                            }
                            {...field}
                          />
                        )}
                      </FormField>
                    </Grid>
                  </Grid>
                </Paper>
                <Navigation />
              </Section>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

const generateOptions = (
  data: ClassCategoryData | undefined
): SelectOption[] => {
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
