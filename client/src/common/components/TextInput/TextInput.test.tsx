import { mount } from 'enzyme';
import React from 'react';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('should render with correct input field', () => {
    const wrapper = mount(<TextInput />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('input').prop('className')).toBeTruthy();
  });
});
