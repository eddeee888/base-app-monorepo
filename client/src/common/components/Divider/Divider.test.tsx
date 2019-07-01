import { mount } from 'enzyme';
import React from 'react';
import Divider from './Divider';

describe('<Divider />', () => {
  it('should render a <hr />', () => {
    const wrapper = mount(<Divider />);

    expect(wrapper.find('hr')).toHaveLength(1);
  });
});
