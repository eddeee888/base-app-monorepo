import React from 'react';
import Select from './Select';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<Select />', () => {
  const options = [
    { value: '', label: '' },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];
  it(`should render with correct options`, () => {
    const { container } = render(<Select value="option1" options={options} />);

    assertTextExists(container, 'Option 1');
    assertTextExists(container, 'Option 2');
  });
});
