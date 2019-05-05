import H1 from 'common/components/H1';
import React from 'react';
import { ClassQueryResult } from '../ClassQuery/ClassQuery';

interface Props {
  classQueryResult: ClassQueryResult;
}

const ClassesDisplay: React.FunctionComponent<Props> = ({
  classQueryResult: { data, loading, error }
}) => {
  if (error) {
    return <div>Error...</div>;
  }

  if (loading) {
    return <div>Loading ... </div>;
  }

  return <H1>{JSON.stringify(data)}</H1>;
};

export default ClassesDisplay;
