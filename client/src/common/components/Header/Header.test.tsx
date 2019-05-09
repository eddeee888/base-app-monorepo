import { mount } from 'enzyme';
import React from 'react';
import { StaticRouter } from 'react-router';
import Header from './Header';

describe('<Header />', () => {
  it('should render', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <Header />
      </StaticRouter>
    );
    expect(wrapper.find('header')).toHaveLength(1);
  });
});
