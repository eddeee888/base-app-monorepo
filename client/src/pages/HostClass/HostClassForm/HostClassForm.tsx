import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ClassDetails from './ClassDetails';
import Navigation from './Navigation';
import { HostClassInput } from './types';

const HostClassSchema = Yup.object().shape({
  className: Yup.string().required('Class name is required'),
  classCategory: Yup.string().required('Class category is required')
});

// TOTEST
const HostClassForm: React.FunctionComponent = () => {
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
        <>
          <ClassDetails formikProps={formikProps} />
          <Navigation />
        </>
      )}
    </Formik>
  );
};

export default HostClassForm;
