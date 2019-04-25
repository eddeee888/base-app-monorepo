import { shallow } from 'enzyme';
import React from 'react';
import { Redirect } from 'react-router-dom';
import Logout from './Logout';

import ViewerContext from 'common/components/ViewerContext';
import { linkgen, Paths } from 'common/helpers/pathing';

jest.mock('common/components/ViewerContext', () => {
  return {
    _currentValue: {
      clearViewer: jest.fn()
    }
  };
});

describe('<Logout />', () => {
  it('should clear session and log user out', () => {
    const wrapper = shallow(<Logout />);

    wrapper.instance();

    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).props().to).toBe(linkgen(Paths.home));
    // @ts-ignore
    expect(ViewerContext._currentValue.clearViewer).toHaveBeenCalledTimes(1);
  });
});
