import React from 'react';
import { NavFns } from '../../handlers/createNavFns';
import { ClassDetailsInput } from '../../types';
import ClassCategoriesQuery from '../ClassCategoriesQuery';
import ClassDetailsForm from './ClassDetailsForm';

export interface ClassDetailsProps<I> {
  initialValues: I;
  goNext: NavFns<I>['goNext'];
}

const ClassDetails: React.FunctionComponent<
  ClassDetailsProps<ClassDetailsInput>
> = ({ initialValues, goNext }) => (
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

export default ClassDetails;
