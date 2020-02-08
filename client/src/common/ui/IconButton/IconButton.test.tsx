import React from 'react';
import IconButton from './IconButton';
import { render } from '@testing-library/react';

describe('<IconButton />', () => {
  it('should render an icon button', () => {
    const { container } = render(<IconButton icon="add" />);

    expect(container.querySelector('button')).toBeTruthy();
  });
});
