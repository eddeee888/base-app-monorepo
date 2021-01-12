import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "common/components/ErrorBoundary";
import Spinner from "common/shared-ui/Spinner";
import Header from "common/components/Header";
import { ShowHeader } from "common/components/LayoutContext";
import { patternMe } from "routes/me/patternMe";

const Me = lazy(() => import("pages/Me"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));

const App: React.FunctionComponent = () => (
  <ErrorBoundary>
    <Header />
    <Suspense fallback={<Spinner size="fullPage" />}>
      <Switch>
        <Route path={patternMe}>
          <ShowHeader />
          <Me />
        </Route>
        <Route>
          <ShowHeader />
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default App;
