import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutController from 'src/common/components/LayoutController';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import CreateClass from 'src/pages/CreateClass';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import Logout from 'src/pages/Logout';
import Signup from 'src/pages/Signup';

const AppRouter = () => (
  <BrowserRouter>
    <LayoutController>
      <Switch>
        <Route exact path={linkgen(Paths.home)} component={Home} />
        <Route
          path={linkgen(Paths.login)}
          render={routerProps => <Login routerProps={routerProps} />}
        />
        <Route
          path={linkgen(Paths.signup)}
          render={routerProps => <Signup routerProps={routerProps} />}
        />
        <Route path={linkgen(Paths.logout)} component={Logout} />
        <Route path={linkgen(Paths.createClass)} component={CreateClass} />
      </Switch>
    </LayoutController>
  </BrowserRouter>
);

export default AppRouter;
