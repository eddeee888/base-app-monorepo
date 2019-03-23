import TextField from '@material-ui/core/TextField';
import { mount } from 'enzyme';
import React from 'react';
import Select from './Select';

describe('<Select />', () => {
  const options = [
    { value: '', label: '' },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];
  it('should render with correct options', () => {
    const wrapper = mount(<Select value="option1" options={options} />);

    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find(TextField).prop('select')).toBe(true);
    expect(wrapper.find(TextField).prop('children')).toHaveLength(
      options.length
    );
    expect(wrapper.find('input').prop('value')).toBe('option1');
  });
});
