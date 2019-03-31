import { Field, FieldArray, FieldProps, Form, Formik, getIn } from 'formik';
import React from 'react';
import FormError from 'src/common/components/FormError';
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

interface ClassSessionsProps<I> {
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
const ClassSessions: React.FunctionComponent<
  ClassSessionsProps<ClassSessionsInput>
> = ({ initialValues }) => {
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
                  values.sessions.length > 0 &&
                  values.sessions.map((session, index) => (
                    <div key={index}>
                      <Field name={`sessions.${index}.day`}>
                        {({ field, form }: FieldProps<ClassSession>) => (
                          <>
                            <Select {...field} options={dayOptions} />
                            {getIn(touched, `sessions.${index}.day`) && (
                              <FormError
                                error={getIn(errors, `sessions.${index}.day`)}
                              />
                            )}
                          </>
                        )}
                      </Field>

                      <Field name={`sessions.${index}.startTime`}>
                        {({ field, form }: FieldProps<ClassSession>) => (
                          <>
                            <Select {...field} options={sessionTimeOptions} />
                            {getIn(touched, `sessions.${index}.startTime`) && (
                              <FormError
                                error={getIn(
                                  errors,
                                  `sessions.${index}.startTime`
                                )}
                              />
                            )}
                          </>
                        )}
                      </Field>

                      <Field name={`sessions.${index}.endTime`}>
                        {({ field, form }: FieldProps<ClassSession>) => (
                          <>
                            <Select {...field} options={sessionTimeOptions} />
                            {getIn(touched, `sessions.${index}.endTime`) && (
                              <FormError
                                error={getIn(
                                  errors,
                                  `sessions.${index}.endTime`
                                )}
                              />
                            )}
                          </>
                        )}
                      </Field>

                      <Field name={`sessions.${index}.capacity`}>
                        {({ field, form }: FieldProps<ClassSession>) => (
                          <>
                            <TextInput {...field} type="number" />
                            {getIn(touched, `sessions.${index}.capacity`) && (
                              <FormError
                                error={getIn(
                                  errors,
                                  `sessions.${index}.capacity`
                                )}
                              />
                            )}
                          </>
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
