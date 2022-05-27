import type { FunctionComponent } from 'react';
import { errorMessage } from '@bam/shared-config';
import { useHomeQuery } from './Home.generated';

export const Home: FunctionComponent = () => {
  const { data, error, loading } = useHomeQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (data.users.__typename === 'UsersError') {
    return <div>{errorMessage(data.users.error)}</div>;
  }

  return (
    <div>
      <h1>Welcome!</h1>

      {data.users.result.length > 0 && (
        <>
          <div>User list:</div>
          <ul>
            {data.users.result.map((user) => (
              <li key={user.id}>
                {user.id} - {user.displayName}
              </li>
            ))}
          </ul>
        </>
      )}

      {data.users.result.length === 0 && <div>No user found!</div>}
    </div>
  );
};
