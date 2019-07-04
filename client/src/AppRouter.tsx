import LayoutController from 'common/components/LayoutController';
import { routes } from 'common/helpers/pathing';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import Signup from 'pages/Signup';
import Users from 'pages/Users';
import PageNotFound from 'pages/PageNotFound';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter: React.FunctionComponent = () => (
  <BrowserRouter>
    <LayoutController>
      <Switch>
        <Route exact path={routes.home.pattern} component={Home} />
        <Route path={routes.login.pattern} component={Login} />
        <Route path={routes.signup.pattern} component={Signup} />
        <Route path={routes.logout.pattern} component={Logout} />
        <Route path={routes.users.pattern} component={Users} />
        <Route component={PageNotFound} />
      </Switch>
    </LayoutController>
  </BrowserRouter>
);

export default AppRouter;
