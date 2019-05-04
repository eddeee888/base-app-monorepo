import A from 'common/components/A';
import Block from 'common/components/Block';
import H2 from 'common/components/H2';
import Main from 'common/components/Main';
import Paper from 'common/components/Paper';
import Text from 'common/components/Text';
import { linkgen, Paths } from 'common/helpers/pathing';
import useParams from 'common/hooks/useParams';
import React from 'react';

interface HostClassSuccessParams {
  classId: string;
}

const HostClassSuccess: React.FunctionComponent = () => {
  const { classId } = useParams<HostClassSuccessParams>();
  return (
    <Main fullViewPortHeight>
      <Block size="md" fullHeight>
        <Paper>
          <H2 align="center" variant="h4">
            Your class has been created!
          </H2>
          <Text align="center">
            Learners can join your class by going{' '}
            <A href={linkgen(Paths.classes, { params: [classId] })}>here</A>
          </Text>
          <Text align="center">
            Don't forget to share your class on social media! It's the easiest
            way to let your learners know about it!
          </Text>
        </Paper>
      </Block>
    </Main>
  );
};

export default HostClassSuccess;
