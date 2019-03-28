import React from 'react';
import { ClassDetailsInput, SetFormPartValues } from '../../types';
import ClassCategoriesQuery from './ClassCategoriesQuery';
import ClassDetailsForm from './ClassDetaillsForm';

interface Props {
  setValues: SetFormPartValues<ClassDetailsInput>;
}

const ClassDetails: React.FunctionComponent<Props> = ({ setValues }) => {
  return (
    <ClassCategoriesQuery>
      {result => (
        <>
          <ClassDetailsForm categoryResult={result} setValues={setValues} />
        </>
      )}
    </ClassCategoriesQuery>
  );
};

export default ClassDetails;
