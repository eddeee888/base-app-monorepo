import { mount } from 'enzyme';
import React from 'react';
import Paper from './Paper';

describe('<Paper />', () => {
  it('should display children', () => {
    const wrapper = mount(<Paper>Paper content</Paper>);
    expect(wrapper.html()).toMatch(/Paper content/);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
