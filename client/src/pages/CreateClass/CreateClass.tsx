import { css } from 'emotion';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import H1 from 'src/common/components/H1';
import Main from 'src/common/components/Main';
import Paper from 'src/common/components/Paper';
import ViewerContext from 'src/common/components/ViewerContext';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import { spacingRem } from 'src/common/helpers/spacing';
import { breakpoints } from 'src/common/styles/media';
import CreateClassForm from './CreateClassForm';

const mainContentClassName = css`
  padding-top: ${spacingRem(3)}rem;
`;

const paperContainerClassName = css`
  max-width: ${breakpoints.small}px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateClass: React.FunctionComponent = () => {
  const { viewer } = useContext(ViewerContext);
  // TOTEST
  if (!viewer) {
    return (
      <Redirect
        to={linkgen(Paths.signup, { query: { redirect: Paths.createClass } })}
      />
    );
  }

  return (
    <Main>
      <div className={mainContentClassName}>
        <H1 align="center">Create a class</H1>
        <div className={paperContainerClassName}>
          <Paper>
            <CreateClassForm />
          </Paper>
        </div>
      </div>
    </Main>
  );
};

export default CreateClass;
