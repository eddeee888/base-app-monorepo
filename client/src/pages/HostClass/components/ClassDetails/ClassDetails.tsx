import React from 'react';
import { NavFns } from '../../functionCreators/createNavFns';
import { FormClassDetailsInput } from '../../types';
import ClassCategoriesQuery from '../ClassCategoriesQuery';
import ClassDetailsForm from './ClassDetailsForm';

export interface ClassDetailsProps<I> {
  initialValues: I;
  goNext: NavFns<I>['goNext'];
}

const ClassDetails: React.FunctionComponent<
  ClassDetailsProps<FormClassDetailsInput>
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
