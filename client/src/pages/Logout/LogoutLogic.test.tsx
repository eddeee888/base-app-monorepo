import { linkgen, Paths } from 'common/helpers/pathing';
import { mount } from 'enzyme';
import React from 'react';
import { Redirect, StaticRouter } from 'react-router-dom';
import LogoutLogic from './LogoutLogic';

describe('<Logout />', () => {
  const logout = jest.fn();
  const clearViewer = jest.fn();
  it('should clear session and log user out', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <LogoutLogic logout={logout} clearViewer={clearViewer} />
      </StaticRouter>
    );

    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).props().to).toBe(linkgen(Paths.home));

    // TOTEST: update to test useEffect once it's implemented in enzyme
    // expect(clearViewer).toHaveBeenCalledTimes(1);
    // expect(logout).toHaveBeenCalledTimes(1);
  });
});
