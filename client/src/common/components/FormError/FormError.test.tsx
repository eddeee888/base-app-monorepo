import { mount } from 'enzyme';
import React from 'react';
import FormError from './FormError';

describe('<FormError />', () => {
  it('should be null if error is null', () => {
    const wrapper = mount(<FormError error={null} />);
    expect(wrapper.html()).toBe(null);
  });

  it('should be null if error is empty string', () => {
    const wrapper = mount(<FormError error="" />);
    expect(wrapper.html()).toBe(null);
  });

  it('should be null if false', () => {
    const wrapper = mount(<FormError error={false} />);
    expect(wrapper.html()).toBe(null);
  });

  it('should be null if undefined', () => {
    const wrapper = mount(<FormError error={undefined} />);
    expect(wrapper.html()).toBe(null);
  });

  it('should show error if string', () => {
    const wrapper = mount(<FormError error="ERROR" />);
    expect(wrapper.text()).toMatch(/ERROR/);
  });

  it('should show error if ReactChild', () => {
    const wrapper = mount(<FormError error={<a>Hello</a>} />);
    expect(wrapper.text()).toMatch(/Hello/);
  });
});
