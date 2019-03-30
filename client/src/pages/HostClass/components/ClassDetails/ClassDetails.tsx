import React from 'react';
import { GoNextFn } from '../../handlers/createGoNextFn';
import { ClassDetailsInput } from '../../types';
import ClassCategoriesQuery from './ClassCategoriesQuery';
import ClassDetailsForm from './ClassDetailsForm';

export interface ClassDetailsProps {
  initialValues: ClassDetailsInput;
  goNext: GoNextFn<ClassDetailsInput>;
}

const ClassDetails: React.FunctionComponent<ClassDetailsProps> = ({
  initialValues,
  goNext
}) => {
  return (
    <ClassCategoriesQuery>
      {result => (
        <ClassDetailsForm
          categoryResult={result}
          initialValues={initialValues}
          goNext={goNext}
        />
      )}
    </ClassCategoriesQuery>
  );
};

export default ClassDetails;
