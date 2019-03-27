import React from 'react';
import Spinner from 'src/common/components/Spinner';
import Text from 'src/common/components/Text';
import ClassCategoriesQuery from './ClassCategoriesQuery';
import ClassDetailsForm from './ClassDetaillsForm';

// TOTEST
const ClassDetails: React.FunctionComponent = () => {
  return (
    <ClassCategoriesQuery>
      {({ error, loading, data }) => (
        <>
          {error && (
            <Text align="center">
              Unexpected error occurred. Please try again later.
            </Text>
          )}

          {loading && <Spinner fullWidth />}

          {!error && !loading && <ClassDetailsForm />}
        </>
      )}
    </ClassCategoriesQuery>
  );
};

export default ClassDetails;
