import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import useHostClassNav from '../hooks/useHostClassNav';
import ClassDetails from './ClassDetails';
import ClassSummary from './ClassSummary';
import ClassTimes from './ClassTimes';
import Navigation from './Navigation';
import { HostClassInput } from './types';

const HostClassSchema = Yup.object().shape({
  className: Yup.string().required('Class name is required'),
  classCategory: Yup.string().required('Class category is required'),
  classDescription: Yup.string()
});

// TOTEST
const HostClassForm: React.FunctionComponent = () => {
  const { currentFormPart } = useHostClassNav();
  return (
    <Formik<HostClassInput>
      initialValues={{
        className: '',
        classCategory: '',
        classDescription: ''
      }}
      validationSchema={HostClassSchema}
      onSubmit={() => {}}
    >
      {formikProps => (
        <Form>
          {currentFormPart === 'details' && (
            <ClassDetails formikProps={formikProps} />
          )}
          {currentFormPart === 'time' && <ClassTimes />}
          {currentFormPart === 'summary' && <ClassSummary />}

          <Navigation />
        </Form>
      )}
    </Formik>
  );
};

export default HostClassForm;
