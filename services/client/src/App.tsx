import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "common/components/ErrorBoundary";
import Spinner from "common/shared-ui/Spinner";
import Header from "common/components/Header";
import { ShowHeader } from "common/components/HeaderProvider";
import { patternMe } from "routes/me/patternMe";

const Me = lazy(() => import("pages/Me"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));

const App: React.FunctionComponent = () => (
  <ErrorBoundary>
    <Header />
    <Suspense fallback={<Spinner size="fullPage" />}>
      <ShowHeader />
      <Switch>
        <Route path={patternMe} component={Me} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default App;
