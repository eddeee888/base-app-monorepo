import ViewerContext from 'common/components/ViewerContext';
import { routes } from 'common/helpers/pathing';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { Redirect, StaticRouter } from 'react-router';
import Login from './Login';
import LoginForm from './LoginForm';

describe('<Login />', () => {
  const contextValue = {
    viewer: null,
    setViewerValue: jest.fn()
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  const assertCommonElementsForNotLoggedIn = (wrapper: ReactWrapper) => {
    expect(wrapper.find(Redirect)).toHaveLength(0);
    expect(wrapper.find(`a[href='${routes.home.generate({})}']`)).toHaveLength(
      1
    );
    expect(wrapper.find(LoginForm)).toHaveLength(1);
    expect(wrapper.find('h1').text()).toBe('Log in');
  };

  it('should show login form if viewer is not logged in', () => {
    const wrapper = mount(
      <MockedProvider>
        <StaticRouter context={{}}>
          <ViewerContext.Provider value={contextValue}>
            <Login />
          </ViewerContext.Provider>
        </StaticRouter>
      </MockedProvider>
    );
    assertCommonElementsForNotLoggedIn(wrapper);
  });

  it('should show login form if viewer is not logged in and correct header', () => {
    const wrapper = mount(
      <MockedProvider>
        <StaticRouter
          location={{ searcher: '?redirect=/redirect-to-this-path' }}
          context={{}}
        >
          <ViewerContext.Provider value={contextValue}>
            <Login />
          </ViewerContext.Provider>
        </StaticRouter>
      </MockedProvider>
    );
    assertCommonElementsForNotLoggedIn(wrapper);
    expect(wrapper.find('h2').text()).toBe('to continue');
  });

  it('should redirect to dashboard if viewer is logged in', () => {
    const wrapper = mount(
      <MockedProvider>
        <StaticRouter context={{}}>
          <ViewerContext.Provider
            value={{
              ...contextValue,
              viewer: { id: '100' }
            }}
          >
            <Login />
          </ViewerContext.Provider>
        </StaticRouter>
      </MockedProvider>
    );
    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).prop('to')).toBe(routes.users.generate({}));
  });

  it('should redirect to where ever dictated by the Url Query', () => {
    const wrapper = mount(
      <MockedProvider>
        <StaticRouter
          location={{ searcher: '?redirect=/redirect-to-this-path' }}
          context={{}}
        >
          <ViewerContext.Provider
            value={{
              ...contextValue,
              viewer: { id: '100' }
            }}
          >
            <Login />
          </ViewerContext.Provider>
        </StaticRouter>
      </MockedProvider>
    );
    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).prop('to')).toBe('/redirect-to-this-path');
  });
});
