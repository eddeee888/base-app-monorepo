import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import H1 from 'src/common/components/H1';
import Main from 'src/common/components/Main';
import ViewerContext from 'src/common/components/ViewerContext';
import { linkgen, Paths } from 'src/common/helpers/pathing';

const CreateClass: React.FunctionComponent = () => {
  const { viewer } = useContext(ViewerContext);

  if (!viewer) {
    return (
      <Redirect
        to={linkgen(Paths.signup, { query: { redirect: Paths.createClass } })}
      />
    );
  }

  return (
    <Main>
      <H1 align="center">Create a class</H1>
    </Main>
  );
};

export default CreateClass;
