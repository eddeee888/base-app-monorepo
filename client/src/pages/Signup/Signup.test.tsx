import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter, Redirect, Route } from 'react-router';
import Link from 'src/common/components/Link';
import { ViewerProvider } from 'src/common/components/ViewerContext';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import Signup from './Signup';
import SignupForm from './SignupForm';

describe('<Signup />', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <MockedProvider>
        <ViewerProvider>
          <MemoryRouter initialEntries={['/signup']} initialIndex={0}>
            <>
              <Route path="/" component={() => <div>Homepage</div>} />
              <Route path="/signup" component={Signup} />
            </>
          </MemoryRouter>
        </ViewerProvider>
      </MockedProvider>
    );
  });

  it('should show signup form if no viewer has been set', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find(Redirect)).toHaveLength(0);
    expect(wrapper.find(SignupForm)).toHaveLength(1);
  });

  it('should have links to homepage and login', () => {
    const links = wrapper.find(Link);
    expect(links).toHaveLength(2);
    expect(links.exists(`[href='${Paths.home}']`)).toBe(true);
    expect(links.exists(`[href='${Paths.login}']`)).toBe(true);
  });

  it('should redirect if already has viewer (means someone is logged in)', () => {
    wrapper.find(ViewerProvider).setState({
      viewer: {
        id: 'abc'
      }
    });

    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).prop('to')).toBe(linkgen(Paths.home));
    expect(wrapper.find(SignupForm)).toHaveLength(0);
  });
});
