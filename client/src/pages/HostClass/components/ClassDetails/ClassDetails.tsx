import React from 'react';
import { ClassDetailsInput, UpdateState } from '../../types';
import ClassCategoriesQuery from './ClassCategoriesQuery';
import ClassDetailsForm from './ClassDetaillsForm';

interface Props {
  updateState: UpdateState<ClassDetailsInput>;
}

// TOTEST
const ClassDetails: React.FunctionComponent<Props> = ({ updateState }) => {
  return (
    <ClassCategoriesQuery>
      {result => (
        <ClassDetailsForm categoryResult={result} updateState={updateState} />
      )}
    </ClassCategoriesQuery>
  );
};

export default ClassDetails;
