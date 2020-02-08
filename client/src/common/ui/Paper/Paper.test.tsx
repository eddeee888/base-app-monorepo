import React from 'react';
import Paper from './Paper';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<Paper />', () => {
  it('should display children', () => {
    const { container } = render(<Paper>Paper content</Paper>);
    assertTextExists(container, 'Paper content');
  });
});
