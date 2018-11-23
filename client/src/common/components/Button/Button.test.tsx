import { mount } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('<Button />', () => {
  it('should match snapshot', () => {
    const wrapper = mount(<Button>Test button</Button>);
    expect(wrapper.html()).toMatch(/Test button/);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').props().className).toBeTruthy();
  });
});
