import Box from '@material-ui/core/Box';
import { mount } from 'enzyme';
import React from 'react';
import Divider from './Divider';

describe('<Divider />', () => {
  it('should render a <hr />', () => {
    const wrapper = mount(<Divider />);

    expect(wrapper.find('hr')).toHaveLength(1);
  });

  it('should have margin top if passed in', () => {
    const wrapper = mount(<Divider marginTop={1} />);

    expect(
      wrapper
        .find(Box)
        .at(0)
        .prop('mt')
    ).toBe(1);
  });

  it('should have margin bottom if passed in', () => {
    const wrapper = mount(<Divider marginBottom={1} />);

    expect(
      wrapper
        .find(Box)
        .at(1)
        .prop('mb')
    ).toBe(1);
  });
});
