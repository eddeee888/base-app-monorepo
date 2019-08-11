import React from 'react';
import ErrorGeneric from './ErrorGeneric';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<ErrorGeneric />', () => {
  it('shoud show correct text', () => {
    const { container } = render(<ErrorGeneric />);

    assertTextExists(
      container,
      'Unexpected error occurred. Please try again later.'
    );
  });
});
