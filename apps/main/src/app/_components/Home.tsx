'use client';

import type { FC } from 'react';
import { errorMessage } from '@bam/shared-config';
import { useHomeQuery } from './Home.generated';

export const Home: FC = () => {
  const { data, error, loading } = useHomeQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (data.users.__typename === 'ResultError') {
    return <div>{errorMessage(data.users.error)}</div>;
  }

  if (data.users.result.length > 0) {
    return (
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
    );
  }

  return <div>No user found!</div>;
};
