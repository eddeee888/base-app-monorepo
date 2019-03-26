import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import useHostClassNav from '../hooks/useHostClassNav';
import ClassCategoriesQuery from './ClassCategoriesQuery';
import HostClassFormComponent from './HostClassFormComponent';
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
    <ClassCategoriesQuery>
      {categoriesResult => (
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
              <HostClassFormComponent
                categoriesResult={categoriesResult}
                formikProps={formikProps}
                currentFormPart={currentFormPart}
              />
            </Form>
          )}
        </Formik>
      )}
    </ClassCategoriesQuery>
  );
};

export default HostClassForm;
