import { mount } from 'enzyme';
import React from 'react';
import Text from './Text';

describe('<Text />', () => {
  it('should display Text', () => {
    const wrapper = mount(<Text>Test Text</Text>);
    expect(wrapper.html()).toMatch(/Test Text/);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').props().className).toBeTruthy();
  });
});
