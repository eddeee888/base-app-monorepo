import React from 'react';
import H1 from './H1';
import { render } from '@testing-library/react';

describe('<H1 />', () => {
  it('should render h1', () => {
    const { container } = render(<H1>H1 text</H1>);
    expect(container.querySelector('h1')).toBeTruthy();
    expect(container.querySelector('h1')!.innerHTML).toBe('H1 text');
  });
});
