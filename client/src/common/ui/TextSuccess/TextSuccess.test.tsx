import React from 'react';
import TextSuccess from './TextSuccess';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<Text />', () => {
  it('should display TextSuccess', () => {
    const { container } = render(<TextSuccess>Test Text</TextSuccess>);
    assertTextExists(container, 'Test Text');
  });
});
