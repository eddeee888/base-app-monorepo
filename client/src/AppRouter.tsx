import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import Logout from 'src/pages/Logout';
import Signup from 'src/pages/Signup';
import LayoutController from './common/components/LayoutController';

const AppRouter = () => (
  <BrowserRouter>
    <LayoutController>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/signup/" component={Signup} />
        <Route path="/logout/" component={Logout} />
      </Switch>
    </LayoutController>
  </BrowserRouter>
);

export default AppRouter;
