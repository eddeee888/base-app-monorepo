import { mount } from 'enzyme';
import React from 'react';
import Error404 from './Error404';

describe('<Error404 />', () => {
  it('shoud show correct text', () => {
    const wrapper = mount(<Error404 />);

    expect(wrapper.text()).toBe('Sorry! This content is unavailable!');
  });
});
