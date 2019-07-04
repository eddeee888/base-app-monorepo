import ViewerContext from 'common/components/ViewerContext';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { Redirect, StaticRouter } from 'react-router';
import Signup from './Signup';
import SignupForm from './SignupForm';
import { routes } from 'common/helpers/pathing';

describe('<Signup />', () => {
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
    expect(wrapper.find(SignupForm)).toHaveLength(1);
    expect(wrapper.find('h1').text()).toBe('Sign up');
  };

  it('should show signup form if viewer is not logged in', () => {
    const wrapper = mount(
      <MockedProvider>
        <StaticRouter context={{}}>
          <ViewerContext.Provider value={contextValue}>
            <Signup />
          </ViewerContext.Provider>
        </StaticRouter>
      </MockedProvider>
    );
    assertCommonElementsForNotLoggedIn(wrapper);
  });

  it('should show signup form if viewer is not logged in and correct header', () => {
    const wrapper = mount(
      <MockedProvider>
        <StaticRouter
          location={{ searcher: '?redirect=/redirect-to-this-path' }}
          context={{}}
        >
          <ViewerContext.Provider value={contextValue}>
            <Signup />
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
            <Signup />
          </ViewerContext.Provider>
        </StaticRouter>
      </MockedProvider>
    );
    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).prop('to')).toBe(routes.home.generate({}));
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
            <Signup />
          </ViewerContext.Provider>
        </StaticRouter>
      </MockedProvider>
    );
    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).prop('to')).toBe('/redirect-to-this-path');
  });
});
