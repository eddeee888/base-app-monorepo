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
        <Route path={linkgen(Paths.login)} component={Login} />
        <Route path={linkgen(Paths.signup)} component={Signup} />
        <Route path={linkgen(Paths.logout)} component={Logout} />
        <Route
          exact
          path={[
            linkgen(Paths.createClass),
            linkgen(Paths.createClass) + '/:formPart(details|time)?',
            linkgen(Paths.createClass) + '/:classId?/:formPart(details|time)?'
          ]}
          component={CreateClass}
        />
      </Switch>
    </LayoutController>
  </BrowserRouter>
);

export default AppRouter;
