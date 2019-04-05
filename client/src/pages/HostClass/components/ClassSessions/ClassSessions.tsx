import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { css } from 'emotion';
import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import Button from 'src/common/components/Button';
import DeleteButton from 'src/common/components/DeleteButton';
import FormFieldArray from 'src/common/components/FormFieldArray';
import Select from 'src/common/components/Select/Select';
import Text from 'src/common/components/Text';
import TextInput from 'src/common/components/TextInput';
import { spacingRem } from 'src/common/helpers/spacing';
import * as Yup from 'yup';
import {
  dayOptions,
  dayValues,
  emptySession,
  sessionTimeOptions,
  sessionTimes
} from '../../constants';
import { ClassSession, ClassSessionsInput } from '../../types';

interface Props<I> {
  initialValues: I;
}

const validationSchema = Yup.object().shape<ClassSessionsInput>({
  sessions: Yup.array().of(
    Yup.object().shape<ClassSession>({
      day: Yup.mixed().oneOf(dayValues, 'Day is required'),
      startTime: Yup.mixed().oneOf(sessionTimes, 'Start time is required'),
      endTime: Yup.mixed().oneOf(sessionTimes, 'End time is required'),
      capacity: Yup.number()
        .required('Capacity is required')
        .typeError('Must be a valid number')
        .min(1, 'Must be at least 1')
    })
  )
});

const sessionContainerClassName = css`
  margin-bottom: ${spacingRem(2)}rem;
`;

// TODO: implement me
const ClassSessions: React.FunctionComponent<Props<ClassSessionsInput>> = ({
  initialValues
}) => {
  return (
    <Formik<ClassSessionsInput>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ values, errors, touched }) => (
        <Form>
          <FieldArray
            name="sessions"
            render={arrayHelpers => (
              <>
                {values.sessions &&
                  values.sessions.map((session, index) => {
                    const removeSession = () => {
                      arrayHelpers.remove(index);
                    };
                    return (
                      <div key={index} className={sessionContainerClassName}>
                        <Grid
                          container
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid item xs={6} sm={12}>
                            <Text>Session #{index + 1}</Text>
                          </Grid>
                          <Hidden smUp>
                            <Grid item xs>
                              <Grid container justify="flex-end">
                                <Grid item>
                                  <DeleteButton onClick={removeSession} />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Hidden>
                        </Grid>
                        <Grid container justify="space-between" spacing={8}>
                          <Grid item xs={12} sm={3}>
                            <FormFieldArray<ClassSessionsInput, ClassSession>
                              name="sessions"
                              property="day"
                              index={index}
                              errors={errors}
                              touched={touched}
                            >
                              {({ field }) => (
                                <Select
                                  {...field}
                                  options={dayOptions}
                                  label="Day of the week"
                                />
                              )}
                            </FormFieldArray>
                          </Grid>

                          <Grid item xs={6} sm={3}>
                            <FormFieldArray<ClassSessionsInput, ClassSession>
                              name="sessions"
                              property="startTime"
                              index={index}
                              errors={errors}
                              touched={touched}
                            >
                              {({ field }) => (
                                <Select
                                  {...field}
                                  options={sessionTimeOptions}
                                  label="Start time"
                                />
                              )}
                            </FormFieldArray>
                          </Grid>

                          <Grid item xs={6} sm={3}>
                            <FormFieldArray<ClassSessionsInput, ClassSession>
                              name="sessions"
                              property="endTime"
                              index={index}
                              errors={errors}
                              touched={touched}
                            >
                              {({ field }) => (
                                <Select
                                  {...field}
                                  options={sessionTimeOptions}
                                  label="End time"
                                />
                              )}
                            </FormFieldArray>
                          </Grid>

                          <Grid item xs={12} sm={2}>
                            <FormFieldArray<ClassSessionsInput, ClassSession>
                              name="sessions"
                              property="capacity"
                              index={index}
                              errors={errors}
                              touched={touched}
                            >
                              {({ field }) => (
                                <TextInput
                                  {...field}
                                  type="number"
                                  label="No. of learners"
                                />
                              )}
                            </FormFieldArray>
                          </Grid>

                            <Grid
                              container
                              item
                              xs={12}
                              sm={1}
                              alignItems="center"
                            >
                            <Hidden xsDown>
                              <Grid item xs>
                                <DeleteButton onClick={removeSession} />
                              </Grid>
                              </Hidden>
                            </Grid>

                        </Grid>
                      </div>
                    );
                  })}
                <Grid container justify="flex-end">
                  <Grid item>
                    <Button
                      fullWidth={false}
                      onClick={() => arrayHelpers.push(emptySession)}
                    >
                      Add session
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ClassSessions;
