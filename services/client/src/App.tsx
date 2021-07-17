import { lazy, Suspense, FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { ErrorBoundary, Header, ShowHeader } from "@/common";
import { Spinner } from "@/shared/ui";
import { patternMe } from "@/routes";

const Me = lazy(() => import("@/pages/Me"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));

const App: FunctionComponent = () => (
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
