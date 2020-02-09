import React from 'react';
import Main from './Main';
import { render } from '@testing-library/react';

describe('<Main />', () => {
  it('should render with a main tag with content', () => {
    const { queryByText } = render(<Main>Main component</Main>);
    expect(queryByText('Main component')).toBeTruthy();
    expect(queryByText('Main component')!.closest('main')).toBeTruthy();
  });
});
