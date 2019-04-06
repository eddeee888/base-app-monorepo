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

    expect((wrapper.find('hr').prop('style') as any).marginTop).toBeTruthy();
  });
});
