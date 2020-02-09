import React from 'react';
import Text from './Text';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<Text />', () => {
  it('should display Text', () => {
    const { container } = render(<Text>Test Text</Text>);
    assertTextExists(container, 'Test Text');
  });
});
