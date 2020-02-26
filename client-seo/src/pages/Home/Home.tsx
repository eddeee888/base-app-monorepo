import React from 'react';
import { useViewerQuery } from 'src/pages/Home/Home.generated';
import ErrorGeneric from 'src/common/components/ErrorGeneric';
import Spinner from 'src/common/ui/Spinner';
import Header from 'src/common/components/Header';
import withApollo from 'src/common/apollo/withApollo';
import Main from 'src/common/ui/Main';
import Block from 'src/common/ui/Block';

const Home: React.FunctionComponent = () => {
  const { loading, error, data } = useViewerQuery();

  if (error) {
    return <ErrorGeneric />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (!data) {
    return <ErrorGeneric />;
  }

  const viewer = data.me ? { ...data.me } : null;

  return (
    <>
      <Header viewer={viewer} />
      <Main fullWidth>
        <Block size="lg">Welcome!</Block>
      </Main>
    </>
  );
};

export default withApollo(Home);
