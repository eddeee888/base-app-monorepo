import { css } from 'emotion';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import H1 from 'src/common/components/H1';
import Main from 'src/common/components/Main';
import ViewerContext from 'src/common/components/ViewerContext';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import { spacingRem } from 'src/common/helpers/spacing';
import useHistory from 'src/common/hooks/useHistory';
import ClassDetails from 'src/pages/HostClass/components/ClassDetails';
import ClassSessions from 'src/pages/HostClass/components/ClassSessions';
import ClassSummary from 'src/pages/HostClass/components/ClassSummary';
import ClassContact from './components/ClassContact';
import { defaultFormPart } from './constants';
import createNavFunctions from './handlers/createNavFunctions';
import linkgenHostClass from './helpers/linkgenHostClass';
import useHostClassNav from './hooks/useHostClassNav';
import useHostClassParams from './hooks/useHostClassParams';
import useHostClassState from './hooks/useHostClassState';

const mainContentClassName = css`
  padding-top: ${spacingRem(3)}rem;
`;

const HostClass: React.FunctionComponent = () => {
  const { viewer } = useContext(ViewerContext);
  const params = useHostClassParams();
  const { values, setFormValues, setSubformValues } = useHostClassState();
  const history = useHistory();
  const { next, previous } = useHostClassNav();

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

  const navFnsCommonParams = {
    history,
    next,
    previous
  };

  const detailsNavFns = createNavFunctions({
    setValue: setSubformValues.details,
    ...navFnsCommonParams
  });
  const contactNavFns = createNavFunctions({
    setValue: setSubformValues.contact,
    ...navFnsCommonParams
  });
  const sessionsNavFns = createNavFunctions({
    setValue: setSubformValues.sessions,
    ...navFnsCommonParams
  });
  const summaryNavFns = createNavFunctions({
    setValue: setFormValues,
    ...navFnsCommonParams
  });

  return (
    <Main>
      <div className={mainContentClassName}>
        <H1 align="center">Host a class</H1>
        {params.formPart === 'details' && (
          <ClassDetails
            initialValues={values.details}
            goNext={detailsNavFns.goNext}
          />
        )}
        {params.formPart === 'contact' && (
          <ClassContact
            initialValues={values.contact}
            goNext={contactNavFns.goNext}
            goPrevious={contactNavFns.goPrevious}
          />
        )}
        {params.formPart === 'sessions' && (
          <ClassSessions
            initialValues={values.sessions}
            goNext={sessionsNavFns.goNext}
            goPrevious={sessionsNavFns.goPrevious}
          />
        )}
        {params.formPart === 'summary' && (
          <ClassSummary
            values={values}
            goNext={() => {
              /* TODO: implement this */
            }}
            goPrevious={summaryNavFns.goPrevious}
          />
        )}
      </div>
    </Main>
  );
};

export default HostClass;
