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
import ClassDetails from './ClassDetails';
import { defaultFormPart } from './constants';
import linkgenHostClass from './helper/linkgenHostClass';
import useHostClassNav from './hooks/useHostClassNav';
import useHostClassParams from './hooks/useHostClassParams';

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

const HostClass: React.FunctionComponent = () => {
  const { viewer } = useContext(ViewerContext);
  const params = useHostClassParams();

  // TOTEST
  const { currentFormPart } = useHostClassNav();

  if (!viewer) {
    return (
      <Redirect
        to={linkgen(Paths.signup, { query: { redirect: Paths.hostClass } })}
      />
    );
  }

  if (!params.formPart) {
    return <Redirect to={linkgenHostClass(defaultFormPart, params.classId)} />;
  }

  return (
    <Main>
      <div className={mainContentClassName}>
        <H1 align="center">Host a class</H1>
        <div className={paperContainerClassName}>
          <Paper>{currentFormPart === 'details' && <ClassDetails />}</Paper>
        </div>
      </div>
    </Main>
  );
};

export default HostClass;
