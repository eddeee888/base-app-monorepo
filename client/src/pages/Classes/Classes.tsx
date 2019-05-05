import Block from 'common/components/Block';
import Main from 'common/components/Main';
import useParams from 'common/hooks/useParams';
import React from 'react';
import ClassesDisplay from './components/ClassesDisplay';
import ClassQuery from './components/ClassQuery';

interface ClassesParams {
  classId: string;
}

const Classes: React.FunctionComponent = () => {
  const { classId } = useParams<ClassesParams>();
  return (
    <Main>
      <Block size="md">
        <ClassQuery variables={{ classId }}>
          {result => <ClassesDisplay classQueryResult={result} />}
        </ClassQuery>
      </Block>
    </Main>
  );
};

export default Classes;
