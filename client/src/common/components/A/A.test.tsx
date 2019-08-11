import React from 'react';
import A, { generateCss } from './A';
import { render } from '@testing-library/react';
import { assertTextLink } from 'test/utils/react-testing-library/assertTextLink';

describe('<A />', () => {
  it('should display an anchor with a class', () => {
    const { container } = render(<A href="/awesome/link">Linkage</A>);

    assertTextLink(container, {
      text: 'Linkage',
      href: '/awesome/link'
    });
  });
});

describe('generateCss()', () => {
  it('should return correct css object', () => {
    const cssObject = generateCss({ themeColor: 'primary' });
    expect(cssObject).not.toBe(null);
  });
});
