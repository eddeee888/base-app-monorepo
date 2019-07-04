import { routes } from 'common/helpers/pathing';
import { mount } from 'enzyme';
import React from 'react';
import { Redirect, StaticRouter } from 'react-router-dom';
import LogoutLogic from './LogoutLogic';

describe('<Logout />', () => {
  const logout = jest.fn().mockResolvedValueOnce(true);
  const clearViewer = jest.fn();
  it('should clear session and log user out', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <LogoutLogic logout={logout} clearViewer={clearViewer} />
      </StaticRouter>
    );

    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).props().to).toBe(routes.home.generate({}));

    // TOTEST: update to test useEffect once it's implemented in enzyme
    // expect(clearViewer).toHaveBeenCalledTimes(1);
    // expect(logout).toHaveBeenCalledTimes(1);
  });
});
