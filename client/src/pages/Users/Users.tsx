import React from 'react';
import Main from 'common/components/Main';
import Block from 'common/components/Block';
import { routes } from 'common/pathing';
import Paper from 'common/components/Paper';
import H1 from 'common/components/H1';
import Divider from 'common/components/Divider';

const Users: React.FunctionComponent = () => {
  const { userId } = routes.users.useParams();

  return (
    <Main>
      <Block size="md">
          <Paper>
            <H1>{userId}</H1>
            <Divider />
          </Paper>
      </Block>
    </Main>
  );
};

export default Users;
