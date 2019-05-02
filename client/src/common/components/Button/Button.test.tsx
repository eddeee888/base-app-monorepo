import { CircularProgress } from '@material-ui/core';
import { mount } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('<Button />', () => {
  it('should mount correctly without loading', () => {
    const wrapper = mount(<Button>Test button</Button>);
    expect(wrapper.html()).toMatch(/Test button/);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').props().className).toBeTruthy();
    expect(wrapper.find(CircularProgress)).toHaveLength(0);
  });

  it('should mount correctly with loading', () => {
    const wrapper = mount(<Button loading>Test button</Button>);
    expect(wrapper.html()).toMatch(/Test button/);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').props().className).toBeTruthy();
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });
});
