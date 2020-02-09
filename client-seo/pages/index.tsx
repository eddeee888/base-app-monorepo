import React from 'react';
import Header from '../src/common/components/Header';
import ErrorGeneric from '../src/common/components/ErrorGeneric';
import Spinner from '../src/common/ui/Spinner';
import withApollo from '../src/common/apollo/withApollo';
import { useViewerQuery } from './index.generated';

const Home: React.FunctionComponent = () => {
  const { loading, error, data } = useViewerQuery();

  if (error) {
    return <ErrorGeneric />;
  }

  if (loading) {
    return <Spinner />;
  }

  const viewer = data.me ? { ...data.me } : null;

  return (
    <Header viewer={viewer}>
      <div>Welcome to Next.js!</div>
    </Header>
  );
};

export default withApollo(Home);
