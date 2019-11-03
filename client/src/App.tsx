import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'common/pathing';
import ErrorBoundary from 'common/components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Logout = lazy(() => import('pages/Logout'));
const Signup = lazy(() => import('pages/Signup'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));
const Me = lazy(() => import('pages/Me'));
const MeUploadAvatar = lazy(() => import('pages/MeUploadAvatar'));

const App: React.FunctionComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path={routes.home.pattern} component={Home} />
        <Route exact path={routes.me.pattern} component={Me} />
        <Route
          exact
          path={routes.meUploadAvatar.pattern}
          component={MeUploadAvatar}
        />
        <Route path={routes.login.pattern} component={Login} />
        <Route path={routes.signup.pattern} component={Signup} />
        <Route path={routes.logout.pattern} component={Logout} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default App;
