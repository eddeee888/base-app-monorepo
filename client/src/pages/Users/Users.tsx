import React from 'react';
import Main from 'common/components/Main';
import Block from 'common/components/Block';
import Error404 from 'common/components/Error404';
import UsersDisplay from './UsersDisplay';
import {
  UserAndClassesCreatedComponent,
  DeleteClassComponent
} from './Operations.generated';
import useEffectiveUserId from './useEffectiveUserId';

const Users: React.FunctionComponent = () => {
  const effectiveUserId = useEffectiveUserId();

  if (!effectiveUserId) {
    return <Error404 />;
  }

  return (
    <Main>
      <Block size="md">
        <UserAndClassesCreatedComponent
          variables={{
            id: effectiveUserId,
            classesCreatedInput: { userId: effectiveUserId }
          }}
          fetchPolicy="network-only"
        >
          {({ loading, error, data }) => (
            <DeleteClassComponent>
              {deleteClassFn => (
                <UsersDisplay
                  loading={loading}
                  error={error}
                  data={data}
                  deleteClassFn={deleteClassFn}
                />
              )}
            </DeleteClassComponent>
          )}
        </UserAndClassesCreatedComponent>
      </Block>
    </Main>
  );
};

export default Users;
