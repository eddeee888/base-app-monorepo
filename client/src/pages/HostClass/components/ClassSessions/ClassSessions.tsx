import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { dayValues, sessionTimes } from '../../constants';
import { ClassSession, ClassSessionsInput } from '../../types';
import SessionBlocksContainer from './SessionBlocksContainer';

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
        </Form>
      )}
    </Formik>
  );
};

export default ClassSessions;
