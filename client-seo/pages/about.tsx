import React from 'react';
import withApollo from '../src/common/apollo/withApollo';

const About: React.FunctionComponent = () => {
  return <div>Welcome to Next.js!</div>;
};

export default withApollo(About);
