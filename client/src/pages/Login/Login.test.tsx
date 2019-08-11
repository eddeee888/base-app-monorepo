import ViewerContext from 'common/components/ViewerContext';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { StaticRouter, MemoryRouter, Route } from 'react-router';
import Login from './Login';
import {
  assertTextExists,
  assertTextLink
} from 'test/utils/react-testing-library';
import { render } from '@testing-library/react';

describe('<Login />', () => {
  const contextValue = {
    viewer: null,
    setViewerValue: jest.fn()
  };

  it('should show login form if viewer is not logged in', () => {
    const { container } = render(
      <MockedProvider>
        <StaticRouter context={{}}>
          <ViewerContext.Provider value={contextValue}>
            <Login />
          </ViewerContext.Provider>
        </StaticRouter>
      </MockedProvider>
    );
    assertTextLink(container, {
      text: 'Sign up',
      href: '/signup'
    });
  });

  it('should redirect to dashboard if viewer is logged in', () => {
    const { container } = render(
      <MockedProvider>
        <ViewerContext.Provider
          value={{
            ...contextValue,
            viewer: { id: '100' }
          }}
        >
          <MemoryRouter initialEntries={['/login']}>
            <Route exact path="/users" render={() => <div>Redirected</div>} />
            <Route path="/login" render={() => <Login />} />
          </MemoryRouter>
        </ViewerContext.Provider>
      </MockedProvider>
    );
    assertTextExists(container, 'Redirected');
  });

  it('should redirect to where ever dictated by the Url Query', () => {
    const { container } = render(
      <MockedProvider>
        <ViewerContext.Provider
          value={{
            ...contextValue,
            viewer: { id: '100' }
          }}
        >
          <MemoryRouter
            initialEntries={['/login?redirect=/redirect-to-this-path']}
          >
            <Route
              exact
              path="/users"
              render={() => <div>Not redirected here</div>}
            />
            <Route
              exact
              path="/redirect-to-this-path"
              render={() => <div>Redirected here</div>}
            />
            <Route path="/login" render={() => <Login />} />
          </MemoryRouter>
        </ViewerContext.Provider>
      </MockedProvider>
    );

    assertTextExists(container, 'Redirected here');
  });
});
