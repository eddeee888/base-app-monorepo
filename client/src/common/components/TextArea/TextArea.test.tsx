import { TextField } from '@material-ui/core';
import { mount } from 'enzyme';
import React from 'react';
import TextArea from './TextArea';

describe('<TextArea />', () => {
  it('should mount a MUI TextArea with default values', () => {
    const wrapper = mount(<TextArea />);

    const MUITextField = wrapper.find(TextField);

    expect(MUITextField.prop('fullWidth')).toBe(true);
    expect(MUITextField.prop('margin')).toBe('normal');
    expect(MUITextField.prop('multiline')).toBe(true);
    expect(MUITextField.prop('variant')).toBe('outlined');
  });
});
