import { mount } from 'enzyme';
import React from 'react';
import { StaticRouter } from 'react-router';
import Header from './Header';
import { ViewerProvider } from '../ViewerContext';

describe('<Header />', () => {
  it('should render', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <ViewerProvider>
          <Header />
        </ViewerProvider>
      </StaticRouter>
    );
    expect(wrapper.find('header')).toHaveLength(1);
  });
});
