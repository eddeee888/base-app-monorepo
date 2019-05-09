import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router';
import SignupForm from './SignupForm';
import SignupFormComponent from './SignupFormComponent';
import SignupFormMutation from './SignupFormMutation';

describe('<SignupForm />', () => {
  it('should have SignupFormMutation and SignupFormComponent', () => {
    const wrapper = mount(
      <MockedProvider>
        <MemoryRouter>
          <SignupForm />
        </MemoryRouter>
      </MockedProvider>
    );
    expect(wrapper.find(SignupFormComponent)).toHaveLength(1);
    expect(wrapper.find(SignupFormMutation)).toHaveLength(1);
  });
});
