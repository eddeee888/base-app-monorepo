import { routes } from 'common/pathing';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import Signup from 'pages/Signup';
import PageNotFound from 'pages/PageNotFound';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from 'common/components/Header';
import Me from 'pages/Me';

const AppRouter: React.FunctionComponent = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path={routes.home.pattern} component={Home} />
      <Route exact path={routes.me.pattern} component={Me} />
      <Route path={routes.login.pattern} component={Login} />
      <Route path={routes.signup.pattern} component={Signup} />
      <Route path={routes.logout.pattern} component={Logout} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
