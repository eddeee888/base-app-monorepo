import React from 'react';
import IconButtonFab from './IconButtonFab';
import { render } from '@testing-library/react';

describe('<IconButtonFab />', () => {
  it('should render a fab button', () => {
    const { container } = render(<IconButtonFab icon="add" />);

    expect(container.querySelector('button')).toBeTruthy();
  });
});
