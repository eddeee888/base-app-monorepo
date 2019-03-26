import { FormikProps } from 'formik';
import React from 'react';
import Text from 'src/common/components/Text';
import { HostClassFormPart } from '../types';
import { ClassCategoryQueryResult } from './ClassCategoriesQuery';
import ClassDetails from './ClassDetails';
import ClassSummary from './ClassSummary';
import ClassTimes from './ClassTimes';
import Navigation from './Navigation';
import { HostClassInput } from './types';

interface Props {
  categoriesResult: ClassCategoryQueryResult;
  currentFormPart?: HostClassFormPart;
  formikProps: FormikProps<HostClassInput>;
}

const HostClassFormComponent: React.FunctionComponent<Props> = ({
  categoriesResult,
  currentFormPart,
  formikProps
}) => {
  const { error, loading } = categoriesResult;

  if (error) {
    return (
      <Text align="center">
        Unexpected error occurred. Please try again later.
      </Text>
    );
  }

  return (
    <>
      {currentFormPart === 'details' && (
        <ClassDetails
          formikProps={formikProps}
          categoriesResult={categoriesResult}
        />
      )}
      {currentFormPart === 'time' && <ClassTimes />}
      {currentFormPart === 'summary' && <ClassSummary />}
      {!loading && <Navigation />}
    </>
  );
};

export default HostClassFormComponent;
