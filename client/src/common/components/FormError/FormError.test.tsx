import React from 'react';
import FormError from './FormError';
import { render } from '@testing-library/react';
import { assertTextLink } from 'test/utils/react-testing-library/assertTextLink';

describe('<FormError />', () => {
  it('should be null if error is null', () => {
    const { container } = render(<FormError error={null} />);
    expect(container.innerHTML).toBe('');
  });

  it('should be null if error is empty string', () => {
    const { container } = render(<FormError error="" />);
    expect(container.innerHTML).toBe('');
  });

  it('should be null if false', () => {
    const { container } = render(<FormError error={false} />);
    expect(container.innerHTML).toBe('');
  });

  it('should be null if undefined', () => {
    const { container } = render(<FormError error={undefined} />);
    expect(container.innerHTML).toBe('');
  });

  it('should show error if string', () => {
    const { container } = render(<FormError error="ERROR" />);
    expect(container.innerHTML).toMatch(/ERROR/);
  });

  it('should show error if ReactChild', () => {
    const { container } = render(<FormError error={<a href="/test">Hello</a>} />);
    assertTextLink(container, { text: 'Hello', href: '/test' });
  });
});
