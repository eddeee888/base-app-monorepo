import Header from 'common/components/Header';
import getLayoutConfig from 'common/components/LayoutController/getLayoutConfig';
import { mount } from 'enzyme';
import React from 'react';
import { StaticRouter } from 'react-router';
import LayoutController from './LayoutController';

jest.mock('common/components/LayoutController/getLayoutConfig', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('<LayoutController />', () => {
  it('should show <Header /> if header display is true', () => {
    (getLayoutConfig as any).mockReturnValueOnce({
      header: { display: true }
    });

    const wrapper = mount(
      <StaticRouter context={{}}>
        <LayoutController />
      </StaticRouter>
    );

    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should hide <Header /> if header is display is false', () => {
    (getLayoutConfig as any).mockReturnValueOnce({
      header: { display: false }
    });

    const wrapper = mount(
      <StaticRouter context={{}}>
        <LayoutController />
      </StaticRouter>
    );

    expect(wrapper.find(Header)).toHaveLength(0);
  });
});
