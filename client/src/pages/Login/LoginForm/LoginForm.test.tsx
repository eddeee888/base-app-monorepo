import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { StaticRouter } from 'react-router';
import LoginForm from './LoginForm';
import LoginFormComponent from './LoginFormComponent';
import LoginFormMutation from './LoginFormMutation';

describe('<LoginForm />', () => {
  it('should have LoginFormMutation and LoginFormComponent', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <MockedProvider>
          <LoginForm />
        </MockedProvider>
      </StaticRouter>
    );

    expect(wrapper.find(LoginFormMutation)).toHaveLength(1);
    expect(wrapper.find(LoginFormComponent)).toHaveLength(1);
  });
});
