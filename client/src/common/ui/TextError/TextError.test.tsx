import React from 'react';
import TextError from './TextError';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<Text />', () => {
  it('should display TextError', () => {
    const { container } = render(<TextError>Test Text</TextError>);
    assertTextExists(container, 'Test Text');
  });
});
