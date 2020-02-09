import React from 'react';
import Button from './Button';
import { render } from '@testing-library/react';
import { assertButton } from 'test/utils/react-testing-library/assertButton';

describe('<Button />', () => {
  it('should mount correctly without loading', () => {
    const { container } = render(<Button>Test button</Button>);

    assertButton(container, { text: 'Test button' });
  });
});
