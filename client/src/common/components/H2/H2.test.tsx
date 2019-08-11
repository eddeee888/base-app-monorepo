import React from 'react';
import H2 from './H2';
import { render } from '@testing-library/react';

describe('<H2 />', () => {
  it('should render h2', () => {
    const { container } = render(<H2>H2 text</H2>);
    expect(container.querySelector('h2')).toBeTruthy();
    expect(container.querySelector('h2')!.innerHTML).toBe('H2 text');
  });
});
