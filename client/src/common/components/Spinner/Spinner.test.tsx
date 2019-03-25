import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { mount } from 'enzyme';
import React from 'react';
import Spinner from './Spinner';

describe('<Spinner />', () => {
  it('should show spinner if not fullWidth', () => {
    const wrapper = mount(<Spinner />);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });

  it('should show spinner and grid container and item if fullWidth', () => {
    const wrapper = mount(<Spinner fullWidth />);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(2);
    expect(
      wrapper
        .find(Grid)
        .filterWhere(
          gridItem =>
            gridItem.prop('container') === true &&
            gridItem.prop('justify') === 'center'
        )
    ).toHaveLength(1);
    expect(
      wrapper.find(Grid).filterWhere(gridItem => gridItem.prop('item') === true)
    ).toHaveLength(1);
  });
});
