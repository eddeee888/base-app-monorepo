import { mount } from 'enzyme';
import React from 'react';
import H1 from './H1';

describe('<H1 />', () => {
  it('should render h1', () => {
    const wrapper = mount(<H1>H1 text</H1>);
    expect(wrapper.html()).toMatch(/H1 text/);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h1').props().className).toBeTruthy();
  });
});
