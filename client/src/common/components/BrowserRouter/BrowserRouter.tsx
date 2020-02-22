import React, { FunctionComponent } from 'react';
import { BrowserRouter as DefaultBrowserRouter, BrowserRouterProps } from 'react-router-dom';

const BrowserRouter: FunctionComponent<BrowserRouterProps> = props => <DefaultBrowserRouter {...props} />;

export default BrowserRouter;
