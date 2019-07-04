import { mount } from 'enzyme';
import React from 'react';
import Block from './Block';

describe('<Block />', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Block size="xs">
        <span>CHILDREN CONTENT</span>
      </Block>
    );
    expect(wrapper.text()).toMatch(/CHILDREN CONTENT/);
  });
});
