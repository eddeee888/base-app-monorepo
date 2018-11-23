import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { Redirect, StaticRouter } from 'react-router';
import ViewerContext from 'src/common/components/ViewerContext';
import { Paths } from 'src/common/helpers/pathing';
import Login from './Login';
import LoginForm from './LoginForm';

describe('<Login />', () => {
  const contextValue = {
    viewer: null,
    setViewer: jest.fn(),
    clearViewer: jest.fn()
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

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

    expect(wrapper.find(Redirect)).toHaveLength(0);
    expect(wrapper.find(`a[href='${Paths.home}']`)).toHaveLength(1);
    expect(wrapper.find(`a[href='${Paths.signup}']`)).toHaveLength(1);
    expect(wrapper.find(LoginForm)).toHaveLength(1);
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
  });
});
