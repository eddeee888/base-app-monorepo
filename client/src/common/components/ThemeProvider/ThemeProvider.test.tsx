import { shallow } from 'enzyme';
import React from 'react';
import ThemeProvider from './ThemeProvider';

describe('<ThemeProvider />', () => {
  it('should render', () => {
    const wrapper = shallow(<ThemeProvider>Children</ThemeProvider>);
    expect(wrapper.html()).toMatch(/Children/);
  });
});
