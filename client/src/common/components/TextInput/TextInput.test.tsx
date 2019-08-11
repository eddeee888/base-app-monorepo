import React from 'react';
import TextInput from './TextInput';
import { render } from '@testing-library/react';

describe('<TextInput />', () => {
  it('should render an input with Test Text', () => {
    const { getByDisplayValue } = render(<TextInput value="Test Text" />);
    getByDisplayValue('Test Text');
  });
});
