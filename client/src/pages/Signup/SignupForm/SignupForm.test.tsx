import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router';
import SignupForm from './SignupForm';
import SignupFormComponent from './SignupFormComponent';
import { ViewerProvider } from 'common/components/ViewerContext';
import { SignupMutationComponent } from '../Signup.generated';

describe('<SignupForm />', () => {
  it('should have SignupMutationComponent and SignupFormComponent', () => {
    const wrapper = mount(
      <MockedProvider>
        <MemoryRouter>
          <ViewerProvider>
            <SignupForm />
          </ViewerProvider>
        </MemoryRouter>
      </MockedProvider>
    );
    expect(wrapper.find(SignupFormComponent)).toHaveLength(1);
    expect(wrapper.find(SignupMutationComponent)).toHaveLength(1);
  });
});
