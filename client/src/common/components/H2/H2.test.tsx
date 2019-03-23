import { mount } from 'enzyme';
import React from 'react';
import H2 from './H2';

describe('<H2 />', () => {
  it('should render h2', () => {
    const wrapper = mount(<H2>H2 text</H2>);
    expect(wrapper.html()).toMatch(/H2 text/);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').props().className).toBeTruthy();
  });
});
