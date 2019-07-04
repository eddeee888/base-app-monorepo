import React from 'react';
import PageNotFound from './PageNotFound';
import { mount } from 'enzyme';

describe('<PageNotFound />', () => {
  it('should show Page Not Found text', () => {
    const wrapper = mount(<PageNotFound />);

    expect(wrapper.text()).toMatch(/Sorry! This content is unavailable!/);
  });
});
