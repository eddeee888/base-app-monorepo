import React from 'react';
import { ClassDetailsInput, SetFormPartValues } from '../../types';
import ClassCategoriesQuery from './ClassCategoriesQuery';
import ClassDetailsForm from './ClassDetailsForm';

interface Props {
  initialValues: ClassDetailsInput;
  setValues: SetFormPartValues<ClassDetailsInput>;
}

const ClassDetails: React.FunctionComponent<Props> = ({
  initialValues,
  setValues
}) => {
  return (
    <ClassCategoriesQuery>
      {result => (
        <ClassDetailsForm
          categoryResult={result}
          initialValues={initialValues}
          setValues={setValues}
        />
      )}
    </ClassCategoriesQuery>
  );
};

export default ClassDetails;
