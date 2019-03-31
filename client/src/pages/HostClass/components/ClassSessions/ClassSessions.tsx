import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import FormFieldArray from 'src/common/components/FormFieldArray';
import Select from 'src/common/components/Select/Select';
import TextInput from 'src/common/components/TextInput';
import * as Yup from 'yup';
import {
  dayOptions,
  dayValues,
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
        .typeError('Capacity must be a valid number')
        .min(1, 'Your session must allow more than one learner')
    })
  )
});

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
            name="sesssions"
            render={arrayHelpers => (
              <div>
                {values.sessions &&
                  values.sessions.map((session, index) => (
                    <div key={index}>
                      <FormFieldArray<ClassSessionsInput, ClassSession>
                        name="sessions"
                        property="day"
                        index={index}
                        errors={errors}
                        touched={touched}
                      >
                        {({ field }) => (
                          <Select {...field} options={dayOptions} />
                        )}
                      </FormFieldArray>

                      <FormFieldArray<ClassSessionsInput, ClassSession>
                        name="sessions"
                        property="startTime"
                        index={index}
                        errors={errors}
                        touched={touched}
                      >
                        {({ field }) => (
                          <Select {...field} options={sessionTimeOptions} />
                        )}
                      </FormFieldArray>

                      <FormFieldArray<ClassSessionsInput, ClassSession>
                        name="sessions"
                        property="endTime"
                        index={index}
                        errors={errors}
                        touched={touched}
                      >
                        {({ field }) => (
                          <Select {...field} options={sessionTimeOptions} />
                        )}
                      </FormFieldArray>

                      <FormFieldArray<ClassSessionsInput, ClassSession>
                        name="sessions"
                        property="capacity"
                        index={index}
                        errors={errors}
                        touched={touched}
                      >
                        {({ field }) => <TextInput {...field} type="number" />}
                      </FormFieldArray>
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
