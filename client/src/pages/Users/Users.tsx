import React from 'react';
import Main from 'common/components/Main';
import Block from 'common/components/Block';
import useParams from 'common/hooks/useParams';
import { UsersParams } from 'common/helpers/pathing/routes';
import Error404 from 'common/components/Error404';
import { useViewer } from 'common/components/ViewerContext';
import UsersDisplay from './components/UsersDisplay';
import { GetUserQueryComponent } from './GetUser.generated';

const Users: React.FunctionComponent = () => {
  const { userId } = useParams<UsersParams>();
  const { viewer } = useViewer();

  const effectiveUserId = userId ? userId : viewer ? viewer.id : null;

  if (!effectiveUserId) {
    return <Error404 />;
  }

  return (
    <Main>
      <Block size="md">
        <GetUserQueryComponent
          variables={{
            id: effectiveUserId 
          }}
        >
          {({ loading, error, data }) => {
            return <UsersDisplay loading={loading} error={error} data={data} />;
          }}
        </GetUserQueryComponent>
      </Block>
    </Main>
  );
};

export default Users;
