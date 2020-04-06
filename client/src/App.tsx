import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "common/components/ErrorBoundary";
import Spinner from "common/shared-ui/Spinner";
import { patternMe } from "routes/me/patternMe";
import { patternLogin } from "routes/login/patternLogin";
import { patternSignup } from "routes/signup/patternSignup";
import { patternLogout } from "routes/logout/patternLogout";

const Login = lazy(() => import("pages/Login"));
const Logout = lazy(() => import("pages/Logout"));
const Signup = lazy(() => import("pages/Signup"));
const Me = lazy(() => import("pages/Me"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));

const App: React.FunctionComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner size="fullPage" />}>
      <Switch>
        <Route path={patternMe} component={Me} />
        <Route path={patternLogin}>
          <Login />
        </Route>
        <Route path={patternSignup} component={Signup} />
        <Route path={patternLogout} component={Logout} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default App;
