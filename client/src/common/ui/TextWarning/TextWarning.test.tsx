import React from 'react';
import TextWarning from './TextWarning';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<Text />', () => {
  it('should display TextWarning', () => {
    const { container } = render(<TextWarning>Test Text</TextWarning>);
    assertTextExists(container, 'Test Text');
  });
});
