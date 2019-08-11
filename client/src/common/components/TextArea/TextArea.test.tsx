import React from 'react';
import TextArea from './TextArea';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<TextArea />', () => {
  it('should display text value', () => {
    const { container } = render(<TextArea value="Test Text" />);
    assertTextExists(container, 'Test Text');
  });
});
