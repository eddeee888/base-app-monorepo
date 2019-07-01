import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { StaticRouter } from 'react-router';
import LoginForm from './LoginForm';
import LoginFormComponent from './LoginFormComponent';
import { ViewerProvider } from 'common/components/ViewerContext';
import { LoginMutationComponent } from '../Login.generated';

describe('<LoginForm />', () => {
  it('should have LoginFormMutation and LoginFormComponent', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <MockedProvider>
          <ViewerProvider>
            <LoginForm />
          </ViewerProvider>
        </MockedProvider>
      </StaticRouter>
    );

    expect(wrapper.find(LoginMutationComponent)).toHaveLength(1);
    expect(wrapper.find(LoginFormComponent)).toHaveLength(1);
  });
});
