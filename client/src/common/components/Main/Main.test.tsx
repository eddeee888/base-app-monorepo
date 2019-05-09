import { mount } from 'enzyme';
import React from 'react';
import Main from './Main';

describe('<Main />', () => {
  it('should render with correct styling', () => {
    const wrapper = mount(<Main>Main component</Main>);
    expect(wrapper.html()).toMatch(/Main component/);
    expect(wrapper.find('main')).toHaveLength(1);
    expect(wrapper.find('main').props().className).toBeTruthy();
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').props().className).toBeTruthy();
  });
});
