import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import Block from 'src/common/components/Block';
import Paper from 'src/common/components/Paper';
import * as Yup from 'yup';
import { dayValues, sessionTimes } from '../../constants';
import { NavFunctions } from '../../handlers/createNavFunctions';
import { ClassSession, ClassSessionsInput } from '../../types';
import Navigation from '../Navigation';
import SessionBlocksContainer from './SessionBlocksContainer';

interface Props<I> {
  initialValues: I;
  goNext: NavFunctions<I>['goNext'];
  goPrevious: NavFunctions<I>['goPrevious'];
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

const ClassSessions: React.FunctionComponent<Props<ClassSessionsInput>> = ({
  initialValues,
  goNext,
  goPrevious
}) => {
  return (
    <Formik<ClassSessionsInput>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={goNext}
    >
      {({ values, errors, touched }) => (
        <Form>
          <Block size="md">
            <Paper>
              <FieldArray name="sessions">
                {arrayHelpers => {
                  return (
                    <SessionBlocksContainer
                      values={values}
                      arrayHelpers={arrayHelpers}
                      errors={errors}
                      touched={touched}
                    />
                  );
                }}
              </FieldArray>
            </Paper>

            <Navigation goPrevious={() => goPrevious(values)} />
          </Block>
        </Form>
      )}
    </Formik>
  );
};

export default ClassSessions;
