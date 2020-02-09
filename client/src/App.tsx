import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'common/pathing';
import ErrorBoundary from 'common/components/ErrorBoundary';
import Spinner from 'common/ui/Spinner';

const Login = lazy(() => import('pages/Login'));
const Logout = lazy(() => import('pages/Logout'));
const Signup = lazy(() => import('pages/Signup'));
const Me = lazy(() => import('pages/Me'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));

const App: React.FunctionComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner size="fullPage" />}>
      <Switch>
        <Route path={routes.me.pattern} component={Me} />
        <Route path={routes.login.pattern} component={Login} />
        <Route path={routes.signup.pattern} component={Signup} />
        <Route path={routes.logout.pattern} component={Logout} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default App;
