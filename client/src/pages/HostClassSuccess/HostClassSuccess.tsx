import Block from 'common/components/Block';
import Main from 'common/components/Main';
import Paper from 'common/components/Paper';
import useParams from 'common/hooks/useParams';
import React from 'react';

interface HostClassSuccessParams {
  classId: string;
}

const HostClassSuccess: React.FunctionComponent = () => {
  const { classId } = useParams<HostClassSuccessParams>();
  return (
    <Main fullViewPortHeight>
      <Block size="sm" fullHeight>
        <Paper>YO! tabjs! {classId}</Paper>
      </Block>
    </Main>
  );
};

export default HostClassSuccess;
