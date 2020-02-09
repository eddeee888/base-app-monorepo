import React from 'react';
import Block from './Block';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

describe('<Block />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Block size="xs">
        <span>CHILDREN CONTENT</span>
      </Block>
    );
    assertTextExists(container, 'CHILDREN CONTENT');
  });
});
