import { Field, FieldArray, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import Select from 'src/common/components/Select/Select';
import * as Yup from 'yup';
import { dayOptions } from '../../constants';
import { ClassSession, ClassSessionsInput } from '../../types';

interface ClassSessionsProps<I> {
  initialValues: I;
}

const validationSchema = Yup.object().shape<ClassSessionsInput>({
  sessions: Yup.array().of(
    Yup.object().shape<ClassSession>({
      day: Yup.mixed().required('Day of the week is required'),
      startTime: Yup.mixed().required('Start time is required'),
      endTime: Yup.mixed().required('End time is required'),
      capacity: Yup.number().required('Capacity is required')
    })
  )
});

// TODO: implement me
const ClassSessions: React.FunctionComponent<
  ClassSessionsProps<ClassSessionsInput>
> = ({ initialValues }) => {
  return (
    <Formik<ClassSessionsInput>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ values }) => (
        <Form>
          <FieldArray
            name="sesssions"
            render={arrayHelpers => (
              <div>
                {values.sessions &&
                  values.sessions.length > 0 &&
                  values.sessions.map((session, index) => (
                    <div key={index}>
                      {console.warn(session)}
                      <Field name={`sessions.${index}.day`}>
                        {({ field }: FieldProps<ClassSession>) => (
                          <Select {...field} options={dayOptions} />
                        )}
                      </Field>
                    </div>
                  ))}
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ClassSessions;
