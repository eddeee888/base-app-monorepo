import React from 'react';
import Spinner from './Spinner';
import { render } from '@testing-library/react';

describe('<Spinner />', () => {
  it('should show element with role progress bar ', () => {
    const { queryByRole } = render(<Spinner />);
    expect(queryByRole('progressbar')).toBeTruthy();
  });
});
