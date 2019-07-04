import { mount } from 'enzyme';
import React from 'react';
import ErrorGeneric from './ErrorGeneric';

describe('<ErrorGeneric />', () => {
  it('shoud show correct text', () => {
    const wrapper = mount(<ErrorGeneric />);

    expect(wrapper.text()).toBe(
      'Unexpected error occurred. Please try again later.'
    );
  });
});
