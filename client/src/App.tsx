import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from 'common/components/ErrorBoundary';
import Spinner from 'common/ui/Spinner';
import RouteToLogin from 'routes/RouteToLogin';
import RouteToSignup from 'routes/RouteToSignup';
import RouteToLogout from 'routes/RouteToLogout';
import RouteToMe from 'routes/RouteToMe';

const Login = lazy(() => import('pages/Login'));
const Logout = lazy(() => import('pages/Logout'));
const Signup = lazy(() => import('pages/Signup'));
const Me = lazy(() => import('pages/Me'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));

const App: React.FunctionComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner size="fullPage" />}>
      <Switch>
        <Route path={RouteToMe.pattern} component={Me} />
        <Route path={RouteToLogin.pattern} component={Login} />
        <Route path={RouteToSignup.pattern} component={Signup} />
        <Route path={RouteToLogout.pattern} component={Logout} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default App;
