import Box from '@material-ui/core/Box';
import H1 from 'common/components/H1';
import Main from 'common/components/Main';
import ViewerContext from 'common/components/ViewerContext';
import { linkgen, Paths } from 'common/helpers/pathing';
import useHistory from 'common/hooks/useHistory';
import ClassDetails from 'pages/HostClass/components/ClassDetails';
import ClassSaveMutation from 'pages/HostClass/components/ClassSaveMutation';
import ClassSessions from 'pages/HostClass/components/ClassSessions';
import ClassSummary from 'pages/HostClass/components/ClassSummary';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import ClassContact from './components/ClassContact';
import { defaultFormPart } from './constants';
import createHostClassSubmitFn from './functionCreators/createHostClassSubmitFn';
import createNavFns from './functionCreators/createNavFns';
import linkgenHostClass from './helpers/linkgenHostClass';
import useHostClassNav from './hooks/useHostClassNav';
import useHostClassParams from './hooks/useHostClassParams';
import useHostClassState from './hooks/useHostClassState';

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

  // TODO: check that classId is valid by querying the graph. If not valid / not found, show 404
  if (!params.formPart) {
    return <Redirect to={linkgenHostClass(defaultFormPart, params.classId)} />;
  }

  const navFnsCommonParams = {
    history,
    next,
    previous
  };

  const detailsNavFns = createNavFns({
    setValue: setSubformValues.details,
    ...navFnsCommonParams
  });
  const contactNavFns = createNavFns({
    setValue: setSubformValues.contact,
    ...navFnsCommonParams
  });
  const sessionsNavFns = createNavFns({
    setValue: setSubformValues.sessions,
    ...navFnsCommonParams
  });
  const summaryNavFns = createNavFns({
    setValue: setFormValues,
    ...navFnsCommonParams
  });

  return (
    <Main>
      <Box pt={3} />

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
        <ClassSaveMutation>
          {(classSaveFn, classSaveResult) => (
            <ClassSummary
              values={values}
              classSaveResult={classSaveResult}
              goNext={createHostClassSubmitFn(classSaveFn, values, history)}
              goPrevious={summaryNavFns.goPrevious}
            />
          )}
        </ClassSaveMutation>
      )}
    </Main>
  );
};

export default HostClass;
