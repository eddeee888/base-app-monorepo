import { mount } from 'enzyme';
import React from 'react';
import FormError from './FormError';

describe('<FormError />', () => {
  it('should be null if no error and no touched', () => {
    const wrapper = mount(<FormError />);
    expect(wrapper.html()).toBe(null);
  });

  it('should be null if has error & no touched', () => {
    const wrapper = mount(<FormError error="ERROR!" />);
    expect(wrapper.html()).toBe(null);
  });

  it('should be null if no error & touched', () => {
    const wrapper = mount(<FormError display={true} />);
    expect(wrapper.html()).toBe(null);
  });

  it('should match snapshot if: error & touched', () => {
    const wrapper = mount(<FormError error="ERROR!" display={true} />);
    expect(wrapper.html()).toMatch(/ERROR!/);
  });
});
