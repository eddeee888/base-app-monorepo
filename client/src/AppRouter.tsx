import LayoutController from 'common/components/LayoutController';
import { linkgen, Paths } from 'common/helpers/pathing';
import Home from 'pages/Home';
import HostClass from 'pages/HostClass';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import Signup from 'pages/Signup';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <LayoutController>
      <Switch>
        <Route exact path={linkgen(Paths.home)} component={Home} />
        <Route path={linkgen(Paths.login)} component={Login} />
        <Route path={linkgen(Paths.signup)} component={Signup} />
        <Route path={linkgen(Paths.logout)} component={Logout} />
        <Route
          exact
          path={[
            linkgen(Paths.hostClass),
            linkgen(Paths.hostClass) +
              '/:formPart(details|contact|sessions|summary)?',
            linkgen(Paths.hostClass) +
              '/:classId?/:formPart(details|contact|sessions|summary)?'
          ]}
          component={HostClass}
        />
      </Switch>
    </LayoutController>
  </BrowserRouter>
);

export default AppRouter;
