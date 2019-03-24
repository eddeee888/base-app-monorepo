import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ClassGeneralDetails from './ClassGeneralDetails';

// TOTEST

export interface CreateClassInput {
  className: string;
  classCategory: string;
  classDescription: string;
}

const CreateClassSchema = Yup.object().shape({
  className: Yup.string().required('Class name is required'),
  classCategory: Yup.string().required('Class category is required')
});

const CreateClassForm: React.FunctionComponent = () => {
  return (
    <Formik<CreateClassInput>
      initialValues={{
        className: '',
        classCategory: '',
        classDescription: ''
      }}
      validationSchema={CreateClassSchema}
      onSubmit={() => {}}
    >
      {formikProps => <ClassGeneralDetails formikProps={formikProps} />}
    </Formik>
  );
};

export default CreateClassForm;
