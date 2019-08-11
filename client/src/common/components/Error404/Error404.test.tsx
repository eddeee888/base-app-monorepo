import React from 'react';
import Error404 from './Error404';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<Error404 />', () => {
  it('shoud show correct text', () => {
    const { container } = render(<Error404 />);

    assertTextExists(container, 'Sorry! This content is unavailable!');
  });
});
