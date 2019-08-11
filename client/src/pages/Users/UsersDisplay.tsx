import React from 'react';
import H1 from 'common/components/H1';
import Paper from 'common/components/Paper';
import Divider from 'common/components/Divider';
import Spinner from 'common/components/Spinner';
import Error404 from 'common/components/Error404';
import H2 from 'common/components/H2';
import Text from 'common/components/Text';
import {
  UserAndClassesCreatedQueryResult,
  DeleteClassMutationFn
} from 'pages/Users/Operations.generated';
import ClassRow from 'pages/Users/ClassRow';
import createDeleteClassFunction from 'pages/Users/createDeleteClassFunction';

type Props = Pick<
  UserAndClassesCreatedQueryResult,
  'error' | 'loading' | 'data'
> & { deleteClassFn: DeleteClassMutationFn };

const UsersDisplay: React.FunctionComponent<Props> = ({
  error,
  loading,
  data,
  deleteClassFn
}) => {
  if (error) {
    return <Error404 />;
  }
  if (loading) {
    return <Spinner />;
  }

  if (!data || !data.user) {
    return <Error404 />;
  }

  const activeClasses = data.classesCreatedByUser.classes.filter(
    classObj => !classObj.isDeleted
  );

  return (
    <Paper>
      <H1>{`${data.user.firstName} ${data.user.lastName}`}</H1>
      <Divider />
      <H2>Your classes</H2>
      {activeClasses.length === 0 && <Text>No class found.</Text>}
      {activeClasses.length > 0 &&
        activeClasses.map(classData =>
          !classData.isDeleted ? (
            <ClassRow
              key={classData.id}
              {...classData}
              deleteClass={createDeleteClassFunction(deleteClassFn, classData)}
            />
          ) : null
        )}
    </Paper>
  );
};

export default UsersDisplay;
