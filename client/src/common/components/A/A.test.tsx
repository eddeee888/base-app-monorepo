import { mount } from 'enzyme';
import React from 'react';
import A, { generateCss } from './A';

describe('<A />', () => {
  it('should display an anchor with a class', () => {
    const wrapper = mount(<A>Linkage</A>);

    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('a').props().className).toBeTruthy();
    expect(wrapper.html()).toMatch(/Linkage/);
  });
});

describe('generateCss()', () => {
  it('should return correct css object', () => {
    const cssObject = generateCss({ themeColor: 'primary' });
    expect(cssObject).not.toBe(null);
  });
});
