import React from 'react';
import { NavFunctions } from '../../handlers/createNavFunctions';
import { ClassDetailsInput } from '../../types';
import ClassCategoriesQuery from './ClassCategoriesQuery';
import ClassDetailsForm from './ClassDetailsForm';

export interface ClassDetailsProps<I> {
  initialValues: I;
  goNext: NavFunctions<I>['goNext'];
}

const ClassDetails: React.FunctionComponent<
  ClassDetailsProps<ClassDetailsInput>
> = ({ initialValues, goNext }) => {
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
