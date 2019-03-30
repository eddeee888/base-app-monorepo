import { Form, Formik } from 'formik';
import React from 'react';
import { ClassSessionsInput } from '../../types';
import SessionBlock from './SessionBlock';

interface ClassSessionsProps<I> {
  initialValues: I;
}

// TODO: implement me
const ClassSessions: React.FunctionComponent<
  ClassSessionsProps<ClassSessionsInput>
> = ({ initialValues }) => {
  return (
    <Formik<ClassSessionsInput>
      initialValues={initialValues}
      onSubmit={() => {}}
    >
      {({ errors, touched, values }) => (
        <Form>
          {values.map((session, index) => (
            <SessionBlock
              session={session}
              errors={errors[index]}
              touched={touched[index]}
            />
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default ClassSessions;
