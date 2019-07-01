import React from 'react';
import H1 from 'common/components/H1';
import Paper from 'common/components/Paper';
import Divider from 'common/components/Divider';
import Spinner from 'common/components/Spinner';
import Error404 from 'common/components/Error404';
import { GetUserQueryResult } from 'pages/Users/GetUser.generated';

type Props = Pick< GetUserQueryResult, 'error' | 'loading' | 'data'>;

const UsersDisplay: React.FunctionComponent<Props> = ({
  error,
  loading,
  data
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
  return (
    <Paper>
      <H1>{`${data.user.firstName} ${data.user.lastName}`}</H1>
      <Divider />
    </Paper>
  );
};

export default UsersDisplay;
