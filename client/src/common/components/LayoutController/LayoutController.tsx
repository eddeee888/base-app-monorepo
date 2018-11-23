import React from 'react';
import { Route } from 'react-router';
import Header from 'src/common/components/Header';
import getLayoutConfig from './getLayoutConfig';

const LayoutController: React.FunctionComponent = ({ children }) => {
  return (
    <Route path="/">
      {({ location }) => {
        const layoutConfig = getLayoutConfig(location.pathname);
        return (
          <>
            {layoutConfig.header.display && <Header />}
            {children}
          </>
        );
      }}
    </Route>
  );
};

export default LayoutController;
