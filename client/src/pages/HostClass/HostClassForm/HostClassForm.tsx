import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ClassDetails from './ClassDetails';
import { HostClassInput } from './types';

// TOTEST

const HostClassSchema = Yup.object().shape({
  className: Yup.string().required('Class name is required'),
  classCategory: Yup.string().required('Class category is required')
});

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
      {formikProps => <ClassDetails formikProps={formikProps} />}
    </Formik>
  );
};

export default HostClassForm;
