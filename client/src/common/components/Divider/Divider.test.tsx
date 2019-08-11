import React from 'react';
import Divider from './Divider';
import { render } from '@testing-library/react';

describe('<Divider />', () => {
  it('should render a <hr />', () => {
    const { container } = render(<Divider />);

    expect(container.querySelector('hr')).toBeTruthy();
  });
});
